'use client'
import { useState } from "react"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { cn } from "@/lib/utils"

interface IRadioColor { 
    array: string[]
    currentColor: string
    handleChangeColor: (value: string) => void
}



export default function RadioColor({ array, currentColor, handleChangeColor }: IRadioColor) {
    return (
        <RadioGroup defaultValue={currentColor} className="flex gap-6 ">
            {array.map((arrayOption) => (
                <div key={arrayOption} className="relative">
                    <div
                        style={{ border: currentColor === arrayOption ? `2px solid ${arrayOption}` : 'none' }}
                        className="rounded-full p-1 bg-transparent inset-0 opacity-50"
                    >
                        <div
                            style={{ backgroundColor: arrayOption }}
                            className={`flex w-5 h-5 items-center bg-${arrayOption}-500 rounded-full`}
                        >
                            <RadioGroupItem
                                onClick={() => handleChangeColor(arrayOption)}
                                className="opacity-0 w-8 h-8"
                                value={arrayOption}
                                id={arrayOption}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </RadioGroup>
    );
}

// export default function RadioColor({ }: IRadioColor) {
//     const [color, setColor] = useState('blue')
//     console.log(color)
//     const handleChange = (color: string) => {
//         setColor(color)
//     }
//     return <RadioGroup defaultValue={color} className="flex gap-6">
//         {
//             array.map(arrayOption => (
//                 <div style={{ border: color === arrayOption ? `2px solid ${arrayOption}` : 'none' }} key={arrayOption}  className='rounded-full p-1 bg-transparent inset-0 opacity-50'>
//                     <div style={{ backgroundColor: arrayOption }} key={arrayOption} className={`flex relative items-center bg-${arrayOption}-500 rounded-full `}>
//                         <RadioGroupItem onClick={() => handleChange(arrayOption)} className="opacity-0 w-8 h-8" value={arrayOption} id={arrayOption} />

//                     </div>
//                 </div>
//             ))
//         }

//     </RadioGroup>
// }
