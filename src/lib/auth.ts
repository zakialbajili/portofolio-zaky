import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const COOKIE_NAME = "admin_token";

// Dev fallbacks — must be set via env in production.
const username = () => process.env.ADMIN_USERNAME || "admin";
const password = () => process.env.ADMIN_PASSWORD || "admin123";
const secret = () => process.env.SESSION_SECRET || "dev-secret";

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function makeToken(): string {
  const payload = `${Date.now()}:${username()}`;
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token: string): boolean {
  const dot = token.lastIndexOf(".");
  if (dot === -1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = sign(payload);
  try {
    return timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function checkCredentials(inputUsername: string, inputPassword: string): boolean {
  return inputUsername === username() && inputPassword === password();
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return Boolean(token && verifyToken(token));
}

/** For route handlers: return 401 JSON if not authed. */
export async function requireAdminApi(): Promise<NextResponse | null> {
  if (await isAuthed()) return null;
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

/** For admin pages: redirect to /admin/login if not authed. */
export async function requireAdminPage(): Promise<void> {
  if (!(await isAuthed())) {
    redirect("/admin/login");
  }
}

export async function setAuthCookie(): Promise<void> {
  const store = await cookies();
  store.set(COOKIE_NAME, makeToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAuthCookie(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
