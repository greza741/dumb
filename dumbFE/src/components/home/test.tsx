import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import CustomModal from "./NavComp/test/contohModalPisah";

export function Test() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Box>
        <Button onClick={onOpen}>Edit</Button>
        <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button>
      </Box>
      <Box>
        <CustomModal
          isOpen={isOpen}
          onClose={onClose}
          initialRef={initialRef}
          finalRef={finalRef}
        />
      </Box>
    </>
  );
}
