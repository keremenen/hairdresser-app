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
import { StaffMemberEssentials } from "@/lib/types"

type StaffFormProps = {
  actionType: "add" | "edit"
  onFormSubbmition: () => void
}

export function StaffForm({ actionType, onFormSubbmition }: StaffFormProps) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const { handleAddStaff } = useStaffContext()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<TStaffForm>({
    resolver: zodResolver(staffFormSchema),
    defaultValues: {
      name: actionType === "edit" ? 'edit mode' : "",
      role: actionType === "edit" ? 'edit mode' : "",
      email: actionType === "edit" ? 'edit mode' : "dawdwa@o2.pl",
      imageUrl: actionType === "edit" ? 'edit mode' : "",
      isActive: actionType === "edit" ? true : true,
    },
  })

  const handleFormSubmit = async (data: TStaffForm) => {
    console.log('staffData', data)
    onFormSubbmition()

    if (actionType === "add") {
      handleAddStaff(data as StaffMemberEssentials)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role / Speciality</Label>
          <Input id="role" {...register("role")} />
          {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input id="imageUrl" {...register("imageUrl")} />
          {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isActive"
            {...register("isActive")}
            className="h-4 w-4 rounded border-gray-300"
          />
          <Label htmlFor="isActive" className="text-sm font-normal">
            Active
          </Label>
        </div>
        {errors.isActive && <p className="text-red-500 text-sm">{errors.isActive.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Staff Member"}
      </Button>
    </form>
  )
}
