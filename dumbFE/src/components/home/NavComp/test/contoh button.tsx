// OpenModalButton.tsx
import React from "react";
import { Button } from "@chakra-ui/react";

interface OpenModalButtonProps {
  onOpen: () => void;
}

const OpenModalButton: React.FC<OpenModalButtonProps> = ({ onOpen }) => {
  return <Button onClick={onOpen}>Open Modal</Button>;
};

export default OpenModalButton;
