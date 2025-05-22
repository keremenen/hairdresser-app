import { z } from "zod";

export const staffFormSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  status: z.enum(["active", "inactive"]),
})

export type TStaffForm = z.infer<typeof staffFormSchema>