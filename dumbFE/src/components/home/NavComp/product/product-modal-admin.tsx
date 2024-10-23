// CustomModal.tsx
import React from "react";
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
  FormLabel,
  Input,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRef: React.RefObject<HTMLInputElement>;
  finalRef: React.RefObject<HTMLButtonElement>;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  initialRef,
  finalRef,
}) => {
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
              <Button w={"10%"}>Add Image</Button>
              <Text color={"grey"}>image.jpg</Text>
            </Flex>
            <FormControl>
              <Input bg={"#3D3D3D"} ref={initialRef} placeholder="Product" />
            </FormControl>
            <FormControl>
              <Input
                bg={"#3D3D3D"}
                as={"textarea"}
                h={"150px"}
                ref={initialRef}
                placeholder="Description"
              />
            </FormControl>
            <FormControl>
              <Input bg={"#3D3D3D"} ref={initialRef} placeholder="Price" />
            </FormControl>
            <FormControl>
              <Input bg={"#3D3D3D"} ref={initialRef} placeholder="Stock" />
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter w={"100%"}>
          <Button w={"100%"} bg="#56C05A" color={"white"} mr={8}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
