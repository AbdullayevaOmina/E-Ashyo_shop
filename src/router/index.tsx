import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Home, NotFound, Posts, Products } from "@pages";
import { MainLayout, SignIn, SignUp } from "@layout";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        {/* <Route index element={<SignIn />} /> */}
        {/* <Route path="signup" element={<SignUp />} /> */}
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
