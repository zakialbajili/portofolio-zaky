import { NextResponse } from "next/server";
import { checkCredentials, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const inputUsername = String(body?.username ?? "");
  const inputPassword = String(body?.password ?? "");

  if (!checkCredentials(inputUsername, inputPassword)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await setAuthCookie();
  return NextResponse.json({ ok: true });
}
