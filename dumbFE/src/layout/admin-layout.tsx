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
import { Navigate, Outlet, useLocation } from "react-router-dom";
export function AdminLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const userRole = useAppSelector((state) => state.auth.user?.role);
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (userRole !== "ADMIN") {
    return <Navigate to="/" state={{ from: location }} replace />;
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
                    "https://www.shutterstock.com/id/image-vector/three-persons-admin-icon-outline-vector-1730974165"
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
