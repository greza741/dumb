import logo2 from "@/assets/Frame@3x.svg";
import ContainerNav from "@/components/home/NavComp/user/container-nav";
import { CartIcon } from "@/components/icon/icon";
import { useAppDispatch, useAppSelector } from "@/stores";
import { setToken } from "@/stores/auth/slice";
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
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
export function UserLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = useAppSelector((state) => state.auth.user?.role);
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (userRole !== "USER") {
    return <Navigate to="/admin" state={{ from: location }} replace />;
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
              href={"/"}
              background={"transparent"}
              _hover={{ bg: "transparent" }}
            >
              <Image src={logo2} alt="logo" w={"50px"} />
            </Button>
          </HStack>
          <Box ml={"auto"} mb={"10px"}>
            <Button
              onClick={() => navigate("/cart")}
              _hover={{ bg: "transparent" }}
              bgColor={"transparent"}
            >
              <CartIcon />
            </Button>
          </Box>
          <Flex alignItems={"center"}>
            <HStack spacing={4} display={{ base: "none", md: "flex" }}>
              <ContainerNav />
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
              <ContainerNav />
            </Stack>
          </Box>
        ) : null}
        <Box h={"full"} w={"full"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
