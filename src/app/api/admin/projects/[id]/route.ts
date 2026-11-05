import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth";
import { deleteProject, updateProject } from "@/lib/content";

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
  const title = String(body?.title ?? "").trim();
  const description = String(body?.description ?? "").trim();
  const image_url = String(body?.image_url ?? "").trim();

  if (!title || !description || !image_url) {
    return NextResponse.json({ error: "title, description, image_url are required" }, { status: 400 });
  }

  updateProject(numericId, { title, description, image_url, sort_order: 0 });
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

  deleteProject(numericId);
  return NextResponse.json({ ok: true });
}
