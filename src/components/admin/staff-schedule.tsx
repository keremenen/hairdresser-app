"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { formatDate } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AppointmentsData } from "@/data/appointments-data"
import { StaffMember } from "../../../generated/prisma"

type StaffScheduleProps = {
  selectedStaff: StaffMember
}

export function StaffSchedule({ selectedStaff }: StaffScheduleProps) {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<string>(today.toISOString().split("T")[0])
  const [viewMode, setViewMode] = useState<"day" | "week">("day")

  // Get staff appointments


  // Generate dates for the week view
  const generateWeekDates = () => {
    const dates = []
    const startDate = new Date(selectedDate)

    // Adjust to start from Monday if not already
    const dayOfWeek = startDate.getDay()
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek // If Sunday, go back 6 days, otherwise go to Monday
    startDate.setDate(startDate.getDate() + diff)

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + i)
      dates.push(date.toISOString().split("T")[0])
    }
    return dates
  }

  const weekDates = generateWeekDates()

  // Navigate between days/weeks
  const navigateDate = (direction: "prev" | "next") => {
    const currentDate = new Date(selectedDate)
    if (viewMode === "day") {
      currentDate.setDate(currentDate.getDate() + (direction === "next" ? 1 : -1))
    } else {
      currentDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7))
    }
    setSelectedDate(currentDate.toISOString().split("T")[0])
  }

  // Filter appointments for the selected day
  const getDayAppointments = (date: string) => {
    return staffAppointments
      .filter((appointment) => appointment.date === date)
      .sort((a, b) => {
        // Sort by time
        const timeA = a.time.includes("AM") ? Number.parseInt(a.time) : Number.parseInt(a.time) + 12
        const timeB = b.time.includes("AM") ? Number.parseInt(b.time) : Number.parseInt(b.time) + 12
        return timeA - timeB
      })
  }

  const selectedDayAppointments = getDayAppointments(selectedDate)

  // Time slots for the day view
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => navigateDate("prev")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {viewMode === "day" ? (
            <div className="font-medium">{formatDate(selectedDate)}</div>
          ) : (
            <div className="font-medium">
              {formatDate(weekDates[0])} - {formatDate(weekDates[6])}
            </div>
          )}

          <Button variant="outline" size="icon" onClick={() => navigateDate("next")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Select value={viewMode} onValueChange={(value) => setViewMode(value as "day" | "week")}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="View" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Day View</SelectItem>
            <SelectItem value="week">Week View</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {viewMode === "day" ? (
        <div className="space-y-4">
          {selectedDayAppointments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No appointments scheduled for this day</div>
          ) : (
            <div className="space-y-2">
              {selectedDayAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{appointment.client.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.time} - {appointment.service}
                      </div>
                    </div>
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
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">Time</th>
                {weekDates.map((date) => (
                  <th key={date} className="border p-2 text-center">
                    {new Date(date).toLocaleDateString("en-US", { weekday: "short" })}
                    <br />
                    {new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="border p-2 font-medium">{time}</td>
                  {weekDates.map((date) => {
                    const appointments = getDayAppointments(date).filter((appointment) => appointment.time === time)
                    return (
                      <td key={`${date}-${time}`} className="border p-2 h-16 align-top">
                        {appointments.length > 0 ? (
                          <div className="space-y-1">
                            {appointments.map((appointment) => (
                              <div
                                key={appointment.id}
                                className={`text-xs p-1 rounded ${appointment.status === "confirmed"
                                  ? "bg-primary/10"
                                  : appointment.status === "pending"
                                    ? "bg-yellow-100"
                                    : "bg-red-100"
                                  }`}
                              >
                                {appointment.client.name.split(" ")[0]}
                                <span className="block truncate">{appointment.service}</span>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
