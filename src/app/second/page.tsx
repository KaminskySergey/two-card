import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import SwiperCard from "../components/ui/first/swiper/SwiperCard";
import RadioGroupColor from "../components/ui/first/radio/RadioGroupColor";
import RadioGroupSize from "../components/ui/first/radio/RadioGroupSize";
import TabsCard from "../components/ui/first/tabs/TabsCard";
import ButtonCard from "../components/ui/first/button/ButtonCard";

export default function SecondPage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-[#EAEFF4]">
      <Container size="3">
        <Flex gap="8">
          <Box width="50%">
            <SwiperCard />
          </Box>
          <Box width="50%">
            <Flex direction="column" gap="6">
              <Flex direction="column" gap="2">
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
  );
}