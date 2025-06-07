"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, X } from "lucide-react"
import { StaffSchedule } from "./staff-schedule"
import { StaffButton } from "./staff-button"
import { useStaffContext } from "@/lib/hooks"
import { StaffMember } from "../../../generated/prisma"


export function StaffManagement() {
  const { selectedStaff, handleSetSelectedStaffId, staff } = useStaffContext()



  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Staff Management</h1>
        <StaffButton actionType="add">Add Staff Member</StaffButton>
      </div>

      {selectedStaff && (
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={selectedStaff.imageUrl || `/placeholder.svg?text=${selectedStaff.name.charAt(0)}`}
                  alt={selectedStaff.name}
                />
                <AvatarFallback>{selectedStaff.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{selectedStaff.name}'s Schedule</h2>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => handleSetSelectedStaffId(null)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </CardHeader>
          <CardContent>
            <StaffSchedule selectedStaff={selectedStaff} />
          </CardContent>
        </Card>
      )
      }

      <StaffList
        staff={staff}

      />
    </div >
  )


  type StaffListProps = {
    staff: StaffMember[]
  }

  function StaffList({
    staff,
  }: StaffListProps) {
    return (
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {staff.map((member) => (
          <Card key={member.id} className="gap-y-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant={member.isActive ? "default" : "outline"}>
                  {member.isActive ? "Active" : "Inactive"}
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
                  <AvatarImage
                    src={member.imageUrl || `/placeholder.svg?text=${member.name.charAt(0)}`}
                    alt={member.name}
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  {/* <span> appointments today</span> */}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => handleSetSelectedStaffId(
                  selectedStaff?.id === member.id ? null : member.id
                )}
              >
                {selectedStaff?.id === member.id ? "Hide Schedule" : "View Schedule"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    )
  }
}