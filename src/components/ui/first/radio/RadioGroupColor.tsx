'use client'
import React, { useState } from 'react';

import { Flex, Radio, Text } from '@radix-ui/themes';

const colors = ['blue', 'red', 'yellow', 'purple', 'green']

const RadioGroupColor = () => {
  const [color, setColor] = useState('blue')
console.log(color)
const handleChange = (color: string) => {
  setColor(color)
}


  return (
    <Flex gap="4">
      {
        colors.map(colorOptions => (
          <Flex key={colorOptions} asChild gap="2" position="relative" width='32px' height='32px'>
          <Text as="label" size="2">
            <Radio name={colorOptions} value={colorOptions} onClick={() => handleChange(colorOptions)} defaultChecked />
            <div style={{backgroundColor: colorOptions}} className={`absolute flex rounded-md top-0 left-0 z-10 w-[32px] h-[32px] bg-${colorOptions}-500 pointer-events-none`}>
            {color === colorOptions && (
                    <svg className='items-center justify-center' width="32" height="32" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  )}
        </div>
          </Text>
        </Flex>
        ))
      }
</Flex>
  )
};

export default RadioGroupColor;