import { Category } from "@/components/home/NavComp/category/category";
import { Complain } from "@/components/home/NavComp/complain/complain";
import { ComplainAdmin } from "@/components/home/NavComp/complain/complainAdmin";
import { Detail } from "@/components/home/NavComp/detail/detail";
import { Product } from "@/components/home/NavComp/product/product";
import { ProductAdmin } from "@/components/home/NavComp/product/productAdmin";
import { Profile } from "@/components/home/NavComp/profile/profile";
import { Test } from "@/components/home/test";
import { AdminLayout } from "@/layout/admin-layout";
import AuthLayout from "@/layout/auth-layout";
import { UserLayout } from "@/layout/user-layout";
import { Box } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: "complain",
        element: <Complain />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: "complain",
        element: <ComplainAdmin />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "product",
        element: <ProductAdmin />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },

  {
    path: "*",
    element: <Box>404</Box>,
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
