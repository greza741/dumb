import {
  Box,
  Button,
  Flex,
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
import CategoryModal from "./category-modal";

export function TableCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
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
                <Th color={"white"}>Category Name</Th>
                <Th color={"white"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Mouse</Td>
                <Td>
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
                    <CategoryModal
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
                <Td>Mouse</Td>
                <Td>
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
                <Td>Mouse</Td>
                <Td>
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
                <Td>Mouse</Td>
                <Td>
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
                <Td>Mouse</Td>
                <Td>
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
                <Td>Mouse</Td>
                <Td>
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
