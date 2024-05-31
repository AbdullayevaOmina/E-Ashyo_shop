import axios from "axios";
import type { AxiosInstance } from "axios";
export const request: AxiosInstance = axios.create({
  baseURL: `http://18.159.214.90/api`,
});
