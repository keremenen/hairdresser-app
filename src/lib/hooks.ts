import { StaffContext } from "@/context/staff-context-provider"
import { useContext } from "react"

export function useStaffContext() {
  const conext = useContext(StaffContext)

  if (!conext) {
    throw new Error("usePetContext must be used within a PetContextProvider")
  }

  return conext
}
