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
} from "@chakra-ui/react";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRef: React.RefObject<HTMLInputElement>;
  finalRef: React.RefObject<HTMLButtonElement>;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
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
      <ModalContent bgColor={"brand.background"} h={"40%"}>
        <ModalHeader>Edit Category</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Input bg={"#3D3D3D"} ref={initialRef} placeholder="Mouse" />
          </FormControl>
        </ModalBody>
        <Button bg="#56C05A" color={"white"} mr={8}>
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
