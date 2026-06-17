import httpClient from "./http-client";
import { ApiResponse, ContactFormData } from "@/lib/types";
import { AxiosError } from "axios";

export const apiService = {
  sendContactEmail: async (data: ContactFormData): Promise<ApiResponse> => {
    try {
      const response = await httpClient.post<ApiResponse>(
        "/send-mail",
        data
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      return {
        message: axiosError.response?.data?.message || "Failed to send email",
        status: axiosError.response?.status || 500,
        data: null,
        error: axiosError.response?.data?.error || axiosError.message,
      };
    }
  },
};
