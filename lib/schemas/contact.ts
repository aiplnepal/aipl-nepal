import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().min(7, "Please enter a valid phone number").max(20, "Phone number is too long"),
  email: z.string().email("Please enter a valid email address").max(100, "Email is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
  inquiryType: z.enum(
    ["general", "dealer-partnership", "bulk-order", "product-question"],
    { message: "Please select an inquiry type" }
  ),
  province: z.string().min(1, "Please select a province").max(50),
  district: z.string().min(1, "Please select a district").max(50),
  municipality: z.string().min(1, "Please select a municipality").max(50),
  ward: z.string().min(1, "Please select a ward").max(10),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
