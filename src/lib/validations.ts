import { z } from "zod";

export const staffFormSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  imageUrl: z.string().min(1, { message: "Please enter a valid image URL." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  isActive: z.boolean(),
})

export type TStaffForm = z.infer<typeof staffFormSchema>