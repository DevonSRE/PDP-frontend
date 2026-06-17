import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";
import {
  MAILJET_API_KEY,
  MAILJET_SECRET_KEY,
  MAIL_FROM,
  MAIL_FROM_NAME,
  MAIL_TO,
} from "@/lib/constants";
import { ContactFormData, ApiResponse } from "@/lib/types";

interface MailjetResponse {
  body: {
    Messages?: Array<{
      Status: string;
      MessageID: string;
      Errors?: string[];
    }>;
  };
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          message: "Missing required fields",
          status: 400,
          data: null,
          error: "name, email, and message are required",
        } as ApiResponse,
        { status: 400 }
      );
    }

    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY) {
      return NextResponse.json(
        {
          message: "Mailjet credentials not configured",
          status: 500,
          data: null,
          error: "Missing Mailjet API credentials",
        } as ApiResponse,
        { status: 500 }
      );
    }

    const mailjet = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);

    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: MAIL_FROM,
            Name: MAIL_FROM_NAME,
          },
          To: [
            {
              Email: MAIL_TO,
            },
          ],
          Subject: `New Contact Form Submission from ${body.name}`,
          HTMLPart: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, "<br />")}</p>
          `,
          TextPart: `
            New Contact Form Submission
            Name: ${body.name}
            Email: ${body.email}
            Message: ${body.message}
          `,
        },
      ],
    });

    const mailjetResult = result as MailjetResponse;
    const messages = mailjetResult.body?.Messages;
    if (messages?.[0]?.Status === "success") {
      return NextResponse.json(
        {
          message: "Email sent successfully",
          status: 200,
          data: {
            messageId: messages[0].MessageID,
          },
          error: null,
        } as ApiResponse,
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "Failed to send email",
        status: 500,
        data: null,
        error: messages?.[0]?.Errors || "Mailjet API error",
      } as ApiResponse,
      { status: 500 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
        status: 500,
        data: null,
        error: errorMessage,
      } as ApiResponse,
      { status: 500 }
    );
  }
}
