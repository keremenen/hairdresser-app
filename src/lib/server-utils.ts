import { prisma } from "./prisma"


export async function getStaffMembers() {
  const staffMembers = await prisma.staffMember.findMany()

  return staffMembers
}