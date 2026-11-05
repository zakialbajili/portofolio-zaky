import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth";
import { createProject, getProjects } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;
  return NextResponse.json(getProjects());
}

export async function POST(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const body = await request.json().catch(() => null);
  const title = String(body?.title ?? "").trim();
  const description = String(body?.description ?? "").trim();
  const image_url = String(body?.image_url ?? "").trim();

  if (!title || !description || !image_url) {
    return NextResponse.json({ error: "title, description, image_url are required" }, { status: 400 });
  }

  const id = createProject({ title, description, image_url, sort_order: 0 });
  return NextResponse.json({ id }, { status: 201 });
}
