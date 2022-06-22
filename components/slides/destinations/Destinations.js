import { Box, Flex, HStack, Image, useColorModeValue } from "@chakra-ui/react";

import Card from "./Card";

const Destinations = ({ destinations, lang }) => {
  return (
    <Flex position="relative">
      <HStack height="100vh" width="100vw" justify="space-around">
        {destinations.map((destination, i) => {
          return <Card key={i} destination={destination} lang={lang} />;
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

export default Destinations;
