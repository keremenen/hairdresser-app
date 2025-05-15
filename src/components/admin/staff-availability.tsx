import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

type StallAvailabilityProps = {
  className?: string
}

export default function StallAvailability({ className }: StallAvailabilityProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Staff Availability</CardTitle>
        <CardDescription>Today's schedule for each stylist</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { name: "Emma Johnson", availability: "9:00 AM - 5:00 PM", appointments: 4 },
            { name: "Michael Chen", availability: "10:00 AM - 6:00 PM", appointments: 3 },
            { name: "Sophia Rodriguez", availability: "9:00 AM - 5:00 PM", appointments: 5 },
            { name: "David Kim", availability: "12:00 PM - 8:00 PM", appointments: 2 },
          ].map((staff) => (
            <div key={staff.name} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{staff.name}</p>
                <p className="text-sm text-muted-foreground">{staff.availability}</p>
              </div>
              <div className="text-sm">
                <span className="font-medium">{staff.appointments}</span> appointments
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
