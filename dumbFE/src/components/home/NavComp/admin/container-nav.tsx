import { useAppDispatch } from "@/stores";
import { LOGOUT } from "@/stores/auth/slice";
import { Box, Text } from "@chakra-ui/react";
import Items from "./items";
import { NavsAdmin } from "./navs-comp";

const ContainerNavAdmin = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      {NavsAdmin.map((item, index) => {
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
export default ContainerNavAdmin;
