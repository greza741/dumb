import { Box, Text } from "@chakra-ui/react";
import { TableCategory } from "./table-category";

export function Category() {
  return (
    <Box margin={"50px 0px 0px 50px"}>
      <Box>
        <Text> List Category</Text>
      </Box>
      <Box marginTop={"20px"}>
        <TableCategory />
      </Box>
    </Box>
  );
}
