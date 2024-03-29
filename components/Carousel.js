import { useState, useEffect } from "react";
import { Flex, SlideFade } from "@chakra-ui/react";

import ImageSlide from "./slides/image/ImageSlide";
import Alerts from "./slides/alerts/Alerts";
import Destinations from "./slides/destinations/Destinations";

const Carousel = ({ slides, alerts, destinations }) => {
  const [activeItem, setActiveItem] = useState(0);

  const changeActiveItem = () => {
    const slidesLength = slides.length;

    if (activeItem === slidesLength - 1) {
      setActiveItem(0);
    } else {
      setActiveItem(activeItem + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeActiveItem();
    }, slides[activeItem].duration);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  // workoround for the bug in framer-motion
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) {
    return null;
  }

  return (
    <div>
      {slides.map((slide, i) => {
        let slideComponent;
        switch (slide.name) {
          case "img":
            slideComponent = <ImageSlide src={slide.src} />;
            break;
          case "alerts":
            slideComponent = <Alerts alerts={alerts} />;
            break;
          case "destinations":
            slideComponent = (
              <Destinations destinations={destinations} lang="pl" />
            );
            break;
          case "destinations_en":
            slideComponent = (
              <Destinations destinations={destinations} lang="en" />
            );
            break;
          default:
            break;
        }
        return (
          <Flex
            key={i}
            height="100vh"
            width="100vw"
            position="fixed"
            zIndex={i === activeItem ? 1 : -1}
          >
            {slideComponent}
          </Flex>
        );
      })}
    </div>
  );
};

export default Carousel;
