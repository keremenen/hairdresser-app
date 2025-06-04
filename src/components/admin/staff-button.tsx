"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { StaffForm } from "./staff-form"

type StaffButtonProps = {
  actionType: "add" | "edit" | "delete"
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}


export function StaffButton({ actionType, children, disabled, onClick }: StaffButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)


  if (actionType === "delete") {
    return (
      <Button variant={"secondary"} disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    )
  }


  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        {actionType === "add" ? (
          <Button>
            <PlusIcon />
            {children}
          </Button>
        ) : (
          <Button variant={"secondary"} onClick={onClick}>
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {actionType === "add" ? "Add a new pet" : "Edit pet"}
          </DialogTitle>
        </DialogHeader>
        <StaffForm actionType={actionType} onFormSubbmition={() => setIsFormOpen(false)} />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog >
  )
}
