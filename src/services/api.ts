import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function httpGet<T>(
  path: string,
  query?: Record<string, any>,
): Promise<T> {
  try {
    const res = await axios.get<T>(`${BASE_URL}${path}`, {
      headers: { Accept: "application/json" },
      params: query,
    });
    return res.data;
  } catch (error: any) {
    const status = error.response?.status;
    const text = error.response?.data || error.message;
    throw new Error(`HTTP ${status} - ${text}`);
  }
}

export async function httpPost<T>(
  path: string,
  body?: any,
  config?: Record<string, any>,
): Promise<T> {
  try {
    const res = await axios.post<T>(`${BASE_URL}${path}`, body, {
      headers: { Accept: "application/json" },
      ...config,
    });
    return res.data;
  } catch (error: any) {
    const status = error.response?.status;
    const text = error.response?.data || error.message;
    throw new Error(`HTTP ${status} - ${text}`);
  }
}
