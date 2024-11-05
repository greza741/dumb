import { formatCurrency } from "@/components/addOther/formatcurrency";
import { MinusIcon, PlusIcon, TrashIcon } from "@/components/icon/icon";
import { useAppDispatch, useAppSelector } from "@/stores";
import {
  addItemToCartAsync,
  clearCartAsync,
  getCartAsync,
  removeItemFromCartAsync,
} from "@/stores/cart/async";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

export const IsiCart = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.cart);
  const userId = useAppSelector((state) => state.auth.user?.id);
  // const cartId = useAppSelector((state) => state.cart.id);
  // useEffect(() => {
  //   if (cartId) {
  //     setCartId(cartId);
  //   }
  // }, [cartId, setCartId]);
  console.log(items);

  useEffect(() => {
    if (userId) {
      dispatch(getCartAsync(userId));
    }
  }, [dispatch, userId]);

  const handleAddItem = async (productId: number) => {
    await dispatch(
      addItemToCartAsync({ userId: userId!, productId, quantity: 1 })
    );
    dispatch(getCartAsync(userId!)); // Panggil kembali getCartAsync untuk memuat ulang data cart
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeItemFromCartAsync({ userId: userId!, productId }));
  };

  const handleClearCart = () => {
    dispatch(clearCartAsync(userId!));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {items.map((item) => (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="4"
          borderBottom="1px solid #e2e2e2"
          key={item.id}
        >
          <Image
            boxSize="80px"
            src={item.product.image}
            alt={item.product.name}
          />
          <VStack align="flex-start" flex="1" px="4">
            <Text fontWeight="bold">{item.product.name}</Text>
            <Text fontWeight="bold">{formatCurrency(item.product.price)}</Text>
          </VStack>
          <Flex alignItems={"center"}>
            <Button bgColor={"transparent"} _hover={{ bgColor: "transparent" }}>
              <MinusIcon />
            </Button>
            <Box>
              <Text>{item.quantity}</Text>
            </Box>
            <Button
              onClick={() => handleAddItem(item.product.id)}
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
            >
              <PlusIcon />
            </Button>
          </Flex>

          <Text fontWeight="bold" ml="4">
            {formatCurrency(item.totalPrice)}
          </Text>
          <Text
            cursor="pointer"
            color="red.500"
            fontWeight="bold"
            fontSize="lg"
            pl={"4"}
            onClick={() => handleRemoveItem(item.product.id)}
          >
            <TrashIcon />
          </Text>
        </Flex>
      ))}
    </>
  );
};

export default IsiCart;
