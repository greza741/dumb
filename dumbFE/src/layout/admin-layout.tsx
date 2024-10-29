import logo2 from "@/assets/Frame@3x.svg";
import ContainerNavAdmin from "@/components/home/NavComp/admin/container-nav";
import { useAppSelector } from "@/stores";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
export function AdminLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const authState = useAppSelector((state) => state.auth);

  if (authState.token) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box h={"100vh"} w={"100vw"}>
      <Box bg={"brand.background"} color={"white"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Button
              as={"a"}
              href={"/admin"}
              background={"transparent"}
              _hover={{ bg: "transparent" }}
            >
              <Image src={logo2} alt="logo" w={"50px"} />
            </Button>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack spacing={4} display={{ base: "none", md: "flex" }}>
              <ContainerNavAdmin />
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList color={"white"} bg={"grey"}>
                <MenuItem bg={"grey"}>Keranjang</MenuItem>
                <MenuItem bg={"grey"}>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem bg={"grey"}>Edit Profile</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ContainerNavAdmin />
            </Stack>
          </Box>
        ) : null}
        <>
          <Outlet />
        </>
      </Box>
    </Box>
  );
}
