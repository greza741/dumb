import { Box } from "@chakra-ui/react";
import NavUser from "../components/home/NavBarUser";
import { Product } from "../components/home/product";

export function Home() {
  return (
    <Box bg={"brand.background"} h={"100vh"} w={"100vw"}>
      <NavUser />
    </Box>
  );
}
