import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import logo2 from "@/assets/Frame@3x.svg";
import { useAppDispatch, useAppSelector } from "@/stores";
import { getCartAsync } from "@/stores/cart/async";
import { useEffect } from "react";
import { formatCurrency } from "@/components/addOther/formatcurrency";
import { getUserTransactionItemsAsync } from "@/stores/user/async";

export function MyTransaction() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const transactionStatus = useAppSelector((state) => state.transaction.status);
  const userId = useAppSelector((state) => state.auth.user?.id);
  const transaction = useAppSelector((state) => state.user.transactions);

  console.log(transaction, "<<< transactions");

  useEffect(() => {
    if (userId) {
      dispatch(getCartAsync(userId));
    }
    dispatch(getUserTransactionItemsAsync());
  }, [dispatch, userId]);

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
          {/* {transactions?.map((transaction) => (
            <Box
              key={transaction.id}
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
                  src={transaction.product.image}
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
                    {transaction.product.name}
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
                  <Text paddingTop={"20px"}>
                    Price : {formatCurrency(transaction.product.price)}
                  </Text>
                  <Text paddingTop={"20px"}>
                    Quantity : {transaction.quantity}
                  </Text>
                  <Text paddingTop={"20px"}>Status : {transactionStatus}</Text>
                </Box>
                <Box>
                  <Text>
                    Sub Total : {formatCurrency(transaction.subTotal)}
                  </Text>
                </Box>
              </Box>
              <Box alignContent={"center"} paddingLeft={"80px"}>
                <Image src={logo2} alt="logo" w={"90px"} />
              </Box>
            </Box>
          ))} */}
        </Stack>
      </Flex>
    </Box>
  );
}
