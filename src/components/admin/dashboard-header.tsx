import { Button } from '../ui/button'

export default function DashboardHeader() {
  return (
    <section className="flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <Button>View All Appointments</Button>
    </section>
  )
}
