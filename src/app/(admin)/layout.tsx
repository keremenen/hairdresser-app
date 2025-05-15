'use client'
import AdminHeader from '@/components/admin/admin-header'
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
          <div className="flex flex-col w-full">
            <AdminHeader />
            {children}
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}
