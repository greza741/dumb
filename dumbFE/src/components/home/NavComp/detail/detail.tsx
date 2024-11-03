import { formatCurrency } from "@/components/addOther/formatcurrency";
import { PanahBack } from "@/components/icon/icon";
import { useAppDispatch, useAppSelector } from "@/stores";
import { getAllProductsAsync } from "@/stores/product/async";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Detail() {
  const dispatch = useAppDispatch();
  const { idProduct } = useParams();
  const navigate = useNavigate();
  const product = useAppSelector((state) => state.product).products.find(
    (product) => product.id === +idProduct!
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  return (
    <Box bgColor={"brand.background"} h={"100vh"} w={"100vw"} color={"white"}>
      <Button
        _hover={{ bgColor: "transparent" }}
        bgColor={"transparent"}
        onClick={() => navigate(-1)}
      >
        <PanahBack />
      </Button>
      <Box padding={"50px 100px"} display={"flex"} flexDirection={"row"}>
        <Box flex={1}>
          <Image
            src={product?.image}
            h={"600px"}
            w={"800px"}
            objectFit={"cover"}
          />
        </Box>
        <Box
          paddingLeft={"100px"}
          paddingTop={"70px"}
          display={"flex"}
          flexDirection={"column"}
          flex={1}
        >
          <Text fontWeight={"bold"} fontSize={"50px"} color={"brand.orange"}>
            {product?.name}
          </Text>
          <Text>Stock : {product?.stock}</Text>
          {/* <Text marginTop={"20px"}>- Wireless mouse</Text>
          <Text>- Maish banyak fitur</Text>
          <Text>- Maish banyak fitur</Text>
          <Text>- Maish banyak fitur</Text>
          <Text>- Maish banyak fitur</Text> */}
          <Text marginTop={"20px"}>{product?.description}</Text>
          <Box justifyItems={"end"} marginTop={"80px"}>
            <Text fontWeight={"bold"} fontSize={"40px"} color={"brand.orange"}>
              {formatCurrency(product?.price)}
            </Text>
          </Box>
          <Box>
            <Button w={"100%"} color={"white"} bgColor={"brand.orange"}>
              Buy
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
