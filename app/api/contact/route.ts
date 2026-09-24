import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Future: Replace with Resend, Formspree, or a real CRM write.
    // When RESEND_API_KEY is configured, send via Resend:
    //
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "AIPL Website <noreply@aipl.com.np>",
    //   to: process.env.CONTACT_EMAIL_TO!,
    //   subject: `New ${data.inquiryType} inquiry from ${data.name}`,
    //   text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nType: ${data.inquiryType}\nLocation: ${data.province}, ${data.district}, ${data.municipality}, Ward ${data.ward}\n\nMessage:\n${data.message}`,
    // });

    console.log("Contact form submission:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
