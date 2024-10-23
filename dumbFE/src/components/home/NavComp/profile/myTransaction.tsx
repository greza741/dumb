import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import logo2 from "@/assets/Frame@3x.svg";

export function MyTransaction() {
  return (
    <Box h={"400px"} w={"650px"}>
      <Flex flexDirection="column" w="100%" m="auto" h="100%" roundedTop="lg">
        <Stack
          px={4}
          py={2}
          overflowY="auto"
          flex={1}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#d5e3f7",
              borderRadius: "24px",
            },
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"row"}
              border={"1px solid transparent"}
              borderRadius={"10px"}
              padding={"10px"}
              w={"600px"}
              bgColor={"brand.background3"}
            >
              <Box>
                <Image
                  w={"200px"}
                  h={"200px"}
                  objectFit={"cover"}
                  src="https://picsum.photos/200"
                />
              </Box>
              <Box
                paddingLeft={"20px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Text
                    fontWeight={"bold"}
                    color={"brand.orange"}
                    fontSize={"25px"}
                  >
                    Mouse
                  </Text>
                  <Text
                    fontWeight={"bold"}
                    color={"brand.orange"}
                    fontSize={"11"}
                  >
                    Monday,{" "}
                    <Text as={"span"} fontWeight={"normal"}>
                      22 June 2022
                    </Text>
                  </Text>
                  <Text paddingTop={"20px"}>Price : Rp.500.000</Text>
                </Box>
                <Box>
                  <Text>Sub Total : Rp.500.000</Text>
                </Box>
              </Box>
              <Box alignContent={"center"} paddingLeft={"80px"}>
                <Image src={logo2} alt="logo" w={"90px"} />
              </Box>
            </Box>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}
