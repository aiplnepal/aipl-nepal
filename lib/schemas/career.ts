import { z } from "zod";

export const careerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  email: z.string().email("Please enter a valid email address").max(100, "Email is too long").optional().or(z.literal('')),
  province: z.string().min(1, "Please select a province").max(50),
  district: z.string().min(1, "Please select a district").max(50),
  municipality: z.string().min(1, "Please select a municipality").max(50),
  ward: z.string().min(1, "Please select a ward").max(10),
  experience: z.string().max(1000).optional(),
  message: z.string().max(2000).optional(),
});

export type CareerFormValues = z.infer<typeof careerSchema>;
