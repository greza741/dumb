import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import logo2 from "../../assets/Frame@3x.svg";

export function Brand() {
  return (
    <>
      <Box p={"125px 0px"}>
        <Image src={logo2} />
        <Text fontSize={"6xl"}>Easy, Fast and Reliable</Text>
        <Stack color={"grey"} spacing={0}>
          <Text>Go shopping for merchandise, just go to dumb merch</Text>
          <Text>shopping, the biggest merchandise in Indonesia</Text>
        </Stack>
        <Box marginTop={"80px"}>
          <Button
            as={"a"}
            href="/login"
            color={"white"}
            bgColor={"brand.orange"}
            p={"0px 60px"}
          >
            Login
          </Button>
          <Button
            as={"a"}
            href="/register"
            bgColor={"transparent"}
            color={"grey"}
            p={"0px 60px"}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
}
