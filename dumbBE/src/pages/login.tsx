import { Box } from "@chakra-ui/react";
import { Brand } from "../components/auth/brand";
import { LoginForm } from "../components/auth/login";

export function Login() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      bgColor={"brand.background"}
      h={"100vh"}
      w={"100vw"}
      color={"white"}
    >
      <Box flex={1} paddingLeft={"100px"}>
        <Brand />
      </Box>
      <Box flex={1} marginLeft={"80px"}>
        <LoginForm />
      </Box>
    </Box>
  );
}
