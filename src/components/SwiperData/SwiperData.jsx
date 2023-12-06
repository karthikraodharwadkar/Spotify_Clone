import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeft from './Carousels/CarouselLeft/CarouselLeft';
import CarouselRight from './Carousels/CarouselRight/CarouselRight';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./SwiperData.css"

export default function SwiperData({data,component}) {
  return (
    <div className="swiper-container">
      <Swiper
        style={{padding:"0px 40px",position:"relative"}}
         spaceBetween={40}
        // slidesPerView={7}
        modules={[Navigation]}
        className='swiper-css'
        breakpoints={{
            360: {
                slidesPerView: 2,
                spaceBetween: 10,  
            },
            768:{
                slidesPerView: 7,
                spaceBetween: 40,
            }
        }}
      >
        <CarouselLeft/>
        <CarouselRight/>
        {data.map((item,index)=>{
            return(
                <SwiperSlide key={index} style={{width:"160px"}}>{component(item)}</SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  )
}

