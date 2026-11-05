import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth";
import { deleteEducation, updateEducation } from "@/lib/content";

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
  const degree = String(body?.degree ?? "").trim();
  const school = String(body?.school ?? "").trim();
  const period = String(body?.period ?? "").trim();

  if (!degree || !school || !period) {
    return NextResponse.json({ error: "degree, school, period are required" }, { status: 400 });
  }

  updateEducation(numericId, { degree, school, period, sort_order: 0 });
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

  deleteEducation(numericId);
  return NextResponse.json({ ok: true });
}
