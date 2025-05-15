import DashboardHeader from "@/components/admin/dashboard-header";
import DashboardOverview from "@/components/admin/dashboard-overview";
import UpcomingAppointments from "@/components/admin/upcoming-appointments";

export default function DashboardPage() {
  return (
    <main className="p-4 space-y-6">
      <DashboardHeader />
      <DashboardOverview />
      <UpcomingAppointments />
    </main>
  )
}
