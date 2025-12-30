import axios, { AxiosInstance } from "axios";

import { getSession } from "@/lib/session";

const API_BASE =
  process.env.LARAVEL_API_URL ?? "https://sandbox.4ulogistic.com/api";

// Disable TLS verification only in non-production environments (not recommended for prod)
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE,
  // baseURL: "/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// Attach token dynamically per request (handles async session retrieval)
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const session = await getSession();
      const token = session?.token;
      if (token) {
        config.headers = {
          ...(config.headers as Record<string, unknown>),
          Authorization: `Bearer ${token}`,
        } as typeof config.headers;
      }
    } catch (err) {
      void err;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Axios interceptor caught an error:", error);
    const hasWindow = typeof window !== "undefined";
    console.warn(hasWindow ? "Window object exists" : "No window object");
    if (error.response?.status === 401) {
      if (hasWindow) {
        // client-side redirect only
        // window.location.href = "/unauthorized";
      } else {
        // server-side handling can go here if needed
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
export { axios };
