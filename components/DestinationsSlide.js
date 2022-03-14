import { Box, Flex, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import DestinationsBox from "./DestinationBox";

const DestinationsSlide = ({ destinations }) => {
  return (
    <Flex position="relative">
      <HStack height="100vh" width="100vw" justify="space-around">
        {destinations.map((destination, i) => {
          return <DestinationsBox key={i} destination={destination} />;
        })}
      </HStack>
      <Box
        position="absolute"
        bottom={2}
        right={2}
        p="5"
        rounded="lg"
        shadow="dark-lg"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Image src="/google.png" alt="google" />
      </Box>
    </Flex>
  );
};

export default DestinationsSlide;
