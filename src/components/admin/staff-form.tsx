"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { staffFormSchema, TStaffForm } from "@/lib/validations"
import { Label } from "../ui/label"
import { useStaffContext } from "@/lib/hooks"

type StaffFormProps = {
  actionType: "add" | "edit"
  onFormSubbmition: () => void
}

export function StaffForm({ actionType, onFormSubbmition }: StaffFormProps) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const { handleAddStaff } = useStaffContext()

  const {
    register,
    getValues,
    trigger,
    formState: { isSubmitting, errors },
  } = useForm<TStaffForm>({
    resolver: zodResolver(staffFormSchema),
    defaultValues: {
      name: actionType === "edit" ? 'edit mode' : "",
      role: actionType === "edit" ? 'edit mode' : "",
      email: actionType === "edit" ? 'edit mode' : "dawdwa@o2.pl",
      imageUrl: actionType === "edit" ? 'edit mode' : "dawdwadwad",
      isActive: actionType === "edit" ? true : true,

    },
  })



  return (
    <form className="space-y-6" action={async () => {
      const result = await trigger()
      console.log('result', result)
      if (!result) return


      const staffData = getValues()
      console.log('staffData', staffData)
      onFormSubbmition()

      if (actionType === "add") {
        await handleAddStaff(staffData)
      }
    }}>
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

      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>


      </div>

      <Button type="submit">Add Staff Member</Button>

    </form>

  )
}
