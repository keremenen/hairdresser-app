'use client'

import { StaffMemberEssentials } from "@/lib/types"
import { StaffMember } from "../../generated/prisma"
import { createContext, useState } from "react"
import { addStaff } from "@/actions/actions"

type TStaffContext = {
  staff: StaffMember[]
  handleAddStaff: (staff: StaffMemberEssentials) => void
}

export const StaffContext = createContext<TStaffContext | null>(null)

type StaffContextProviderProps = {
  data: StaffMember[]
  children: React.ReactNode
}

export function StaffContextProvider({ children, data }: StaffContextProviderProps) {
  const [staff, setStaff] = useState<StaffMember[]>(data)

  const handleAddStaff = async (staff: StaffMemberEssentials) => {
    console.log('adding staff', staff)
    const error = await addStaff(staff)

    if (error) {
      console.error(error)
    }
  }

  return <StaffContext.Provider value={{ staff, handleAddStaff }}>{children}</StaffContext.Provider>
}