import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth";
import { createEducation, getEducation } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;
  return NextResponse.json(getEducation());
}

export async function POST(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const body = await request.json().catch(() => null);
  const degree = String(body?.degree ?? "").trim();
  const school = String(body?.school ?? "").trim();
  const period = String(body?.period ?? "").trim();

  if (!degree || !school || !period) {
    return NextResponse.json({ error: "degree, school, period are required" }, { status: 400 });
  }

  const id = createEducation({ degree, school, period, sort_order: 0 });
  return NextResponse.json({ id }, { status: 201 });
}
