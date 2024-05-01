'use client'

import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import { Button, Flex } from "@radix-ui/themes"
interface IButtonCard { }

export default function ButtonCard({ }: IButtonCard) {
    return <Flex display='flex' gap='4'>
        <button type="button" className="button buttonAddToBag">
            <FaCartShopping color="white"/>
      Add To Bag
    </button>

    <button type="button" className="button favorives ">
      <CiHeart width={32} height={32}/> Favorives
    </button>
    </Flex>
}
