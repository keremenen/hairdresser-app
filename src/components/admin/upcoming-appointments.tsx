import { AppointmentType } from "@/data/appointments-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const exampleAppointments: AppointmentType[] = [
  {
    id: "appt-1",
    client: {
      name: "Jessica Thompson",
      email: "jessica.t@example.com",
      phone: "(555) 987-6543",
    },
    date: "2025-05-14",
    time: "9:00 AM",
    service: "Full Highlights",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
    notes: "Client prefers ashy tones",
  },
  {
    id: "appt-2",
    client: {
      name: "Sarah Miller",
      email: "sarah.m@example.com",
      phone: "(555) 876-5432",
    },
    date: "2025-05-14",
    time: "11:30 AM",
    service: "Women's Cut & Style",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "pending",
  },
  {
    id: "appt-3",
    client: {
      name: "Amanda Lee",
      email: "amanda.l@example.com",
      phone: "(555) 765-4321",
    },
    date: "2025-05-14",
    time: "2:00 PM",
    service: "Balayage",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
    notes: "First-time client, wants caramel highlights",
  },
  {
    id: "appt-4",
    client: {
      name: "Rachel Green",
      email: "rachel.g@example.com",
      phone: "(555) 654-3210",
    },
    date: "2025-05-14",
    time: "4:30 PM",
    service: "Root Touch-up",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "pending",
  },
  {
    id: "appt-5",
    client: {
      name: "Emily Wilson",
      email: "emily.w@example.com",
      phone: "(555) 543-2109",
    },
    date: "2025-05-15",
    time: "9:00 AM",
    service: "Women's Cut & Style",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "cancelled",
  },
]

type UpcomingAppointmentsProps = {
  className?: string
}

export default function UpcomingAppointments({ className }: UpcomingAppointmentsProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>The next 5 scheduled appointments</CardDescription>
      </CardHeader>
      <CardContent>
        {
          exampleAppointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between border-b last:border-0 py-3 first:pt-0">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?text=${appointment.client.name.charAt(0)}`} />
                  <AvatarFallback>{appointment.client.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{appointment.client.name}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>Sun, May 18, 2025</span>
                    <Clock className="ml-2 mr-1 h-3 w-3" />
                    <span>11:30</span>
                  </div>
                  <p className="text-sm">{appointment.service}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    appointment.status === "confirmed"
                      ? "default"
                      : appointment.status === "pending"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </Badge>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  )
}
