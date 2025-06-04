import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

const staffMembers = [
  {
    // ID should be UUID
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "",
    role: "expert",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174001",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    imageUrl: "",
    role: "expert",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174002",
    name: "John Smith",
    email: "john.smith@example.com",
    imageUrl: "",
    role: "expert",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174003",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    imageUrl: "",
    role: "expert",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

async function main() {
  console.log('Start seeding ...')

  for (const staffMember of staffMembers) {
    const result = await prisma.staffMember.upsert({
      where: { id: staffMember.id },
      update: {},
      create: staffMember,
    })
    console.log(`Created staff member with id: ${result.id}`)
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
