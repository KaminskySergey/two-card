'use client'

import { useState } from "react"
import Price from "./price/Price"
import RadioColor from "./radio/RadioColor"
import SelectCard from "./select/Select"
import Slider from "./slider/Slider"
import Title from "./title/Title"

interface ISecondPageComponent { }
import { EmblaOptionsType } from "embla-carousel";
import AccordionInformation from "./accordion/AccordionInformation"
import QuantitySelector from "./quantity/QuantitySelector"
import Link from "next/link"

const OPTIONS: EmblaOptionsType = {}
const SLIDES = [{
    image: '/bang1.jpg'
},
{
    image: '/bang2.jpg'
},
{
    image: '/bang3.jpg'
},
{
    image: '/bang4.jpg'
},
{
    image: '/bang5.jpg'
},
]
const sizes = ['small', 'medium', 'big']
const colors = ['blue', 'red', 'yellow', 'gray', 'purple', 'green' ]

export default function SecondPageComponent({ }: ISecondPageComponent) {
    const [currentColor, setCurrentColor] = useState('Color');
    const [currentSize, setCurrentSize] = useState('Size');

    const handleChangeColor = (color: string) => {
        setCurrentColor(color);
    };

    const handleChangeSize = (size: string) => {
        setCurrentSize(size);
    };

    return (
       <>
        <Link href={'/'} className="text-[18px] font-semibold text-blue-500 ml-[16px] underline hover:text-blue-700">Go to First Card</Link>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-white">
            <div className="flex gap-11 w-[70%]">
                <div className="w-[50%]">
                    <Slider slides={SLIDES} options={OPTIONS} />
                </div>
                <div className="w-[50%] flex flex-col gap-4 pt-[12px] pr-[24px]">
                    <div>
                        <Title />
                    </div>
                    <div>
                        <RadioColor array={colors} handleChangeColor={handleChangeColor} currentColor={currentColor} />
                    </div>
                    <div>
                        <Price />
                    </div>
                    <div className="flex gap-3">
                        <div className="w-[50%]"><SelectCard placeholder={"Size"} array={sizes} handleChange={handleChangeSize} currentValue={currentSize}/></div>
                        <div className="w-[50%]"><SelectCard placeholder={"Color"} handleChange={handleChangeColor} array={colors} currentValue={currentColor} /></div>
                    </div>
                    <div>
                        <AccordionInformation />
                    </div>
                    <div>
                        <QuantitySelector />
                    </div>
                </div>
            </div>
        </main>
       </>
    );
}