import { Navs } from "./navs-comp";
import Items from "./items";
import { useAppDispatch } from "@/stores";
import { Box, Text } from "@chakra-ui/react";
import { LOGOUT } from "@/stores/auth/slice";

const ContainerNav = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      {Navs.map((item, index) => {
        return <Items key={index} {...item} />;
      })}
      <Box
        className={`left-bar-icons`}
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: "gray.700",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(LOGOUT());
        }}
      >
        <Text fontWeight="500" fontSize="1.2rem">
          Logout
        </Text>
      </Box>
    </>
  );
};
export default ContainerNav;
