'use client'
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from "next/image";
interface ISwiper { }

export default function SwiperCard({ }: ISwiper) {
  return <>
    <Swiper
      spaceBetween={10}
      navigation={true}

      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2"
    >
      <SwiperSlide>
        <div className="relative w-[440px] h-[420px]">

          <Image className="rounded-lg" fill src="/kaws.jpg" alt="nature-1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[440px] h-[420px]">

          <Image className="rounded-lg" fill src="/kaws.jpg" alt="nature-2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[440px] h-[420px]">

          <Image className="rounded-lg" fill src="/kaws.jpg" alt="nature-3" />
        </div>
      </SwiperSlide>
      

    </Swiper>
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative w-[120px] h-[120px] ">

          <Image className="rounded-lg" fill src="/kaws.jpg" alt="nature-1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[120px] h-[120px]">

          <Image className="rounded-lg" fill src="/kaws.jpg" alt="nature-2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[120px] h-[120px]">

          <Image className="rounded-lg" fill src="/kaws.jpg" alt="nature-3" />
        </div>
      </SwiperSlide>
      

    </Swiper>
  </>
}
