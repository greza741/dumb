import { useAppDispatch, useAppSelector } from "@/stores";
import { getAllCategoriesAsync } from "@/stores/category/async";
import {
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRef: React.RefObject<HTMLInputElement>;
  finalRef: React.RefObject<HTMLButtonElement>;
  onCreate: (productData: FormData) => Promise<void>;
}

const CreateProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  initialRef,
  finalRef,
  onCreate,
}) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);
  const auth = useAppSelector((state) => state.auth);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    stock: "",
    categoryId: "",
    userId: auth.user?.id,
  });

  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, [dispatch]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      console.log("Selected image file:", file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      console.log("Selected image file:", file);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("stock", productData.stock);
    formData.append("categoryId", productData.categoryId);
    formData.append("userId", `${productData.userId}`);
    if (imageFile) {
      formData.append("image", imageFile);
      console.log(formData);
      console.log("Image file added to FormData:", imageFile);
    } else {
      console.error("No image file found!");
    }
    await onCreate(formData);
    onClose();
    console.log("FormData before submission:", formData);
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
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Flex alignItems={"center"} gap={5}>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <Button
                w={"10%"}
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                Add Image
              </Button>
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Image Preview"
                  boxSize="50px"
                  objectFit="cover"
                  borderRadius="md"
                />
              )}
            </Flex>
            <FormControl>
              <Input
                bg={"#3D3D3D"}
                name="name"
                onChange={handleChange}
                ref={initialRef}
                placeholder="Product"
              />
            </FormControl>
            <FormControl>
              <Input
                bg={"#3D3D3D"}
                as={"textarea"}
                name="description"
                onChange={handleChange}
                h={"150px"}
                ref={initialRef}
                placeholder="Description"
              />
            </FormControl>
            <FormControl>
              <Input
                bg={"#3D3D3D"}
                name="price"
                onChange={handleChange}
                ref={initialRef}
                placeholder="Price"
              />
            </FormControl>
            <FormControl>
              <Input
                bg={"#3D3D3D"}
                name="stock"
                onChange={handleChange}
                ref={initialRef}
                placeholder="Stock"
              />
            </FormControl>
            <FormControl>
              <Select
                name="categoryId"
                onChange={handleChange}
                placeholder="Select Category"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter w={"100%"}>
          <Button
            onClick={handleSubmit}
            w={"100%"}
            bg="#56C05A"
            color={"white"}
            mr={8}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProductModal;
