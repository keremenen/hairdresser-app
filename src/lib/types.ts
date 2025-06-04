import { StaffMember } from "../../generated/prisma";


export type StaffMemberEssentials = Omit<StaffMember, "id" | "createdAt" | "updatedAt">