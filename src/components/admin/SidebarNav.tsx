"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, UserRound, BriefcaseBusiness, MonitorUp } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

const MENUS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/about", label: "About Me", icon: UserRound },
  { href: "/admin/experience", label: "Experience", icon: BriefcaseBusiness },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-4">
        <p className="font-gabarito text-lg font-bold text-color-darkPurple">Admin</p>
        <p className="text-xs text-color-secondaryText">Zaky Portofolio</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENUS.map((m) => (
                <SidebarMenuItem key={m.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === m.href}
                    tooltip={m.label}
                  >
                    <Link href={m.href}>
                      <m.icon />
                      <span>{m.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Lihat Situs">
              <Link href="/">
                <MonitorUp />
                <span>Lihat Situs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
