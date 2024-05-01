'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
interface IAccordionInformation {}

export default function AccordionInformation({}: IAccordionInformation) {
    return <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger> Shipping information</AccordionTrigger>
      <AccordionContent>
      The Bang & Olufsen Beosound A1 2nd Gen Portable Bluetooth Speaker comes with a beautiful, iconic design, features a straightforward control interface, and delivers clear and powerful sound, letting you easily enjoy your favourite music at home, the office, or when on the go.
           </AccordionContent>
    </AccordionItem>
  </Accordion>
}
