import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  inquiryType: z.enum(
    ["general", "dealer-partnership", "bulk-order", "product-question"],
    { message: "Please select an inquiry type" }
  ),
  province: z.string().min(1, "Please select a province"),
  district: z.string().min(1, "Please select a district"),
  municipality: z.string().min(1, "Please select a municipality"),
  ward: z.string().min(1, "Please select a ward"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
