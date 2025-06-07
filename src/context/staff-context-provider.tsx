'use client'

import { StaffMemberEssentials } from "@/lib/types"
import { StaffMember } from "../../generated/prisma"
import { createContext, useState } from "react"
import { addStaff } from "@/actions/actions"

type TStaffContext = {
  staff: StaffMember[]
  selectedStaff: StaffMember | null
  selectedStaffId: StaffMember['id'] | null
  handleAddStaff: (staff: StaffMemberEssentials) => void
  handleSetSelectedStaffId: (id: StaffMember["id"]) => void
}

export const StaffContext = createContext<TStaffContext | null>(null)

type StaffContextProviderProps = {
  data: StaffMember[]
  children: React.ReactNode
}

export function StaffContextProvider({ children, data }: StaffContextProviderProps) {
  const [staff, setStaff] = useState<StaffMember[]>(data)
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null)
  const [selectedStaffId, setSelectedStaffId] = useState<StaffMember['id'] | null>(null)

  const handleSetSelectedStaffId = (id: StaffMember["id"]) => {
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