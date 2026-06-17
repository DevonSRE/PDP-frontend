import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_API_URL } from "@/lib/constants";

const httpClient: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export const createHttpClient = (config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    baseURL: BASE_API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
};

export default httpClient;
