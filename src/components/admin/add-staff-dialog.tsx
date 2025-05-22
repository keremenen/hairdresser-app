"use client"

import { useState } from "react"
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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { staffFormSchema, TStaffForm } from "@/lib/validations"
import { Label } from "../ui/label"

type AddStaffDialogProps = {
  actionType: "add" | "edit"
  selectedStaff?: TStaffForm
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





export function AddStaffDialog({ actionType, selectedStaff, onOpenChange, onAddStaff }: AddStaffDialogProps) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const {
    register,
    getValues,
    trigger,
    formState: { isSubmitting, errors },
  } = useForm<TStaffForm>({
    resolver: zodResolver(staffFormSchema),
    defaultValues: {
      name: actionType === "edit" ? selectedStaff?.name : "",
      role: actionType === "edit" ? selectedStaff?.role : "",
      email: actionType === "edit" ? selectedStaff?.email : "",
      phone: actionType === "edit" ? selectedStaff?.phone : "",
      status: actionType === "edit" ? selectedStaff?.status : "active",
    },
  })



  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Staff Member</DialogTitle>
          <DialogDescription>Fill in the details to add a new staff member to your salon.</DialogDescription>
        </DialogHeader>


        <form className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="h-20 w-20">
              {avatarPreview ? (
                <AvatarImage src={avatarPreview || "/placeholder.svg"} />
              ) : (
                <AvatarFallback>
                  {getValues("name")
                    ? getValues("name")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                    : "NEW"}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <Input type="file" id="avatar" accept="image/*" className="hidden" />
              <Button type="button" variant="outline" size="sm" asChild>
                <label htmlFor="avatar" className="cursor-pointer">
                  Upload Photo
                </label>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role / Speciality</Label>
              <Input id="role" {...register("role")} />
              {errors.role && <p className="text-red-500">{errors.role.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>


          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Staff Member</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog >
  )
}
