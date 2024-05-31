import { request } from "../config";
import { Request } from "@auth-interface";
export const auth: Request = {
  signin: (data) => request.post("/admin/login", data),
  signup: (data) => request.post("/admin/create", data),
  logout: () => request.post("/admin/logout"),
};
