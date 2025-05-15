"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Download, Search } from "lucide-react"
import { formatDate, formatTime } from "@/lib/utils"
import { AppointmentsData, AppointmentType } from "@/data/appointments-data"


export function AppointmentsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [stylistFilter, setStylistFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  // Filter appointments based on search and filters
  const filteredAppointments = AppointmentsData.filter((appointment) => {
    // Search filter
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch =
      appointment.client.name.toLowerCase().includes(searchLower) ||
      appointment.client.email.toLowerCase().includes(searchLower) ||
      appointment.client.phone.toLowerCase().includes(searchLower) ||
      appointment.service.toLowerCase().includes(searchLower)

    // Status filter
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter

    // Stylist filter
    const matchesStylist = stylistFilter === "all" || appointment.stylist.id === stylistFilter

    // Date filter
    let matchesDate = true
    const appointmentDate = new Date(appointment.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (dateFilter === "today") {
      matchesDate = appointmentDate.toDateString() === today.toDateString()
    } else if (dateFilter === "upcoming") {
      matchesDate = appointmentDate >= today
    } else if (dateFilter === "past") {
      matchesDate = appointmentDate < today
    }

    return matchesSearch && matchesStatus && matchesStylist && matchesDate
  })

  return (
    <section className="space-y-6">
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </section>

      <AppointmentsListHeader
        setStatusFilter={setStatusFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        statusFilter={statusFilter}
        stylistFilter={stylistFilter}
        setStylistFilter={setStylistFilter}
      />

      <AppointmentsListTable filteredAppointments={filteredAppointments} />

    </section>
  )
}

type AppointmentsListHeaderProps = {
  searchQuery: string
  setSearchQuery: (query: string) => void
  dateFilter: string
  setDateFilter: (filter: string) => void
  statusFilter: string
  setStatusFilter: (filter: string) => void
  stylistFilter: string
  setStylistFilter: (filter: string) => void
}

function AppointmentsListHeader({ searchQuery, setSearchQuery, dateFilter, setDateFilter, statusFilter, setStatusFilter, stylistFilter, setStylistFilter }: AppointmentsListHeaderProps) {
  return (
    <section className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
      <div className="flex items-center space-x-2 w-full md:w-auto">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search appointments..."
          className="h-9 md:w-[250px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <Select value={dateFilter} onValueChange={setDateFilter}>
          <SelectTrigger className="h-9 w-full md:w-[150px]">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All dates</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="past">Past</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="h-9 w-full md:w-[150px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

        <Select value={stylistFilter} onValueChange={setStylistFilter}>
          <SelectTrigger className="h-9 w-full md:w-[180px]">
            <SelectValue placeholder="Filter by stylist" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All stylists</SelectItem>
            <SelectItem value="1">Emma Johnson</SelectItem>
            <SelectItem value="2">Michael Chen</SelectItem>
            <SelectItem value="3">Sophia Rodriguez</SelectItem>
            <SelectItem value="4">David Kim</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}

type AppointmentsListTableProps = {
  filteredAppointments: AppointmentType[]
}

function AppointmentsListTable({ filteredAppointments }: AppointmentsListTableProps) {
  return (
    <section className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Stylist</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAppointments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center h-24">
                No appointments found
              </TableCell>
            </TableRow>
          ) : (
            filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{appointment.client.name}</p>
                    <p className="text-sm text-muted-foreground">{appointment.client.email}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span className="text-sm">{formatDate(appointment.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span className="text-sm">{formatTime(appointment.time)}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.stylist.name}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </section>
  )
}