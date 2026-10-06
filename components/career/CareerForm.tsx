"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerSchema, type CareerFormValues } from "@/lib/schemas/career";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LocationSelector } from "@/components/sections/LocationSelector";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function CareerForm({ dict }: { dict: any }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      province: "",
      district: "",
      municipality: "",
      ward: "",
    },
  });

  async function onSubmit(data: CareerFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/career", {
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
      <div className="bg-forest/5 rounded-2xl p-8 md:p-12 text-center border border-forest/10 h-full flex flex-col items-center justify-center">
        <CheckCircle className="h-16 w-16 text-forest mx-auto mb-6" />
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
          {dict.career.form.successTitle}
        </h3>
        <p className="text-gray-600 max-w-sm mx-auto mb-8">
          {dict.career.form.successMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:border-forest hover:text-forest transition-colors"
        >
          {dict.career.form.submitAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm h-full">
      <div className="mb-8 border-b border-gray-100 pb-6">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
          {dict.career.form.title}
        </h3>
        <p className="text-sm text-gray-500">
          {dict.career.form.description}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-900 mb-1.5 block">
            {dict.career.form.labels.fullName}
          </Label>
          <Input
            id="fullName"
            placeholder={dict.career.form.placeholders.fullName}
            className="focus-visible:ring-forest"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-1.5 block">
              {dict.career.form.labels.phone}
            </Label>
            <Input
              id="phone"
              placeholder={dict.career.form.placeholders.phone}
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
              {dict.career.form.labels.email} <span className="text-gray-400 font-normal">{dict.career.form.labels.optional}</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={dict.career.form.placeholders.email}
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

        <div className="pt-4 pb-2">
          <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
            {dict.career.form.labels.targetArea}
            <span className="text-gray-500 font-normal text-xs">{dict.career.form.labels.targetAreaSub}</span>
          </h4>
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
          <Label htmlFor="experience" className="text-sm font-medium text-gray-900 mb-1.5 block">
            {dict.career.form.labels.experience} <span className="text-gray-400 font-normal">{dict.career.form.labels.optional}</span>
          </Label>
          <Textarea
            id="experience"
            placeholder={dict.career.form.placeholders.experience}
            rows={3}
            className="focus-visible:ring-forest resize-none"
            aria-invalid={!!errors.experience}
            aria-describedby={errors.experience ? "experience-error" : undefined}
            {...register("experience")}
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1.5 block">
            {dict.career.form.labels.whyJoin} <span className="text-gray-400 font-normal">{dict.career.form.labels.optional}</span>
          </Label>
          <Textarea
            id="message"
            placeholder={dict.career.form.placeholders.whyJoin}
            rows={3}
            className="focus-visible:ring-forest resize-none"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
        </div>

        {status === "error" && (
          <div role="alert" className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-md">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{dict.career.form.error}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-forest text-white font-semibold hover:bg-forest-dark w-full py-6 text-base"
        >
          {status === "loading" ? (
            dict.career.form.submitting
          ) : (
            <>
              {dict.career.form.submit}
              <Send className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
        <p className="text-xs text-gray-500 text-center mt-4">
          {dict.career.form.note} 
        </p>
      </form>
    </div>
  );
}
