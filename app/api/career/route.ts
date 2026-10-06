import { NextResponse } from "next/server";
import { careerSchema } from "@/lib/schemas/career";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = careerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }
    
    // const data = parsed.data;
    
    // In a real application, you would save this to a database,
    // send an email, or push to an ATS (Applicant Tracking System).
    // Removed PII logging for security

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Application received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Career API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application." },
      { status: 500 }
    );
  }
}
