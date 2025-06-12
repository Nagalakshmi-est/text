import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ServiceDetails from '../ServiceTabs/ServiceDetails';
import DocStaff from '../ServiceTabs/DocStaff';
import GalleryTab from '../ServiceTabs/GalleryTab';
import Reviews from '../ServiceTabs/Reviews';
import AboutUs from '../ServiceTabs/AboutUs';
import ContainerWrapper from './ContainerWraper';

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState('services');

    const tabs = [
        { label: 'Services', value: 'services' },
        { label: 'Doc & Staff', value: 'doc' },
        { label: 'Gallery', value: 'gallery' },
        { label: 'Reviews', value: 'reviews' },
        { label: 'About Us', value: 'about' },
    ];

    return (
        <>
            <Box bg="white" px="20px" py="10px" boxShadow='md' mt='20px' >
                <nav>
                    <Flex gap="24px">
                        {tabs.map((tab) => (
                            <Box
                                key={tab.value}
                                cursor="pointer"
                                position="relative"
                                pb="4px"
                                onClick={() => setActiveTab(tab.value)}
                            >
                                <Text
                                    fontWeight={activeTab === tab.value ? 'bold' : 'normal'}
                                    color={activeTab === tab.value ? 'black' : 'gray.500'}
                                >
                                    {tab.label}
                                </Text>
                                {activeTab === tab.value && (
                                    <Box
                                        position="absolute"
                                        bottom="0"
                                        left="0"
                                        width="40px"
                                        height="4px"
                                        borderRadius="12px"
                                        style={{
                                            background: 'linear-gradient(to right, #5e4325, #c1a15f)',
                                        }}

                                    />
                                )}
                            </Box>
                        ))}
                    </Flex>
                </nav>
            </Box>

            <Box p="20px">
                {activeTab === 'services' && <div ><ServiceDetails /></div>}
                {activeTab === 'doc' && <div><DocStaff /> </div>}
                {activeTab === 'gallery' && <div> <GalleryTab /> </div>}
                {activeTab === 'reviews' && <div>  <Reviews /> </div>}
                {activeTab === 'about' && <div> <AboutUs /> </div>}
            </Box>
        </>
    );
};

export default TabNavigation;
