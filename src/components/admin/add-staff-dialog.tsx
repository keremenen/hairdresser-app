"use client"

import type React from "react"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface AddStaffDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddStaff: (staff: {
    name: string
    role: string
    email: string
    phone: string
    schedule: string
    status: "active" | "inactive"
  }) => void
}

const staffFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  schedule: z.string().min(2, { message: "Please enter a schedule." }),
  status: z.enum(["active", "inactive"]),
  workDays: z.array(z.string()).optional(),
})

type StaffFormValues = z.infer<typeof staffFormSchema>

const defaultValues: Partial<StaffFormValues> = {
  name: "",
  role: "",
  email: "",
  phone: "",
  schedule: "Mon-Fri: 9:00 AM - 5:00 PM",
  status: "active",
  workDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
}

export function AddStaffDialog({ open, onOpenChange, onAddStaff }: AddStaffDialogProps) {
  const [activeTab, setActiveTab] = useState("basic")
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const form = useForm<StaffFormValues>({
    resolver: zodResolver(staffFormSchema),
    defaultValues,
  })

  function onSubmit(data: StaffFormValues) {
    onAddStaff({
      name: data.name,
      role: data.role,
      email: data.email,
      phone: data.phone,
      schedule: data.schedule,
      status: data.status,
    })
    form.reset(defaultValues)
    setAvatarPreview(null)
    setActiveTab("basic")
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const workDays = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Staff Member</DialogTitle>
          <DialogDescription>Fill in the details to add a new staff member to your salon.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="h-20 w-20">
                    {avatarPreview ? (
                      <AvatarImage src={avatarPreview || "/placeholder.svg"} />
                    ) : (
                      <AvatarFallback>
                        {form.watch("name")
                          ? form
                            .watch("name")
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                          : "NEW"}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <input type="file" id="avatar" accept="image/*" className="hidden" onChange={handleFileChange} />
                    <Button type="button" variant="outline" size="sm" asChild>
                      <label htmlFor="avatar" className="cursor-pointer">
                        Upload Photo
                      </label>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role / Specialty</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Color Specialist">Color Specialist</SelectItem>
                            <SelectItem value="Cutting Expert">Cutting Expert</SelectItem>
                            <SelectItem value="Styling & Updos">Styling & Updos</SelectItem>
                            <SelectItem value="Texture & Treatments">Texture & Treatments</SelectItem>
                            <SelectItem value="Barber">Barber</SelectItem>
                            <SelectItem value="Nail Technician">Nail Technician</SelectItem>
                            <SelectItem value="Makeup Artist">Makeup Artist</SelectItem>
                            <SelectItem value="Salon Manager">Salon Manager</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange as (value: string) => void} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Active staff members can accept appointments and appear in the booking system.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4 pt-4">
                <FormField
                  control={form.control}
                  name="workDays"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Working Days</FormLabel>
                        <FormDescription>Select the days this staff member works.</FormDescription>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {workDays.map((day) => (
                          <FormField
                            key={day.id}
                            control={form.control}
                            name="workDays"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={day.id}
                                  className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(day.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), day.id])
                                          : field.onChange(field.value?.filter((value) => value !== day.id) || [])
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">{day.label}</FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator className="my-4" />

                <FormField
                  control={form.control}
                  name="schedule"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Schedule Summary</FormLabel>
                      <FormControl>
                        <Input placeholder="Mon-Fri: 9:00 AM - 5:00 PM" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter a summary of the staff member's working hours (e.g., Mon-Fri: 9:00 AM - 5:00 PM)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FormLabel>Start Time</FormLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select start time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <FormLabel>End Time</FormLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select end time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="profile" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <FormLabel>Bio</FormLabel>
                  <textarea
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter a short bio for this staff member..."
                  />
                </div>

                <div className="space-y-2">
                  <FormLabel>Services</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Women's Cut & Style",
                      "Men's Cut & Style",
                      "Children's Cut",
                      "Blowout & Style",
                      "Color Services",
                      "Highlights",
                      "Balayage",
                      "Treatments",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={`service-${service}`} />
                        <label
                          htmlFor={`service-${service}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <FormLabel>Experience Level</FormLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior Stylist</SelectItem>
                      <SelectItem value="stylist">Stylist</SelectItem>
                      <SelectItem value="senior">Senior Stylist</SelectItem>
                      <SelectItem value="master">Master Stylist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Add Staff Member</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
