import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ProductModal from "./product-modal-admin";

export function ProductTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const productDescription =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio amet beatae. Eius assumenda dicta vitae ad, accusamus inventore magni quae porro laborum nihil atque aspernatur suscipit nobis dolore voluptatem?";

  // Tentukan panjang maksimal deskripsi yang ingin ditampilkan
  const maxDescriptionLength = 25;
  return (
    <Box h={"100%"} w={"100%"} bgColor={"brand.background"} color={"white"}>
      <TableContainer>
        <Stack
          w={"100%"}
          h={"400px"}
          px={4}
          py={8}
          overflow="auto"
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
          <Table variant="striped" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th color={"white"}>No</Th>
                <Th color={"white"}>Photo</Th>
                <Th color={"white"}>Product Name</Th>
                <Th color={"white"}>Product Decs</Th>
                <Th color={"white"}>Price</Th>
                <Th color={"white"}>Qty</Th>
                <Th color={"white"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>
                  <Link href="https://google.com" textDecoration={"underline"}>
                    Google.com
                  </Link>
                </Td>
                <Td>Mouse</Td>
                <Td>
                  {/* nanti ganti productDescription dengan deskripsi database */}
                  {productDescription.length > maxDescriptionLength
                    ? productDescription.substring(0, maxDescriptionLength) +
                      "..."
                    : productDescription}
                </Td>
                <Td>100.000</Td>
                <Td>600</Td>
                <Td>
                  {" "}
                  <Box>
                    <Button
                      marginRight={"15px"}
                      color={"white"}
                      bgColor={"#56C05A"}
                      p={"0px 50px"}
                      onClick={onOpen}
                    >
                      Edit
                    </Button>
                    <ProductModal
                      isOpen={isOpen}
                      onClose={onClose}
                      initialRef={initialRef}
                      finalRef={finalRef}
                    />
                    <Button color={"white"} bgColor={"#F74C4C"} p={"0px 45px"}>
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>
                  <Link href="https://google.com" textDecoration={"underline"}>
                    Google.com
                  </Link>
                </Td>
                <Td>Mouse</Td>
                <Td>
                  {/* nanti danti productDescription dengan deskripsi database */}
                  {productDescription.length > maxDescriptionLength
                    ? productDescription.substring(0, maxDescriptionLength) +
                      "..."
                    : productDescription}
                </Td>
                <Td>100.000</Td>
                <Td>600</Td>
                <Td>
                  {" "}
                  <Box>
                    <Button
                      marginRight={"15px"}
                      color={"white"}
                      bgColor={"#56C05A"}
                      p={"0px 50px"}
                    >
                      Edit
                    </Button>
                    <Button color={"white"} bgColor={"#F74C4C"} p={"0px 45px"}>
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>
                  <Link href="https://google.com" textDecoration={"underline"}>
                    Google.com
                  </Link>
                </Td>
                <Td>Mouse</Td>
                <Td>
                  {/* nanti danti productDescription dengan deskripsi database */}
                  {productDescription.length > maxDescriptionLength
                    ? productDescription.substring(0, maxDescriptionLength) +
                      "..."
                    : productDescription}
                </Td>
                <Td>100.000</Td>
                <Td>600</Td>
                <Td>
                  {" "}
                  <Box>
                    <Button
                      marginRight={"15px"}
                      color={"white"}
                      bgColor={"#56C05A"}
                      p={"0px 50px"}
                    >
                      Edit
                    </Button>
                    <Button color={"white"} bgColor={"#F74C4C"} p={"0px 45px"}>
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>
                  <Link href="https://google.com" textDecoration={"underline"}>
                    Google.com
                  </Link>
                </Td>
                <Td>Mouse</Td>
                <Td>
                  {/* nanti danti productDescription dengan deskripsi database */}
                  {productDescription.length > maxDescriptionLength
                    ? productDescription.substring(0, maxDescriptionLength) +
                      "..."
                    : productDescription}
                </Td>
                <Td>100.000</Td>
                <Td>600</Td>
                <Td>
                  {" "}
                  <Box>
                    <Button
                      marginRight={"15px"}
                      color={"white"}
                      bgColor={"#56C05A"}
                      p={"0px 50px"}
                    >
                      Edit
                    </Button>
                    <Button color={"white"} bgColor={"#F74C4C"} p={"0px 45px"}>
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>
                  <Link href="https://google.com" textDecoration={"underline"}>
                    Google.com
                  </Link>
                </Td>
                <Td>Mouse</Td>
                <Td>
                  {/* nanti danti productDescription dengan deskripsi database */}
                  {productDescription.length > maxDescriptionLength
                    ? productDescription.substring(0, maxDescriptionLength) +
                      "..."
                    : productDescription}
                </Td>
                <Td>100.000</Td>
                <Td>600</Td>
                <Td>
                  {" "}
                  <Box>
                    <Button
                      marginRight={"15px"}
                      color={"white"}
                      bgColor={"#56C05A"}
                      p={"0px 50px"}
                    >
                      Edit
                    </Button>
                    <Button color={"white"} bgColor={"#F74C4C"} p={"0px 45px"}>
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>
                  <Link href="https://google.com" textDecoration={"underline"}>
                    Google.com
                  </Link>
                </Td>
                <Td>Mouse</Td>
                <Td>
                  {/* nanti danti productDescription dengan deskripsi database */}
                  {productDescription.length > maxDescriptionLength
                    ? productDescription.substring(0, maxDescriptionLength) +
                      "..."
                    : productDescription}
                </Td>
                <Td>100.000</Td>
                <Td>600</Td>
                <Td>
                  {" "}
                  <Box>
                    <Button
                      marginRight={"15px"}
                      color={"white"}
                      bgColor={"#56C05A"}
                      p={"0px 50px"}
                    >
                      Edit
                    </Button>
                    <Button color={"white"} bgColor={"#F74C4C"} p={"0px 45px"}>
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
            </Tbody>
            {/* <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot> */}
          </Table>
        </Stack>
      </TableContainer>
    </Box>
  );
}
