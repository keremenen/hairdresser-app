'use client'

import { StaffMemberEssentials } from "@/lib/types"
import { StaffMember } from "../../generated/prisma"
import { createContext, useState } from "react"
import { addStaff } from "@/actions/actions"

type TStaffContext = {
  staff: StaffMember[]
  selectedStaff: StaffMember | undefined
  selectedStaffId: StaffMember['id'] | null
  handleAddStaff: (staff: StaffMemberEssentials) => void
  handleSetSelectedStaffId: (id: StaffMember["id"] | null) => void
}

export const StaffContext = createContext<TStaffContext | null>(null)

type StaffContextProviderProps = {
  data: StaffMember[]
  children: React.ReactNode
}

export function StaffContextProvider({ children, data }: StaffContextProviderProps) {
  const [staff, setStaff] = useState<StaffMember[]>(data)

  const [selectedStaffId, setSelectedStaffId] = useState<StaffMember['id'] | null>(null)

  const selectedStaff = staff.find((staffMember) => staffMember.id === selectedStaffId)

  const handleSetSelectedStaffId = (id: StaffMember["id"] | null) => {
    setSelectedStaffId(id)
  }

  const handleAddStaff = async (staff: StaffMemberEssentials) => {

    const error = await addStaff(staff)

    if (error) {
      console.error(error)
    }
  }

  return <StaffContext.Provider value={{ staff, handleAddStaff, selectedStaff, selectedStaffId, handleSetSelectedStaffId }}>{children}</StaffContext.Provider>
}