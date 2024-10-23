import { Box, Image, Text } from "@chakra-ui/react";
import logo2 from "@/assets/Frame@3x.svg";
import { MyTransaction } from "./myTransaction";

export function Profile() {
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
          <Text>Jarwo</Text>
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Email
          </Text>
          <Text>jarwo@gmail.com</Text>
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Phone
          </Text>
          <Text>085444222111</Text>
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Gender
          </Text>
          <Text>Transgender</Text>
        </Box>
        <Box paddingTop={"15px"}>
          <Text fontWeight={"bold"} color={"brand.orange"}>
            Addres
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            sint voluptas, repellat aspernatur dolorem impedit atque reiciendis
            facere expedita excepturi suscipit aliquam repudiandae ipsam
            repellendus at maiores nesciunt, perspiciatis ad?
          </Text>
        </Box>
      </Box>
      <Box paddingLeft={"400px"} w={"70%"}>
        <Box
          color={"brand.orange"}
          fontSize={"30px"}
          fontWeight={"bold"}
          paddingBottom={"20px"}
        >
          <Text>My Transaction</Text>
        </Box>
        <MyTransaction />
      </Box>
    </Box>
  );
}
