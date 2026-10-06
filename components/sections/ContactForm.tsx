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

const getInquiryTypes = (dict: any) => [
  { value: "general", label: dict.contact.form.inquiryTypes.general },
  { value: "dealer-partnership", label: dict.contact.form.inquiryTypes.dealer },
  { value: "bulk-order", label: dict.contact.form.inquiryTypes.bulk },
  { value: "product-question", label: dict.contact.form.inquiryTypes.product },
];

export function ContactForm({ dict }: { dict: any }) {
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
          {dict.contact.form.successTitle}
        </h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          {dict.contact.form.successMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-forest font-semibold underline underline-offset-4"
        >
          {dict.contact.form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-900 mb-1.5 block">
          {dict.contact.form.labels.fullName}
        </Label>
        <Input
          id="name"
          placeholder={dict.contact.form.placeholders.fullName}
          className="focus-visible:ring-forest"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-1.5 block">
            {dict.contact.form.labels.phone}
          </Label>
          <Input
            id="phone"
            placeholder={dict.contact.form.placeholders.phone}
            className="focus-visible:ring-forest"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1.5 block">
            {dict.contact.form.labels.email}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={dict.contact.form.placeholders.email}
            className="focus-visible:ring-forest"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="inquiryType" className="text-sm font-medium text-gray-900 mb-1.5 block">
          {dict.contact.form.labels.inquiryType}
        </Label>
        <Select
          onValueChange={(val) =>
            setValue("inquiryType", String(val) as ContactFormValues["inquiryType"], {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger className="focus:ring-forest" aria-invalid={!!errors.inquiryType} aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}>
            <SelectValue placeholder={dict.contact.form.placeholders.inquiryType} />
          </SelectTrigger>
          <SelectContent>
            {getInquiryTypes(dict).map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.inquiryType && (
          <p id="inquiryType-error" className="text-sm text-red-500 mt-1">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
          {dict.contact.form.labels.location}
          <span className="text-gray-500 font-normal text-xs">{dict.contact.form.labels.locationSub}</span>
        </h3>
        <LocationSelector
          dict={dict}
          onProvinceChange={(val) => setValue("province", val, { shouldValidate: true })}
          onDistrictChange={(val) => setValue("district", val, { shouldValidate: true })}
          onMunicipalityChange={(val) => setValue("municipality", val, { shouldValidate: true })}
          onWardChange={(val) => setValue("ward", val, { shouldValidate: true })}
          errors={errors}
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1.5 block">
          {dict.contact.form.labels.message}
        </Label>
        <Textarea
          id="message"
          placeholder={dict.contact.form.placeholders.message}
          rows={5}
          className="focus-visible:ring-forest resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div role="alert" className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          <span>{dict.contact.form.error}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="bg-forest text-white font-semibold hover:bg-forest-dark w-full sm:w-auto px-8"
      >
        {status === "loading" ? (
          dict.contact.form.sending
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            {dict.contact.form.send}
          </>
        )}
      </Button>
    </form>
  );
}
