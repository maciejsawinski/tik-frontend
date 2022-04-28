import dynamic from "next/dynamic";
import { Box, Flex, Image, HStack, useColorModeValue } from "@chakra-ui/react";

const Map = dynamic(() => import("./Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const Alerts = ({ alerts }) => {
  let constructionCount = 0;
  let accidentCount = 0;
  let otherCount = 0;
  alerts.forEach((alert) => {
    if (alert.typ === "U") {
      constructionCount++;
    }
    if (alert.typ === "W") {
      accidentCount++;
    }
    if (alert.typ === "I") {
      otherCount++;
    }
  });

  return (
    <Flex position="relative">
      <HStack height="100vh" width="100vw" justify="space-around">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          height="85vh"
          width="82vw"
          rounded="lg"
          shadow="dark-lg"
          position="relative"
        >
          <Map alerts={alerts} />
        </Box>
        <Flex direction="column" height="85vh" justify="space-between">
          <Flex direction="column" gap={5}>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              width="15vw"
              rounded="lg"
              shadow="dark-lg"
            >
              <HStack display="flex" justify="space-between" ml={1} mr={8}>
                <Flex fontSize="9xl" color="#ff3333">
                  <span className="icon-crash"></span>
                </Flex>
                <Flex fontWeight="bold" fontSize="8xl">
                  {accidentCount}
                </Flex>
              </HStack>
            </Box>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              width="15vw"
              rounded="lg"
              shadow="dark-lg"
              fontSize="8xl"
            >
              <HStack display="flex" justify="space-between" mx={7}>
                <Flex color="#8962FF">
                  <span className="icon-construction"></span>
                </Flex>
                <Flex fontWeight="bold">{constructionCount}</Flex>
              </HStack>
            </Box>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              width="15vw"
              rounded="lg"
              shadow="dark-lg"
              fontSize="8xl"
            >
              <HStack display="flex" justify="space-between" mx={7}>
                <Flex color="#8962FF">
                  <span className="icon-cone"></span>
                </Flex>
                <Flex fontWeight="bold">{otherCount}</Flex>
              </HStack>
            </Box>
          </Flex>
          <Flex>
            <Box
              bg={useColorModeValue("white", "gray.800")}
              width="15vw"
              rounded="lg"
              shadow="dark-lg"
              p={2}
            >
              <Image src="/gddkia.png" alt="gddkia" />
              <Image src="/qr.png" alt="gddkia-qr" />
            </Box>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Alerts;
