'use client'

import { useState } from "react";
import BtnAddToCart from "../button/BtnAddToCart";

interface IQuantitySelector { }

export default function QuantitySelector({ }: IQuantitySelector) {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(pS => pS + 1);

    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(pS => pS - 1);
        }
    };

    return (
        <div className="flex gap-3">
            <div className="flex gap-3 items-center w-[50%]">
            <div className="w-[50%]">
              <p className="text-[12px] font-medium text-black">Quantity (pieces)</p>
            </div>
            <div style={{borderRadius: '10px'}} className="relative  overflow-hidden  border border-gray-300 flex items-center w-[50%] ">
                <button type="button" onClick={handleDecrement} className="bg-white flex items-center justify-center w-[40px]  dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  rounded-s-lg  h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-black  dark:text-white"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                </button>
                <input type="text" className="bg-gray-50 font-semibold text-black border border-x-gray-300 w-[34px] h-11 text-center  text-sm focus:ring-blue-500 focus:border-blue-500 block  py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  readOnly  placeholder={`${quantity}`} value={quantity} required />
                <button type="button" onClick={handleIncrement} className="bg-white flex items-center justify-center w-[40px] dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  rounded-e-lg  h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-black dark:text-white"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div>
            </div>
            <div className="w-[50%]">
                <BtnAddToCart />
            </div>
        </div>
    );
}
