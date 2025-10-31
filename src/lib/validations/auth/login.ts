import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine(
      (value) => {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      { message: "Please enter a valid email address" },
    )
    .transform((email) => email.toLowerCase().trim()),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(50, { message: "Password must be less than 50 characters" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
