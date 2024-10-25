import {
  Box,
  FormLabel,
  Image,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SelectField,
  Text,
  Textarea,
} from "@chakra-ui/react";

export function EditProfile() {
  return (
    <Box
      h={"100%"}
      w={"100%"}
      display={"flex"}
      flexDirection={"row"}
      padding={"50px"}
    >
      <Box>
        <Text
          color={"brand.orange"}
          fontSize={"30px"}
          fontWeight={"bold"}
          paddingBottom={"20px"}
        >
          My Profile
        </Text>
        <Image
          h={"400px"}
          w={"300px"}
          objectFit={"fill"}
          src="https://picsum.photos/200"
          alt="profile"
        />
      </Box>

      <Box paddingLeft={"50px"} fontSize={"17px"} w={"400px"}>
        <Box paddingTop={"60px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Name
          </Text>
          <Input placeholder="Name" />
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Email
          </Text>
          <Input placeholder="Email" />
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Phone
          </Text>
          <Input placeholder="Phone" />
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Gender
          </Text>
          <Select placeholder="Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="DemiGod">DemiGod</option>
          </Select>
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Addres
          </Text>
          <Input as={Textarea} placeholder="Addres" />
        </Box>
      </Box>
    </Box>
  );
}
