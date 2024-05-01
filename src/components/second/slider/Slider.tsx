'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Thumb } from "./Thumb"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './slider.module.css'
import Image from 'next/image'

interface ISlides {
  image: string;
}
interface ISlider {
  slides: ISlides[]
  options: any
}

export default function Slider({slides, options}: ISlider) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
      containScroll: 'keepSnaps',
      dragFree: true
    })
  
    const onThumbClick = useCallback(
      (index: number) => {
        if (!emblaMainApi || !emblaThumbsApi) return
        emblaMainApi.scrollTo(index)
      },
      [emblaMainApi, emblaThumbsApi]
    )
  
    const onSelect = useCallback(() => {
      if (!emblaMainApi || !emblaThumbsApi) return
      setSelectedIndex(emblaMainApi.selectedScrollSnap())
      emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])
  
    useEffect(() => {
      if (!emblaMainApi) return
      onSelect()
      emblaMainApi.on('select', onSelect)
      emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])
  
    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((el, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number relative">
                    <Image src={el.image} fill alt={el.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {slides.map((el, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={el.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
