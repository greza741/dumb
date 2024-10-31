import { useAppDispatch } from "@/stores";
import { deleteCategoryAsync } from "@/stores/category/async";
import { Category } from "@/stores/category/slice";
import {
  Box,
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export function TableCategory({
  categories,
  onEdit,
}: {
  categories: Category[];
  onEdit: (category: Category) => void;
}) {
  const dispatch = useAppDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteCategoryAsync(id));
  };
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
              {categories?.map((category: Category, index: number) => (
                <Tr key={category.id}>
                  <Td>{index + 1}</Td>
                  <Td>{category.name}</Td>
                  <Td>
                    <Box>
                      <Button
                        marginRight={"15px"}
                        color={"white"}
                        bgColor={"#56C05A"}
                        p={"0px 50px"}
                        onClick={() => onEdit(category)}
                      >
                        Edit
                      </Button>

                      <Button
                        color={"white"}
                        bgColor={"#F74C4C"}
                        p={"0px 45px"}
                        onClick={() => handleDelete(category.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Td>
                </Tr>
              ))}
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
