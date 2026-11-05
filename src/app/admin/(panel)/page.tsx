import Link from "next/link";
import { requireAdminPage } from "@/lib/auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderKanban, UserRound, BriefcaseBusiness } from "lucide-react";

const MENUS = [
  {
    href: "/admin/projects",
    title: "Projects",
    desc: "Kelola daftar project",
    icon: FolderKanban,
  },
  {
    href: "/admin/about",
    title: "About Me",
    desc: "Edit intro & profil",
    icon: UserRound,
  },
  {
    href: "/admin/experience",
    title: "Experience",
    desc: "Kelola education & work experience",
    icon: BriefcaseBusiness,
  },
];

export default async function AdminDashboardPage() {
  await requireAdminPage();

  return (
    <div className="w-full max-w-3xl flex flex-col gap-8">
      <header>
        <h1 className="font-gabarito text-3xl font-bold text-color-darkPurple">
          Dashboard
        </h1>
        <p className="text-sm text-color-secondaryText">
          Kelola konten portofolio dari menu berikut.
        </p>
      </header>

      <div className="grid sm:grid-cols-3 gap-5">
        {MENUS.map((m) => (
          <Card key={m.href} className="p-5 shadow-sm">
            <m.icon className="h-8 w-8 text-color-darkPurple mb-3" />
            <h2 className="font-gabarito font-semibold text-color-primerText">
              {m.title}
            </h2>
            <p className="text-sm text-color-secondaryText mb-4">{m.desc}</p>
            <Button asChild variant="default" size="sm">
              <Link href={m.href}>Buka</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
