import { Box, Image, Text } from "@chakra-ui/react";
import { ProductTable } from "./productTable";

export function ProductAdmin() {
  return (
    <Box>
      <Box margin={"50px 0px 0px 50px"}>
        <Text>List Product</Text>
      </Box>
      <Box>
        <ProductTable />
      </Box>
    </Box>
  );
}
