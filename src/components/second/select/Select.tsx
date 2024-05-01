'use client'
import { useEffect, useState } from "react";
import {
  Select, SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ISelectCard {
  array: string[]
  currentValue: string;
  placeholder: string
  handleChange: (value: string) => void
}



export default function SelectCard({placeholder,  array, currentValue, handleChange }: ISelectCard) {
  
  return (
    <Select value={currentValue} onValueChange={handleChange}>
      <SelectTrigger className="w-full border-2 border-gray-300 rounded shadow-inner text-slate-300 font-medium select">
        <SelectValue  placeholder={placeholder}>
        {currentValue === placeholder ? placeholder : currentValue}
        </SelectValue>
      </SelectTrigger>
      <SelectContent style={{ backgroundColor: 'white'}}>
        <SelectGroup >
        
          {array.map((el) => (
            <SelectItem key={el} value={el}>
              {el}
              
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
