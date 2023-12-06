import React from 'react'
import { useSwiper } from 'swiper/react';
import carouselNavRight from "../../../../assest/carouselRight.svg"
import "./CarouselRight.css"

export default function CarouselRight() {
    const swiper = useSwiper();
  return (
    <div className='carousel-right-container'>
        <img src={carouselNavRight} alt="carouselNavRight" onClick={() => swiper.slideNext()}/>
    </div>
  )
}
