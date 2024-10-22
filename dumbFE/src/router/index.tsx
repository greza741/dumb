import { Box } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import NavTest from "../components/home/test";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/test",
  //   element: <NavTest />,
  // },
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
