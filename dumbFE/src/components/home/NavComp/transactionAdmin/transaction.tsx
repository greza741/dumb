import { formatCurrency } from "@/components/addOther/formatcurrency";
import { formatDate } from "@/components/addOther/formatDate";
import { useAppDispatch, useAppSelector } from "@/stores";
import { fetchTransactionStatusById } from "@/stores/transaction/async";
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

  useEffect(() => {
    dispatch(getUserTransactionItemsAdminAsync());
  }, [dispatch]);

  const handleFetchAndUpdateStatus = async (transactionId: string) => {
    // Fetch status dari Midtrans
    await dispatch(fetchTransactionStatusById(transactionId));
    // Fetch ulang data transaksi dari server
    await dispatch(getUserTransactionItemsAdminAsync());
  };

  return (
    <Flex>
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
        {transactions?.map((transaction, index) => (
          <Box key={transaction.id} mb={8}>
            <TableContainer w={"100%"} borderTop={"1px"} rounded={"lg"}>
              <Table variant="striped" colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th color={"white"}>No</Th>
                    <Th color={"white"}>Profile</Th>
                    <Th color={"white"}>Name</Th>
                    <Th color={"white"}>Phone</Th>
                    <Th color={"white"}>Address</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{index + 1}</Td>
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
                      {transaction?.address?.length > 20
                        ? transaction?.address?.substring(0, 25) + "..."
                        : transaction?.address}
                    </Td>
                    <Td></Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <TableContainer w={"100%"} borderBottom={"1px"} rounded={"lg"}>
              <Table variant="simple" bg={"grey"} color={"white"}>
                <Thead>
                  <Tr>
                    <Th color={"white"}>Items</Th>
                    <Th color={"white"}>Total</Th>
                    <Th color={"white"}>Status</Th>
                    <Th color={"white"}>Date</Th>
                    <Th color={"white"}>Transaction ID</Th>

                    <Th color={"white"}>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transaction.transaction.map((item, i) => (
                    <Tr key={i}>
                      <Td>items</Td>
                      <Td>{formatCurrency(item.amount)}</Td>
                      <Td>{item.status}</Td>
                      <Td>{formatDate(item.createdAt)}</Td>
                      <Td>{item.transactionId}</Td>
                      <Td>
                        <Box>
                          <Button
                            onClick={() =>
                              handleFetchAndUpdateStatus(item.transactionId)
                            }
                            marginRight={"15px"}
                            color={"white"}
                            bgColor={"#56C05A"}
                            p={"0px 50px"}
                          >
                            Details
                          </Button>
                        </Box>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export default Transaction;
