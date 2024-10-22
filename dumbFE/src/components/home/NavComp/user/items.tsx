import { NavLink } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  path: string;
  name: string;
  color: {
    inactive: string;
    active: string;
  };
}

const Items: React.FC<Props> = ({ path, name, color }) => {
  return (
    <NavLink to={path} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Box
          className={`left-bar-icons ${isActive ? "active" : ""}`}
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: "gray.700",
          }}
          color={isActive ? color.active : color.inactive}
        >
          <Text fontWeight="500" fontSize="1.2rem">
            {name}
          </Text>
        </Box>
      )}
    </NavLink>
  );
};

export default Items;
