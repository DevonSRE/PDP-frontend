"use server";

import { ContactFormData, ApiResponse } from "@/lib/types";

export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL || "http://localhost:3000"}/api/v1/send-mail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = (await response.json()) as ApiResponse;

    if (!response.ok) {
      return {
        message: result.message || "Failed to send email",
        status: response.status,
        data: null,
        error: result.error || "An error occurred",
      };
    }

    return {
      message: result.message || "Email sent successfully",
      status: response.status,
      data: result.data || null,
      error: null,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return {
      message: "Failed to send email",
      status: 500,
      data: null,
      error: errorMessage,
    };
  }
}
