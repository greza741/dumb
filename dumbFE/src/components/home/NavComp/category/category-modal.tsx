// CustomModal.tsx
import { useAppDispatch, useAppSelector } from "@/stores";
import { updateCategoryAsync } from "@/stores/category/async";
import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryId: number;
}

const CategoryModal = ({ isOpen, onClose, categoryId }: CategoryModalProps) => {
  const dispatch = useAppDispatch();
  const { categories, loading } = useAppSelector((state) => state.category);
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    if (categoryId) {
      const category = categories.find((cat) => cat.id === categoryId);
      if (category) {
        setFormData({ name: category.name });
      }
    }
  }, [categoryId, categories]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating category:", { id: categoryId, name: formData.name });
    dispatch(updateCategoryAsync({ id: categoryId, name: formData.name }));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"7xl"}>
      <ModalOverlay />
      <ModalContent bgColor={"brand.background"} h={"40%"}>
        <ModalHeader>Edit Category</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Input
              placeholder="Category Name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>
        <Button
          bg="#56C05A"
          color={"white"}
          mr={8}
          onClick={handleSubmit}
          isLoading={loading}
        >
          Save
        </Button>
        <Button onClick={onClose} bgColor={"red"} mr={8}>
          Cancel
        </Button>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CategoryModal;
