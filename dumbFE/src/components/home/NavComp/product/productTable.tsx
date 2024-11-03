import { useAppDispatch } from "@/stores";
import {
  deleteProductAsync,
  getAllProductsAsync,
} from "@/stores/product/async";
import { Product } from "@/stores/product/slice";
import {
  Box,
  Button,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import EditProductModal from "./edit-product-modal-admin";
import { useNavigate } from "react-router-dom";

export function ProductTable({ products }: { products: Product[] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = React.useState<Product>();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleEdit = (product: Product) => {
    // setSelectedProduct(product); // Set produk yang dipilih ke state
    // onOpen(); // Buka modal

    navigate(`edit/${product.id}`);
  };
  const onProductUpdate = async () => {
    await dispatch(getAllProductsAsync()); // Refresh produk setelah update
  };

  const handleDelete = async (id: number) => {
    await dispatch(deleteProductAsync(id));
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
                <Th color={"white"}>Photo</Th>
                <Th color={"white"}>Product Name</Th>
                <Th color={"white"}>Product Decs</Th>
                <Th color={"white"}>Price</Th>
                <Th color={"white"}>Qty</Th>
                <Th color={"white"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products?.map((product: Product, index: number) => (
                <Tr key={product.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Image
                      src={product.image}
                      alt={product.name}
                      objectFit={"cover"}
                      w={"50px"}
                      h={"50px"}
                    />
                  </Td>
                  <Td>{product.name}</Td>
                  <Td>
                    {/* nanti ganti productDescription dengan deskripsi database */}
                    {product.description.length > 25
                      ? product.description.substring(0, 25) + "..."
                      : product.description}
                  </Td>
                  <Td>{product.price}</Td>
                  <Td>{product.stock}</Td>
                  <Td>
                    {" "}
                    <Box>
                      <Button
                        marginRight={"15px"}
                        color={"white"}
                        bgColor={"#56C05A"}
                        p={"0px 50px"}
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </Button>
                      <EditProductModal
                        isOpen={isOpen}
                        onClose={onClose}
                        initialRef={initialRef}
                        finalRef={finalRef}
                        product={selectedProduct}
                        onProductUpdate={onProductUpdate}
                      />
                      <Button
                        color={"white"}
                        bgColor={"#F74C4C"}
                        p={"0px 45px"}
                        onClick={() => handleDelete(product.id)}
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
