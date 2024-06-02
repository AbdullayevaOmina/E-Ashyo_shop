import {
  ProductsIcon,
  CatgoryIcon,
  BrandsIcon,
  ModelsIcon,
  SalesIcon,
} from "@drawer-icons";

const router = [
  {
    path: "/main/products",
    content: "Products",
    icon: ProductsIcon,
  },
  {
    path: "/main/models",
    content: "Models",
    icon: ModelsIcon,
  },
  {
    path: "/main/brands",
    content: "Brands",
    icon: BrandsIcon,
  },
  {
    path: "/main/sales",
    content: "Sales",
    icon: SalesIcon,
  },
  {
    path: "/main/categories",
    content: "Categories",
    icon: CatgoryIcon,
  },
];

export default router;
