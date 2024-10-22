import { Box, Image, Text } from "@chakra-ui/react";
import logo2 from "@/assets/Frame@3x.svg";

export function Profile() {
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      flexDirection={"row"}
      margin={"50px 0px 0px 50px"}
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
      <Box paddingLeft={"55px"}>
        <Box
          color={"brand.orange"}
          fontSize={"30px"}
          fontWeight={"bold"}
          paddingBottom={"20px"}
        >
          <Text>My Transaction</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          border={"1px solid traparent"}
          borderRadius={"10px"}
          padding={"10px"}
          w={"600px"}
          bgColor={"brand.background3"}
        >
          <Box>
            <Image
              w={"200px"}
              h={"200px"}
              objectFit={"cover"}
              src="https://picsum.photos/200"
            />
          </Box>
          <Box
            paddingLeft={"20px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box>
              <Text
                fontWeight={"bold"}
                color={"brand.orange"}
                fontSize={"25px"}
              >
                Mouse
              </Text>
              <Text fontWeight={"bold"} color={"brand.orange"} fontSize={"11"}>
                Monday,{" "}
                <Text as={"span"} fontWeight={"normal"}>
                  22 June 2022
                </Text>
              </Text>
              <Text paddingTop={"20px"}>Price : Rp.500.000</Text>
            </Box>

            <Box>
              <Text>Sub Total : Rp.500.000</Text>
            </Box>
          </Box>
          <Box alignContent={"center"} paddingLeft={"80px"}>
            <Image src={logo2} alt="logo" w={"90px"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
