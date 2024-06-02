import {
  ProductsIcon,
  CatgoryIcon,
  BrandsIcon,
  ModelsIcon,
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
    path: "/main/categories",
    content: "Categories",
    icon: CatgoryIcon,
  },
];

export default router;
