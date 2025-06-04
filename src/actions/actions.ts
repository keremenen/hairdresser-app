'use server'

import { prisma } from "@/lib/prisma"
import { staffFormSchema } from "@/lib/validations"
import { revalidatePath } from "next/cache"

export async function addStaff(pet: unknown) {

  // TO DO AUTH CHECKING

  const validatedStaff = staffFormSchema.safeParse(pet)
  if (!validatedStaff.success) {
    return { message: "Invalid staff data" }
  }

  try {
    await prisma.staffMember.create({
      data: {
        ...validatedStaff.data,
      },
    })
  } catch (error) {
    return { message: "Could not add pet" }
  }

  // Revalidate the layout component in the /app route
  revalidatePath("/app", "layout")
}