import { useAppDispatch, useAppSelector } from "@/stores";
import { getAllProductsAsync } from "@/stores/product/async";
import { addItemToCartAsync } from "@/stores/cart/async"; // Import fungsi async untuk menambahkan item ke cart
import type { Product } from "@/stores/product/slice";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "@/components/addOther/formatcurrency";

export function Product() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products: Product[] = useAppSelector((state) => state.product.products);
  const userId = useAppSelector((state) => state.auth.user?.id);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  const handleAddItem = async (productId: number) => {
    if (userId) {
      await dispatch(addItemToCartAsync({ userId, productId, quantity: 1 }));
    }
  };

  return (
    <Box
      color={"#F74C4C"}
      paddingLeft={"50px"}
      bgColor={"brand.background"}
      h={"100%"}
      w={"100%"}
    >
      <Box padding={"30px 0px 20px 0px"}>Products</Box>

      <Grid
        templateColumns={"repeat(4, 1fr)"}
        gridGap={"20px"}
        columnGap={"20px"}
        w={"100%"}
      >
        {products.map((product) => (
          <GridItem w={"100%"} key={product.id}>
            <Box
              border={"1px solid #202021"}
              bg={"#202021"}
              borderRadius={"5px"}
            >
              <Image
                h={"300px"}
                w={"100%"}
                objectFit={"cover"}
                src={product.image}
                onClick={() => navigate(`/detail/${product.id}`)}
              />
              <Box p={"10px"}>
                <Text>{product.name}</Text>
                <Text color={"white"} fontSize={"11px"}>
                  {formatCurrency(product.price)}{" "}
                </Text>
                <Text color={"white"} fontSize={"11px"}>
                  Stock : {product.stock}
                </Text>
                <Button
                  onClick={() => handleAddItem(product.id)}
                  bgColor={"brand.orange"}
                  mt={2}
                  w={"100%"}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
