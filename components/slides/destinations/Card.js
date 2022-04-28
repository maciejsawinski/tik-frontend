import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Fade,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import humanReadableTime from "../../../utils/humanReadableTime";
import timeout from "../../../utils/timeout";

const Card = ({ destination }) => {
  // logic for warning colors and icons
  let iconColor, backgroundColor, warningIcon;
  if (
    destination.durationInTraffic >=
    destination.duration + destination.duration * 0.15
  ) {
    warningIcon = (
      <Flex
        position="absolute"
        top={2}
        right={2}
        fontSize="7xl"
        color="#ff0000"
      >
        <span className="icon-warning"></span>
      </Flex>
    );
    iconColor = "#ff0000";
    backgroundColor = "#ffcccc";
  } else {
    warningIcon = null;
    iconColor = "#8962FF";

    // eslint-disable-next-line react-hooks/rules-of-hooks
    backgroundColor = useColorModeValue("white", "gray.800");
  }

  // texts
  const durationTextCarPl = humanReadableTime(
    destination.durationInTraffic,
    "pl"
  );
  const durationTextCarEng = humanReadableTime(destination.durationInTraffic);
  const durationTextTruckPl = humanReadableTime(
    destination.durationInTraffic + destination.durationInTraffic / 2,
    "pl"
  );
  const durationTextTruckEng = humanReadableTime(
    destination.durationInTraffic + destination.durationInTraffic / 2
  );

  const [activeDurationTextCar, setActiveDurationTextCar] =
    useState(durationTextCarPl);
  const [activeDurationTextTruck, setActiveDurationTextTruck] =
    useState(durationTextTruckPl);
  const [showDurationText, setShowDurationText] = useState(true);

  // logic for changing texts
  useEffect(() => {
    const interval = setInterval(async () => {
      setShowDurationText(false);
      await timeout(500);

      if (activeDurationTextCar === durationTextCarPl) {
        setActiveDurationTextCar(durationTextCarEng);
        setActiveDurationTextTruck(durationTextTruckEng);
      } else {
        setActiveDurationTextCar(durationTextCarPl);
        setActiveDurationTextTruck(durationTextTruckPl);
      }

      setShowDurationText(true);
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDurationTextCar]);

  return (
    <Box
      bg={backgroundColor}
      maxW="30vw"
      rounded="lg"
      shadow="dark-lg"
      position="relative"
    >
      <Flex position="absolute" top={2} left={2} fontSize="7xl" color="#8962FF">
        <span className="icon-map-point"></span>
      </Flex>
      {warningIcon}
      <Box p="5">
        <Flex mt="4" mb="4" alignContent="center" flexDirection="column">
          <Center
            minHeight="14rem"
            align="center"
            fontSize="7xl"
            fontWeight="bold"
            as="h1"
          >
            {destination.name}
          </Center>
        </Flex>
      </Box>
      <Image
        src={destination.imgSrc}
        fallbackSrc="/highway.jpg"
        alt="destination"
        objectFit="cover"
      />
      <Box p="5">
        <Flex mt="4" mb="4" alignContent="center" flexDirection="column">
          <Box>
            <HStack fontSize="6xl" fontWeight="semibold" as="h2">
              <Flex color={iconColor} fontSize="7xl">
                <span className="icon-car"></span>
              </Flex>
              <Fade in={showDurationText}>
                <Text>{activeDurationTextCar}</Text>
              </Fade>
            </HStack>
            <HStack fontSize="6xl" fontWeight="semibold" as="h2">
              <Flex color={iconColor} fontSize="7xl">
                <span className="icon-truck"></span>
              </Flex>
              <Fade in={showDurationText}>
                <Text>{activeDurationTextTruck}</Text>
              </Fade>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
