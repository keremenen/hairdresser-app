"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AppointmentsData } from "@/data/appointments-data"
import { StaffMember } from "../../../generated/prisma"

type StaffScheduleProps = {
  selectedStaff: StaffMember
}

type Appointment = {
  id: string
  date: string
  time: string
  service: string
  status: "confirmed" | "pending" | "cancelled"
  client: {
    name: string
  }
}

export function StaffSchedule({ selectedStaff }: StaffScheduleProps) {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<string>(
    today.toISOString().split("T")[0]
  )

  // Mock data - replace with actual appointment data for the selected staff
  const staffAppointments: Appointment[] = AppointmentsData.filter(
    appointment => appointment.stylist.id === selectedStaff.id
  )

  const navigateDate = (direction: "prev" | "next") => {
    const currentDate = new Date(selectedDate)
    const multiplier = direction === "next" ? 1 : -1

    currentDate.setDate(currentDate.getDate() + multiplier)
    setSelectedDate(currentDate.toISOString().split("T")[0])
  }

  const sortAppointmentsByTime = (appointments: Appointment[]): Appointment[] => {
    return appointments.sort((a, b) => {
      const timeA = a.time.includes("AM")
        ? Number.parseInt(a.time)
        : Number.parseInt(a.time) + 12
      const timeB = b.time.includes("AM")
        ? Number.parseInt(b.time)
        : Number.parseInt(b.time) + 12
      return timeA - timeB
    })
  }

  const getDayAppointments = (date: string): Appointment[] => {
    const appointments = staffAppointments.filter(
      appointment => appointment.date === date
    )
    return sortAppointmentsByTime(appointments)
  }

  const getStatusVariant = (status: Appointment["status"]) => {
    switch (status) {
      case "confirmed":
        return "default"
      case "pending":
        return "outline"
      case "cancelled":
        return "destructive"
      default:
        return "outline"
    }
  }

  const selectedDayAppointments = getDayAppointments(selectedDate)

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => navigateDate("prev")}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="font-medium">{formatDate(selectedDate)}</div>

        <Button variant="outline" size="icon" onClick={() => navigateDate("next")}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {selectedDayAppointments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No appointments scheduled for this day
          </div>
        ) : (
          <div className="space-y-2">
            {selectedDayAppointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                statusVariant={getStatusVariant(appointment.status)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

type AppointmentCardProps = {
  appointment: Appointment
  statusVariant: string
}

function AppointmentCard({ appointment, statusVariant }: AppointmentCardProps) {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-medium">{appointment.client.name}</div>
          <div className="text-sm text-muted-foreground">
            {appointment.time} - {appointment.service}
          </div>
        </div>
        <Badge variant={statusVariant as any}>
          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
        </Badge>
      </div>
    </Card>
  )
}
