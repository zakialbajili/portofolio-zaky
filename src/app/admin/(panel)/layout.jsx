import { requireAdminPage } from "@/lib/auth";
import { AppSidebar } from "@/components/admin/SidebarNav";
import LogoutButton from "@/components/admin/LogoutButton";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata = {
  title: 'Admin | Zaky Maulana Al Bajili',
}

export default async function AdminLayout({ children }) {
  await requireAdminPage();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="ml-auto">
            <LogoutButton />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-color-subtleGray">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
