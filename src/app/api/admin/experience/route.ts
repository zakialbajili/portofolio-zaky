import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth";
import { createExperience, getExperiences } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;
  return NextResponse.json(getExperiences());
}

export async function POST(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const body = await request.json().catch(() => null);
  const role = String(body?.role ?? "").trim();
  const company = String(body?.company ?? "").trim();
  const period = String(body?.period ?? "").trim();

  if (!role || !company || !period) {
    return NextResponse.json({ error: "role, company, period are required" }, { status: 400 });
  }

  const id = createExperience({ role, company, period, sort_order: 0 });
  return NextResponse.json({ id }, { status: 201 });
}
