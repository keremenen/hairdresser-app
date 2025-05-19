"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plus, X } from "lucide-react"
// import { StaffSchedule } from "@/components/admin/staff-schedule"

export function StaffManagement() {
  const [selectedStaffId, setSelectedStaffId] = useState<string | null>(null)

  const staff = [
    {
      id: "1",
      name: "Emma Johnson",
      role: "Color Specialist",
      email: "emma@elegancesalon.com",
      phone: "(555) 123-4567",
      schedule: "Mon-Fri: 9:00 AM - 5:00 PM",
      appointmentsToday: 4,
      status: "active",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Cutting Expert",
      email: "michael@elegancesalon.com",
      phone: "(555) 234-5678",
      schedule: "Tue-Sat: 10:00 AM - 6:00 PM",
      appointmentsToday: 3,
      status: "active",
    },
    {
      id: "3",
      name: "Sophia Rodriguez",
      role: "Styling & Updos",
      email: "sophia@elegancesalon.com",
      phone: "(555) 345-6789",
      schedule: "Mon-Fri: 9:00 AM - 5:00 PM",
      appointmentsToday: 5,
      status: "active",
    },
    {
      id: "4",
      name: "David Kim",
      role: "Texture & Treatments",
      email: "david@elegancesalon.com",
      phone: "(555) 456-7890",
      schedule: "Wed-Sun: 12:00 PM - 8:00 PM",
      appointmentsToday: 2,
      status: "active",
    },
  ]

  const handleViewSchedule = (staffId: string) => {
    setSelectedStaffId(staffId === selectedStaffId ? null : staffId)
  }

  const selectedStaff = staff.find((member) => member.id === selectedStaffId)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Staff Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Staff Member
        </Button>
      </div>

      {selectedStaffId && selectedStaff && (
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/placeholder.svg?text=${selectedStaff.name.charAt(0)}`} />
                <AvatarFallback>{selectedStaff.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{selectedStaff.name}'s Schedule</h2>
                <p className="text-sm text-muted-foreground">{selectedStaff.schedule}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSelectedStaffId(null)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </CardHeader>
          <CardContent>
            {/* <StaffSchedule staffId={selectedStaffId} /> */}
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {staff.map((member) => (
          <Card key={member.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant={member.status === "active" ? "default" : "outline"}>
                  {member.status === "active" ? "Active" : "Inactive"}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <span className="sr-only">More options</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`/placeholder.svg?text=${member.name.charAt(0)}`} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{member.schedule}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{member.appointmentsToday} appointments today</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant={selectedStaffId === member.id ? "default" : "outline"}
                size="sm"
                className="w-full"
                onClick={() => handleViewSchedule(member.id)}
              >
                {selectedStaffId === member.id ? "Hide Schedule" : "View Schedule"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
