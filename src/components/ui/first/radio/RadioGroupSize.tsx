'use client'
import cn from 'classnames';
import React, { useState } from 'react';
import { Flex, Radio, Text, Box } from '@radix-ui/themes';
interface IRadioGroupSize {}

const sizes = ['8', '28', '48', '70', '160']

export default function RadioGroupSize({}: IRadioGroupSize) {
    const [size, setSize] = useState('8')
console.log(size)
const handleChange = (size: string) => {
    setSize(size)
}
    return (
        <>
        <Box>
        <Text color="gray" size="2">Size</Text>
        </Box>
        <Flex gap="4">
    {
      sizes.map(sizeOptions => (
        <Flex key={sizeOptions} asChild gap="2" position="relative" width='86px' height='45px'>
        <Text as="label" size="2">
          <Radio name={sizeOptions} value={sizeOptions} onClick={() => handleChange(sizeOptions)} defaultChecked />
          <div 
        className={cn(
            'absolute border-solid border-black rounded-md border-2 flex items-center justify-center top-0 left-0 z-10 w-full h-full bg-white pointer-events-none',
            { 'text-white bg-black': size === sizeOptions }
        )}
    >
        <Text weight='bold' className={cn({ 'text-white': size === sizeOptions })}>
            {sizeOptions}
        </Text>
    </div>
        </Text>
      </Flex>
      ))
    }
</Flex>
        </>
    )
}
