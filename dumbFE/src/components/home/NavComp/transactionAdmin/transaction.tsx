import { useAppDispatch, useAppSelector } from "@/stores";
import { getUserTransactionItemsAdminAsync } from "@/stores/user/async";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const Transaction = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(
    (state) => state.user.allUserTransactions
  );
  console.log("ADMIN", transactions);

  useEffect(() => {
    dispatch(getUserTransactionItemsAdminAsync());
  }, [dispatch]);

  return (
    <Flex>
      <TableContainer w={"100%"}>
        <Stack
          w={"100%"}
          h={"100%"}
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
                <Th color={"white"}>Profile</Th>
                <Th color={"white"}>Name</Th>
                <Th color={"white"}>Phone</Th>
                <Th color={"white"}>Address</Th>
                <Th color={"white"}>Items</Th>
                <Th color={"white"}>Total</Th>
                <Th color={"white"}>Status</Th>
                <Th color={"white"}>Date</Th>
                <Th color={"white"}>Action</Th>
              </Tr>
            </Thead>
            {transactions?.map((transaction) => (
              <Tbody key={transaction.id}>
                <Tr>
                  <Td>1</Td>
                  <Td>
                    <Image
                      src={transaction.avatar}
                      alt="Image"
                      objectFit={"cover"}
                      w={"50px"}
                      h={"50px"}
                    />
                  </Td>
                  <Td>{transaction.name}</Td>
                  <Td>{transaction.phone}</Td>
                  <Td>
                    {/* nanti ganti productDescription dengan deskripsi database */}
                    {transaction.address.length > 20
                      ? transaction.address.substring(0, 25) + "..."
                      : transaction.address}
                  </Td>
                  <Td>items</Td>
                  <Td>
                    {transaction?.transaction.map((item, i) => (
                      <div key={i}>Amount: {item.amount}</div>
                    ))}
                  </Td>
                  <Td>
                    {transaction?.transaction.map((item, i) => (
                      <div key={i}>{item.status}</div>
                    ))}
                  </Td>
                  <Td>
                    {transaction?.transaction.map((item, i) => (
                      <div key={i}>{item.createdAt}</div>
                    ))}
                  </Td>

                  <Td>
                    {transaction?.transaction.map((item, i) => (
                      <Box>
                        <Button
                          key={i}
                          marginRight={"15px"}
                          color={"white"}
                          bgColor={"#56C05A"}
                          p={"0px 50px"}
                        >
                          Edit
                        </Button>
                        <Button
                          color={"white"}
                          bgColor={"#F74C4C"}
                          p={"0px 45px"}
                        >
                          Delete
                        </Button>
                      </Box>
                    ))}
                  </Td>
                </Tr>
              </Tbody>
            ))}
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
    </Flex>
  );
};

export default Transaction;
