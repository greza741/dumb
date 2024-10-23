import { Complain } from "@/components/home/NavComp/complain/complain";
import { Product } from "@/components/home/NavComp/product/product";
import { Box, Text } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { UserLayout } from "@/layout/user-layout";
import { AdminLayout } from "@/layout/admin-layout";
import { ProductAdmin } from "@/components/home/NavComp/product/productAdmin";
import { ComplainAdmin } from "@/components/home/NavComp/complain/complainAdmin";
import { Profile } from "@/components/home/NavComp/profile/profile";
import { Detail } from "@/components/home/NavComp/detail/detail";
import { Category } from "@/components/home/NavComp/category/category";
import { Test } from "@/components/home/test";

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
      {
        path: "logout",
        element: <Box>Logout</Box>,
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
      {
        path: "logout",
        element: <Box>Logout</Box>,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Box>404</Box>,
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
