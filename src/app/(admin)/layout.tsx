'use client'
import AdminHeader from '@/components/admin/admin-header'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { StaffContextProvider } from '@/context/staff-context-provider'
import { getStaffMembers } from '@/lib/server-utils'


type AdminLayoutProps = {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const data = await getStaffMembers()
  return (
    <>
      <SidebarProvider defaultOpen >
        <div className="flex min-h-screen w-full">
          <AdminSidebar />
          <div className="flex flex-col w-full">
            <AdminHeader />
            <StaffContextProvider data={data}>
              {children}
            </StaffContextProvider>
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}
