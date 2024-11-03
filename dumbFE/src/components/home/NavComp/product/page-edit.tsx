import { CloseX } from "@/components/icon/icon";
import { useAppDispatch, useAppSelector } from "@/stores";
import { updateProductAsync } from "@/stores/product/async";
import { Box, Button, Flex, FormControl, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface ProductModalProps {}

const EditProduc: React.FC<ProductModalProps> = () => {
  const dispatch = useAppDispatch();
  const { idProduct } = useParams();
  const navigate = useNavigate();

  const product = useAppSelector((state) => state.product).products.find(
    (product) => product.id === +idProduct!
  );
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string | FileList;
  }>({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || 0,
    stock: product?.stock || 0,
    image: product?.image || "",
  });
  const [imageFile, setImageFile] = useState<any>(null);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
      });
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file, "<<< cek file");
    if (file) {
      // setImageFile(file);
      console.log(imageFile, "<<< cek image file");

      // const reader = new FileReader();
      // reader.onloadend = () => setImagePreview(reader.result as string);
      // reader.readAsDataURL(e.target.files[0]);
    } else {
      console.log("Selected image file ELSE:", file);
    }
  };

  const handleSubmit = async () => {
    const updatedFormData = new FormData();
    updatedFormData.append("name", formData.name);
    updatedFormData.append("description", formData.description);
    updatedFormData.append("price", formData.price.toString());
    updatedFormData.append("stock", formData.stock.toString());

    if (imageFile) {
      console.log("ADA GAMBARNYA");

      updatedFormData.append("image", imageFile); // Pastikan file gambar disertakan
    }

    try {
      const response = await dispatch(
        updateProductAsync({ id: product!.id, formData: updatedFormData })
      );
      navigate(-1);
      if (updateProductAsync.fulfilled.match(response)) {
        toast.success("Product updated successfully");
      } else {
        toast.error("Failed to update product");
      }
      setImageFile(null);
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  return (
    <Box padding={"50px 10px"}>
      <Stack spacing={4}>
        <Flex alignItems={"center"} gap={5} justifyContent={"space-between"}>
          <input
            type="file"
            id="image-update"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.currentTarget.files) {
                setImageFile(e.currentTarget.files[0]);
              }
            }}
          />{" "}
          <Button
            w={"10%"}
            onClick={() => document.getElementById("image-update")?.click()}
          >
            Add Image
          </Button>
          <Button
            bgColor={"transparent"}
            onClick={() => navigate(-1)}
            _hover={{ bgColor: "transparent" }}
          >
            <CloseX />
          </Button>
        </Flex>
        <FormControl>
          <Input
            bg={"#3D3D3D"}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
        </FormControl>
        <FormControl>
          <Input
            bg={"#3D3D3D"}
            as={"textarea"}
            h={"150px"}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </FormControl>
        <FormControl>
          <Input
            bg={"#3D3D3D"}
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </FormControl>
        <FormControl>
          <Input
            bg={"#3D3D3D"}
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
          />
        </FormControl>
      </Stack>
      <Box paddingTop={"20px"}>
        <Button
          onClick={(e) => {
            handleSubmit();
          }}
          w={"100%"}
          bg="#56C05A"
          color={"white"}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditProduc;
