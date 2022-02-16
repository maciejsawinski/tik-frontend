import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageSlide from "./ImageSlide";

import styles from "../styles/Kiosk.module.css";

const Carousel = ({ slides }) => {
  const [slideInterval, setSlideInterval] = useState(slides[0].duration);

  const beforeSlideChange = (_, newIndex) => {
    setSlideInterval(slides[newIndex].duration);
  };

  const settings = {
    arrows: false,
    dots: false,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: slideInterval,
    beforeChange: beforeSlideChange,
  };

  return (
    <Slider className={styles.container} {...settings}>
      {slides.map((slide, i) => {
        switch (slide.name) {
          case "img":
            return <ImageSlide key={i} src={slide.src} />;
          case "alerts":
            return <div key={i}>alerts</div>;
          case "destinations":
            return <div key={i}>destinations</div>;
          default:
            return;
        }
      })}
    </Slider>
  );
};

export default Carousel;
