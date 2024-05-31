import { Products, Posts, Orders, Messages } from "@pages";

const router = [
  {
    path: "/main/products",
    element: <Products />,
    content: "Products",
  },
  {
    path: "/main/posts",
    element: <Posts />,
    content: "Posts",
  },
  {
    path: "/main/messages",
    element: <Messages />,
    content: "Messages",
  },
  {
    path: "/main/orders",
    element: <Orders />,
    content: "Orders",
  },
];

export default router;
