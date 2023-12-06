import React from "react";
import { useSwiper } from "swiper/react";
import carouselNavLeft from "../../../../assest/carouselLeft.svg";
import "./CarouselLeft.css"

export default function CarouselLeft() {
  const swiper = useSwiper();

  return (
    <div className="carousel-left-container">
      <img
        src={carouselNavLeft}
        alt="carouselLeftImage"
        onClick={() => swiper.slidePrev()}
      />
    </div>
  );
}
