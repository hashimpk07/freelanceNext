import { AxiosRequestConfig } from "axios";

import axiosInstance from "./axios";

/**
 * Central API wrapper
 * Usage:
 *   api.get("/endpoint")
 *   api.post("/endpoint", payload)
 */
export const api = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await axiosInstance.get<T>(url, config);
    return res.data;
  },

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const res = await axiosInstance.post<T>(url, data, config);
    return res.data;
  },

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const res = await axiosInstance.put<T>(url, data, config);
    return res.data;
  },

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const res = await axiosInstance.patch<T>(url, data, config);
    return res.data;
  },

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await axiosInstance.delete<T>(url, config);
    return res.data;
  },
};
