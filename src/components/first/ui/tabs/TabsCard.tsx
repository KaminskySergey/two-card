'use client'
import * as Tabs from '@radix-ui/react-tabs';
import { Box, Button, Text } from '@radix-ui/themes';
import { useState } from 'react'
interface ITabsCard { }
const tabInfo = {
    description: "The KAWS OPEN EDITION COMPANION VINYL METAL is a highly sought-after collectible figure. Made from high-quality vinyl and metal materials, it features the iconic Companion character designed by the renowned artist KAWS. This limited edition release is a must-have for collectors and art enthusiasts alike.",
    details: "This collectible figure stands at approximately 8 inches tall and comes packaged in a beautifully designed box. Each piece is individually numbered, adding to its exclusivity and value. The figure showcases meticulous attention to detail, capturing the essence of KAWS' distinctive style.",
    shipping: "Shipping for the KAWS OPEN EDITION COMPANION VINYL METAL is available worldwide. We offer fast and reliable shipping options to ensure that your collectible arrives safely and securely. Please provide accurate shipping information during checkout to avoid any delays.",
    reviews: "Customers who have purchased the KAWS OPEN EDITION COMPANION VINYL METAL have praised its exceptional quality and attention to detail. Many collectors have expressed their satisfaction with the product, noting its value as a centerpiece in their collections. Read reviews from our satisfied customers to learn more about their experiences."
  };
  const TabsCard = () => {
   
    const [currentTab, setCurrentTab] = useState('description');
    const [readMore, setReadMore] = useState(false);
  
    const handleChange = (tab: string) => {
      setCurrentTab(tab);
    };
  
    const toggleReadMore = () => {
      setReadMore(!readMore);
    };
  
    return (
      <Tabs.Root defaultValue="description">
        <Tabs.List className='flex gap-5 font-medium text-black'>
          {Object.keys(tabInfo).map((tab) => (
            <Tabs.Trigger
              key={tab}
              value={tab}
              onClick={() => handleChange(tab)}
              className={`uppercase ${
                currentTab === tab ? 'border-b-2' : ''
              }  pb-1 border-gray-300`}
            >
              {tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
  
        <Box pt="3">
          {Object.entries(tabInfo).map(([tab, info]) => (
            <Tabs.Content key={tab} value={tab}>
              <Text size="2" className='text-gray-500'>
                {readMore ? info : `${info.substring(0, 150)}...`}
                {info.length > 50 && (
                  <Text onClick={toggleReadMore} className=' pl-2 font-medium underline cursor-pointer text-black'>
                    {readMore ? 'Showless' : 'Readmore'}
                  </Text>
                )}
              </Text>
            </Tabs.Content>
          ))}
        </Box>
      </Tabs.Root>
    );
  };
  
  export default TabsCard;