import { Button, Flex, HStack, Input, Stack, Text } from "@chakra-ui/react";

type MessageProps = {
  text: string;
  actor: "user" | "bot";
};
const Message = ({ text, actor }: MessageProps) => {
  return (
    <Flex
      p={4}
      bg={actor === "user" ? "blue.500" : "gray.100"}
      color={actor === "user" ? "white" : "gray.600"}
      borderRadius="20px"
      w="fit-content"
      alignSelf={actor === "user" ? "flex-end" : "flex-start"}
    >
      <Text>{text}</Text>
    </Flex>
  );
};

export function ComplainChat() {
  return (
    <Flex h="90vh" py={12}>
      <Flex flexDirection="column" w="full" m="auto" h="full" roundedTop="lg">
        <Stack
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
          <Message text="Hi" actor="user" />
          <Message text="How may I help you?" actor="bot" />
          <Message text="Hi" actor="user" />
          <Message text="How may I help you?" actor="bot" />
          <Message text="Hi" actor="user" />
          <Message text="How may I help you?" actor="bot" />
          <Message text="Hi" actor="user" />
          <Message text="How may I help you?" actor="bot" />
          <Message text="How may I help you?" actor="bot" />
          <Message text="How may I help you?" actor="bot" />
          <Message text="How may I help you?" actor="bot" />
          <Message text="Hi" actor="user" />

          <Message text="Hi" actor="user" />

          <Message text="Hi" actor="user" />
        </Stack>

        <HStack bg="brand.background2">
          <Input bg="brand.background2" placeholder="Send Text." />
          <Button colorScheme="blackAlpha">Send</Button>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default ComplainChat;
