import Image from "next/image";

const ImageSlide = ({ src }) => {
  return <Image src={src} alt="kiosk img" width={1920} height={1080} />;
};

export default ImageSlide;
