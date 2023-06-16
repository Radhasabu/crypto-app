import { Image, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import profile from "../assets/photo.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Want to know more about the top cryptocurrency so you can buy the best crypto in 2023? So here is best crypto trading application to help you in finding the right crypto.
          </Text>
        </VStack>

        <VStack>
          <Image
            src={profile}
            width="120px"
            height="120px"
            borderRadius="50%"
          />
          <Text>Radhika</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;