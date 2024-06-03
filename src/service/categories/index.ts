import request from "../config";
import { Request } from "@category-interface";
export const categories: Request = {
  create: (data) => request.post(`/category/create`, data),
  get: (id) => request.get(`/category/get/${id}`),
  getAll: () =>
    request.get(`http://18.159.214.90/api/category/get-all-category/q`),
  getAllSub: (id) => request.get(`/category/get-all-subcategory/${id}q?`),
  update: (data) => request.put(`/category/update/${data.id}`, data.data),
  deleteCategory: (id) => request.delete(`/category/delete/${id}`),
};
