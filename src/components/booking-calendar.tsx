"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock } from "lucide-react"

const HAIRDRESSERS = [
  { id: "1", name: "Emma Johnson", specialty: "Color Specialist" },
  { id: "2", name: "Michael Chen", specialty: "Cutting Expert" },
  { id: "3", name: "Sophia Rodriguez", specialty: "Styling & Updos" },
  { id: "4", name: "David Kim", specialty: "Texture & Treatments" },
]

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

export function BookingCalendar() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [hairdresser, setHairdresser] = useState<string>("")
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [notes, setNotes] = useState<string>("")



  return (
    <section id="booking" className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Book Your Appointment</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Select your preferred date, stylist, and time to schedule your next salon visit.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Appointment Request</CardTitle>
            <CardDescription>
              Fill out the form below to request an appointment. We'll confirm your booking via email or phone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Select Date</Label>
                  <div className="border rounded-md p-2">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => {
                        // Disable past dates and Sundays
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today || date.getDay() === 0
                      }}
                      className="rounded-md border-none"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="hairdresser">Select Hairdresser</Label>
                    <Select value={hairdresser} onValueChange={setHairdresser}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a stylist" />
                      </SelectTrigger>
                      <SelectContent>
                        {HAIRDRESSERS.map((stylist) => (
                          <SelectItem key={stylist.id} value={stylist.id}>
                            {stylist.name} - {stylist.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Select Time</Label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_SLOTS.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {date && hairdresser && timeSlot && (
                    <div className="p-3 bg-muted rounded-md flex items-center gap-2 text-sm">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                      <span>
                        {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                      </span>
                      <Clock className="h-4 w-4 ml-2 text-primary" />
                      <span>{timeSlot}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific services or requests?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Request Appointment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
