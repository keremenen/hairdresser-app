import DashboardHeader from "@/components/admin/dashboard-header";
import DashboardOverview from "@/components/admin/dashboard-overview";
import StallAvailability from "@/components/admin/staff-availability";
import UpcomingAppointments from "@/components/admin/upcoming-appointments";

export default function DashboardPage() {
  return (
    <main className="p-4 space-y-6">
      <DashboardHeader />
      <DashboardOverview />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <UpcomingAppointments />
        <StallAvailability />
      </div>
    </main>
  )
}
