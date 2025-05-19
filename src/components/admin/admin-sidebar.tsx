import {
  CalendarCheck,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const SidebarMenuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    name: "Appointments",
    href: "/dashboard/appointments",
    icon: <CalendarCheck className="h-4 w-4" />,
  },
  {
    name: "Staff",
    href: "/dashboard/staff",
    icon: <Users className="h-4 w-4" />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

export function AdminSidebar() {
  const { state } = useSidebar()
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  return (
    <Sidebar
      variant="inset"
      collapsible={isMobile ? "offcanvas" : "icon"}
      className="border-r"
    >
      <SidebarHeader className="py-2 pb-4">
        <div className="flex items-center flex-col justify-between">
          {
            state === "collapsed" ? (<p>HA</p>) : (
              <>
                <span className="text-lg font-semibold">Hairdresser App</span>
                <span className="text-muted-foreground text-xs">
                  Admin Dashboard
                </span>
              </>
            )
          }
        </div>
      </SidebarHeader>
      <SidebarSeparator className="m-0" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Options</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarMenuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.endsWith(
                      `/${item.name.toLowerCase()}`,
                    )}
                    tooltip={item.name}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith("/admin/settings")}
              tooltip="Settings"
            >
              <Link href="/admin/settings">
                <Settings className="h-4 w-4" />
                <span>Back to page</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}