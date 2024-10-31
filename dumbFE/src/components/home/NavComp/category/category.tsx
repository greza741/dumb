import { useAppDispatch, useAppSelector } from "@/stores";
import {
  createCategoryAsync,
  getAllCategoriesAsync,
} from "@/stores/category/async";
import { Box, Button, Input, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoryModal from "./category-modal";
import { TableCategory } from "./table-category";

export function Category() {
  const dispatch = useAppDispatch();

  const { categories, loading } = useAppSelector((state) => state.category);
  const [newCategoryName, setNewCategoryName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editCategoryId, setEditCategoryId] = useState<number>(0);

  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, [dispatch]);

  const handleCreate = () => {
    if (newCategoryName) {
      dispatch(createCategoryAsync(newCategoryName));
      setNewCategoryName("");
    }
  };

  const handleEdit = (category: any) => {
    setEditCategoryId(category.id);
    onOpen();
  };
  return (
    <Box margin={"50px 0px 0px 50px"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text> List Category</Text>
        </Box>
        <Box alignItems={"end"} display={"flex"}>
          <Input
            placeholder="New Category"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <Button ml={4} onClick={handleCreate} isLoading={loading}>
            Save
          </Button>
        </Box>
      </Box>
      <Box marginTop={"20px"}>
        <TableCategory categories={categories} onEdit={handleEdit} />
        <CategoryModal
          isOpen={isOpen}
          onClose={onClose}
          categoryId={editCategoryId}
        />
      </Box>
    </Box>
  );
}
