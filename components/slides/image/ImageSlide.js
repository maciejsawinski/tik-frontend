import { Image } from "@chakra-ui/react";

const ImageSlide = ({ src }) => {
  return (
    <Image
      src={src}
      fallbackSrc="/highway.jpg"
      alt="kiosk img"
      htmlWidth={1920}
      htmlHeight={1080}
    />
  );
};

export default ImageSlide;
