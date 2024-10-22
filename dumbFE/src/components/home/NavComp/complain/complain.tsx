import { Avatar, Box, Text } from "@chakra-ui/react";
import ComplainChat from "./complainText/complain";

export function Complain() {
  return (
    <Box
      bgColor={"brand.background"}
      color={"white"}
      display={"flex"}
      flexDirection={"row"}
      borderTop={"1px solid grey"}
      h={"100%"}
    >
      <Box borderRight={"1px solid grey"} w={"500px"}>
        <Box paddingTop={"20px"}>
          <Box p={"20px"} flexDirection={"row"} display={"flex"}>
            <Avatar src="https://bit.ly/broken-link" />
            <Box paddingLeft={"20px"}>
              <Text fontSize={"20px"}>Admin</Text>
              <Text fontSize={"15px"} color={"grey"}>
                Hi cok!
              </Text>
            </Box>
          </Box>
          <Box paddingLeft={"20px"} flexDirection={"row"} display={"flex"}>
            <Avatar src="https://bit.ly/broken-link" />
            <Box paddingLeft={"20px"}>
              <Text fontSize={"20px"}>Admin</Text>
              <Text fontSize={"15px"} color={"grey"}>
                Hi cok!
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        p={"10px"}
        alignContent={"end"}
        display={"flex"}
        flexDirection={"column-reverse"}
        w={"100%"}
      >
        <ComplainChat />
      </Box>
    </Box>
  );
}
