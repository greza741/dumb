import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";

export function RegisterForm() {
  return (
    <>
      <Box p={"125px 0px"}>
        <Box
          border={"1px solid grey"}
          bgColor={"#191918"}
          p={"40px"}
          h={"350px"}
          w={"400px"}
          borderRadius={"10px"}
        >
          <Stack spacing={4}>
            <Text fontSize={"3xl"}>Register</Text>
            <Input bgColor={"#474647"} placeholder="Name" />
            <Input bgColor={"#474647"} placeholder="Email" />
            <Input bgColor={"#474647"} placeholder="Password" />
            <Button
              bgColor={"brand.orange"}
              color={"white"}
              borderRadius={"10px"}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
