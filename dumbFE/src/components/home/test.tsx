import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import logo2 from "../../assets/Frame@3x.svg";
import { useState } from "react";

// Import komponen yang ingin ditampilkan
import { Login } from "../../pages/login";
import { Register } from "../../pages/register";
import { Home } from "../../pages/home";
import { Product } from "./product";

const Links = ["Complain", "Profile", "Logout"];

const NavLink = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      color={isActive ? "orange.500" : "inherit"}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default function NavTest() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <Box bg={"brand.background"} px={4} color={"white"}>
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
              href={"/test"}
              background={"transparent"}
              _hover={{ bg: "transparent" }}
            >
              <Image src={logo2} alt="logo" w={"50px"} />
            </Button>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link}
                  isActive={activeLink === link}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </NavLink>
              ))}
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
              {Links.map((link) => (
                <NavLink
                  key={link}
                  isActive={activeLink === link}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box>
        {activeLink === "Complain" && <Login />}
        {activeLink === "Profile" && <Register />}
        {activeLink === "Logout" && <Product />}
        {activeLink === "" && <Product />} {/* Default message */}
      </Box>
    </>
  );
}
