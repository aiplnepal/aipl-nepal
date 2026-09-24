import { z } from "zod";

export const dealerEnquirySchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().optional(),
});

export type DealerEnquiryFormValues = z.infer<typeof dealerEnquirySchema>;
