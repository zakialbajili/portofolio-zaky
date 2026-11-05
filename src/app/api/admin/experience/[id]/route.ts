import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth";
import { deleteExperience, updateExperience } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const { id } = await params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  const role = String(body?.role ?? "").trim();
  const company = String(body?.company ?? "").trim();
  const period = String(body?.period ?? "").trim();

  if (!role || !company || !period) {
    return NextResponse.json({ error: "role, company, period are required" }, { status: 400 });
  }

  updateExperience(numericId, { role, company, period, sort_order: 0 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const { id } = await params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  deleteExperience(numericId);
  return NextResponse.json({ ok: true });
}
