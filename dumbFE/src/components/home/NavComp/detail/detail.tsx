import { Box, Button, Image, Text } from "@chakra-ui/react";

export function Detail() {
  return (
    <Box bgColor={"brand.background"} h={"100vh"} w={"100vw"} color={"white"}>
      <Box padding={"50px 100px"} display={"flex"} flexDirection={"row"}>
        <Box>
          <Image
            src="https://picsum.photos/200"
            h={"600px"}
            w={"800px"}
            objectFit={"cover"}
          />
        </Box>
        <Box
          paddingLeft={"100px"}
          paddingTop={"70px"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Text fontWeight={"bold"} fontSize={"50px"} color={"brand.orange"}>
            Mouse
          </Text>
          <Text>Stock : 999</Text>
          <Text marginTop={"20px"}>- Wireless mouse</Text>
          <Text>- Maish banyak fitur</Text>
          <Text>- Maish banyak fitur</Text>
          <Text>- Maish banyak fitur</Text>
          <Text>- Maish banyak fitur</Text>
          <Text marginTop={"20px"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
            repellat porro asperiores necessitatibus mollitia amet voluptatibus
            voluptatem quaerat numquam culpa explicabo aliquid cum. Beatae
            consequuntur quia excepturi, tenetur unde pariatur.
          </Text>
          <Box justifyItems={"end"} marginTop={"80px"}>
            <Text fontWeight={"bold"} fontSize={"40px"} color={"brand.orange"}>
              Rp. 100.000
            </Text>
          </Box>
          <Box>
            <Button w={"100%"} color={"white"} bgColor={"brand.orange"}>
              Buy
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
