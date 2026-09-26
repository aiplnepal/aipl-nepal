"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LocationSelector } from "./LocationSelector";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "dealer-partnership", label: "Dealer Partnership" },
  { value: "bulk-order", label: "Bulk Order" },
  { value: "product-question", label: "Product Question" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      province: "",
      district: "",
      municipality: "",
      ward: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-forest/5 rounded-xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-forest mx-auto mb-4" />
        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
          Message Sent
        </h3>
        <p className="text-gray-500">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-forest font-semibold underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-900 mb-1.5 block">
          Full Name
        </Label>
        <Input
          id="name"
          placeholder="Your full name"
          className="focus-visible:ring-forest"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-1.5 block">
            Phone
          </Label>
          <Input
            id="phone"
            placeholder="+977-XXXXXXXXX"
            className="focus-visible:ring-forest"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1.5 block">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="focus-visible:ring-forest"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="inquiryType" className="text-sm font-medium text-gray-900 mb-1.5 block">
          Inquiry Type
        </Label>
        <Select
          onValueChange={(val) =>
            setValue("inquiryType", String(val) as ContactFormValues["inquiryType"], {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger className="focus:ring-forest">
            <SelectValue placeholder="Select an inquiry type" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.inquiryType && (
          <p className="text-sm text-red-500 mt-1">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
          Your Location
          <span className="text-gray-500 font-normal text-xs">(Province / District / Municipality / Ward)</span>
        </h3>
        <LocationSelector
          onProvinceChange={(val) => setValue("province", val, { shouldValidate: true })}
          onDistrictChange={(val) => setValue("district", val, { shouldValidate: true })}
          onMunicipalityChange={(val) => setValue("municipality", val, { shouldValidate: true })}
          onWardChange={(val) => setValue("ward", val, { shouldValidate: true })}
          errors={errors}
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1.5 block">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us how we can help..."
          rows={5}
          className="focus-visible:ring-forest resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="bg-forest text-white font-semibold hover:bg-forest-dark w-full sm:w-auto px-8"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
