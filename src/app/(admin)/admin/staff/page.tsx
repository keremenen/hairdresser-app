import { StaffManagement } from "@/components/admin/staff-management";
import { prisma } from "@/lib/prisma";
import { mapDatabaseStaffToComponentFormat } from "@/lib/utils";

export default async function StaffPage() {
  // Fetch staff data from database
  const staffMembers = await prisma.staffMember.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  // Map database staff members to the format expected by StaffManagement component
  const staffData = staffMembers.map(mapDatabaseStaffToComponentFormat);

  return (
    <main className="p-4 space-y-4">
      <StaffManagement initialStaffData={staffData} />
    </main>
  );
}
