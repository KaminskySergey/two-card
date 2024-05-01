'use client'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


import { useSwiper } from "swiper/react"

interface ISwiperBtn {}


export default function SwiperBtn({}: ISwiperBtn) {
    const swiper = useSwiper()
    return (
        <>
      <button className="swiper-btn-left" onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack  size={24}/>
      </button>
      <button className="swiper-btn-right" onClick={() => swiper.slideNext()}>
        <IoIosArrowForward  size={24}/>
      </button>
    </>
    )
}
