// --------------------------------- brand
// POST
export interface CreateBrand {
  brand_name: string;
  brand_description: string;
  position: number;
  image: string | undefined;
}
// PUT
export interface UpdateBrand extends CreateBrand {}

// STORE
export interface ProductStore {
  data: any[];
  isLoading: boolean;
  create: (data: CreateBrand) => Promise<any>;
  update: (data: UpdateBrand) => Promise<any>;
  get: (id: string) => Promise<any>;
  getAll: () => Promise<any>;
  delete: (id: string) => Promise<any>;
}

export interface Request {
  get: (id: string) => unknown;
  getAll: () => unknown;
  create: (data: CreateBrand) => unknown;
  update: (data: UpdateBrand) => unknown;
  delete: (id: string) => unknown;
}
