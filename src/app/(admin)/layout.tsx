'use client'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { SidebarHeader, SidebarProvider } from '@/components/ui/sidebar'


type AdminLayoutProps = {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <SidebarProvider defaultOpen >
        <div className="flex min-h-screen w-full">
          <AdminSidebar />
          {children}

        </div>
      </SidebarProvider>
    </>
  )
}
