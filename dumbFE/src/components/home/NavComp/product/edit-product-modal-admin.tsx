import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  Input,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Product } from "@/stores/product/slice";
import { useAppDispatch } from "@/stores";
import { updateProductAsync } from "@/stores/product/async";
import { toast } from "react-toastify";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRef: React.RefObject<HTMLInputElement>;
  finalRef: React.RefObject<HTMLButtonElement>;
  product: Product | undefined;
  onProductUpdate: () => void;
}

const EditProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  initialRef,
  finalRef,
  product,
  onProductUpdate,
}) => {
  const dispatch = useAppDispatch();
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

      if (updateProductAsync.fulfilled.match(response)) {
        toast.success("Product updated successfully");
      } else {
        toast.error("Failed to update product");
      }
      setImageFile(null);

      onProductUpdate();

      onClose();
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size={"7xl"}
    >
      <ModalOverlay />
      <ModalContent bgColor={"brand.background"} h={"90%"} p={"20px"}>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Flex alignItems={"center"} gap={5}>
              <label htmlFor="image-update">
                {imageFile?.name || "Add Image"}
              </label>
              <input
                type="file"
                id="image-update"
                accept="image/*"
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
            </Flex>
            <button>{imageFile?.name || "No image selected"}</button>
            <FormControl>
              <Input
                bg={"#3D3D3D"}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                ref={initialRef}
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
        </ModalBody>

        <ModalFooter w={"100%"}>
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProductModal;
