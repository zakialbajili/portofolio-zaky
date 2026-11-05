import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/auth";
import { getAbout, updateAbout } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;
  return NextResponse.json(getAbout());
}

export async function PUT(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const role = String(body?.role ?? "").trim();
  const years_experience = String(body?.years_experience ?? "").trim();
  const bio = String(body?.bio ?? "").trim();

  if (!name || !role || !years_experience || !bio) {
    return NextResponse.json(
      { error: "name, role, years_experience, bio are required" },
      { status: 400 }
    );
  }

  const about = updateAbout({ name, role, years_experience, bio });
  return NextResponse.json(about);
}
