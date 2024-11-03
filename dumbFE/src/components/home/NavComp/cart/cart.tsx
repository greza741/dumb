import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IsiCart } from "./isi-cart";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/stores";
import { formatCurrency } from "@/components/addOther/formatcurrency";

export const Cart = () => {
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart);
  return (
    <>
      <Flex p="8" direction={{ base: "column", lg: "row" }} align="center">
        <Box w="full" p="6" boxShadow="md" rounded="lg">
          <Text fontSize="2xl" fontWeight="bold">
            Shopping Cart
          </Text>
          <Divider my="4" />

          <IsiCart />

          <Divider my="4" />
          <Box textAlign="right">
            <Text fontWeight="bold">
              Subtotal: {formatCurrency(items.totalPrice)}
            </Text>
          </Box>
        </Box>
        <Box w="full" maxW="400px" mt="8" p="6" boxShadow="md" rounded="lg">
          <Text fontSize="lg" fontWeight="bold" mb="4">
            Order Summary
          </Text>
          <VStack align="stretch" spacing="2">
            <Flex justify="space-between">
              <Text>Subtotal</Text>
              <Text>{formatCurrency(items.totalPrice)}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Shipping</Text>
              <Text color="blue.500" cursor="pointer">
                Calculate shipping
              </Text>
            </Flex>

            <Divider />
            <Flex justify="space-between" fontWeight="bold" fontSize="lg">
              <Text>Total</Text>
              <Text>123</Text>
            </Flex>
          </VStack>
          <Button colorScheme="blue" w="full" mt="4">
            Checkout
          </Button>
          <Button
            bgColor={"transparent"}
            onClick={() => navigate(-1)}
            textAlign="center"
            mt="4"
            color="blue.500"
            cursor="pointer"
          >
            or Continue shopping
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Cart;
