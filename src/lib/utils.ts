import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { StaffMember } from "../../generated/prisma"
import { StaffMemberEssentials } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  // Format date: "Jan 1, 2023"
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function formatTime(time: string): string {
  // Format time: "1:00 PM"
  return time
}

/**
 * Maps a database StaffMember to the format needed by the StaffManagement component
 */
export function mapDatabaseStaffToComponentFormat(
  staffMember: StaffMember
): StaffMember {
  return {
    id: staffMember.id,
    name: staffMember.name,
    email: staffMember.email,
    imageUrl: staffMember.imageUrl,
    role: staffMember.role,
    isActive: staffMember.isActive,
    createdAt: staffMember.createdAt,
    updatedAt: staffMember.updatedAt,
  }
}
