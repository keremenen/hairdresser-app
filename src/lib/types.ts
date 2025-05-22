import { StaffMember } from "../../generated/prisma";

export interface StaffMemberEssentials {
  id: string;
  name: string;
  email: string;
  imageUrl: string | null;
  description: string | null;
  isActive: boolean;
}