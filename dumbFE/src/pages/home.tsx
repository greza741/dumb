import { Box } from "@chakra-ui/react";
import NavUser from "../components/home/home-user";

export function Home() {
  return (
    <Box bg={"brand.background"} h={"100vh"} w={"100vw"}>
      <NavUser />
    </Box>
  );
}
