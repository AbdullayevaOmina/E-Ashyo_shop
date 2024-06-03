// --------------------------------- Category
// POST
export interface CreateCategory {
  category_name: string;
  parent_category_id: number | null | undefined;
  position: number | null | undefined;
}

// PUT
export interface UpdateCategory {
  id: string;
  data: CreateCategory;
}

// STORE
export interface CategoryStore {
  data: any[];
  isLoading: boolean;
  create: (data: CreateCategory) => Promise<any>;
  update: (data: UpdateCategory) => Promise<any>;
  get: (id: string) => Promise<any>;
  getAll: () => Promise<any>;
  getAllSub: (id: number) => Promise<any>;
  deleteCategory: (id: string) => Promise<any>;
}

export interface Request {
  get: (id: string) => unknown;
  getAll: () => unknown;
  getAllSub: (id: number) => unknown;
  create: (data: CreateCategory) => unknown;
  update: (data: UpdateCategory) => unknown;
  deleteCategory: (id: string) => unknown;
}
