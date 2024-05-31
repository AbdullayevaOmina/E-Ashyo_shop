import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Home, NotFound, Posts, Products } from "@pages";
import { MainLayout, SignIn, SignUp } from "@layout";
import { ProtectedRoute, RequireAuth } from "./protected-routes/index";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<ProtectedRoute element={<SignIn />} />} />
        <Route
          path="signup"
          element={<ProtectedRoute element={<SignUp />} />}
        />
        <Route
          path="/main/*"
          element={<RequireAuth element={<MainLayout />} />}
        >
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
