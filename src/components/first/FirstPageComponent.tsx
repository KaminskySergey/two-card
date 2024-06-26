'use client'
import ButtonCard from "@/components/first/ui/button/ButtonCard";
import RadioGroupColor from "@/components/first/ui/radio/RadioGroupColor";
import RadioGroupSize from "@/components/first/ui/radio/RadioGroupSize";
import SwiperCard from "@/components/first/ui/swiper/SwiperCard";
import TabsCard from "@/components/first/ui/tabs/TabsCard";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
interface IFirstPageComponent {}

export default function FirstPageComponent({}: IFirstPageComponent) {
    return <>
    <Link href={'/second'} className="text-[18px]  font-semibold text-blue-500 ml-[16px] underline hover:text-blue-700">Go to Second Card</Link>
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-[#EAEFF4]">
    <Container size="3">
      <Flex gap="8">
        <Box width="50%">
          <SwiperCard />
        </Box>
        <Box width="50%">
          <Flex direction="column" gap="6">
            <Flex direction="column" gap="4">
              <Text color="gray" size="2">Accessories</Text>
              <Heading as="h2" color="gray" className="uppercase">kaws open edition companion vinyl metal</Heading>
            </Flex>
            
            <Flex display='flex' gap='4' className="items-end">
              <Text color="gray" size="6" weight='bold'>2 750$</Text>
              <Text size="4" weight='bold' className="line-through text-[#94999F]">3 000$</Text>
            </Flex>

            <Flex>
              <RadioGroupColor/>
             
            </Flex>

            <Flex display="flex" gap='1' direction="column">
              <RadioGroupSize />
            </Flex>

            <Flex display="flex" gap='1' direction="column">
              <TabsCard />
            </Flex>
            
            <Flex display="flex" gap='1' direction="column">
              <ButtonCard />
            </Flex>

            
          </Flex>
        </Box>
      </Flex>
    </Container>
  </main>
    </>
}
