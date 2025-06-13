import React from 'react'
import Navbar from './Navbar'
import {
    Image, Box, HStack, Text, VStack, InputGroup, Input, Button,
    Spacer,
    Stack
} from '@chakra-ui/react'
import CosmoticImg from '../Images/Cosmotic.png'
import CosmoticHalf from '../Images/CosmoticHalf.png'
import logo from '../Images/logo.png'
import MapPin from '../Images/map-pin.png'
import LocationPng from '../Images/location.png'
import star from '../Images/Star.png'
import UseCode from '../Images/UseCode.png'
import { LuSearch } from "react-icons/lu"
import { Accordion, Span } from "@chakra-ui/react"
import { Tabs } from "@chakra-ui/react"
import { PiDotOutlineFill } from "react-icons/pi";
import GirlIcon from '../Images/Girlicon.png'
import ServiceDetails from './ServiceTabs/ServiceDetails'
import DocStaff from './ServiceTabs/DocStaff'
import GalleryTab from './ServiceTabs/GalleryTab'
import Reviews from './ServiceTabs/Reviews'
import AboutUs from './ServiceTabs/AboutUs'
import ImageCarousel from './ContainerWraper/ImageCarousel'
import ContainerWrapper from './ContainerWraper/ContainerWraper'

import slide1 from '../Images/Cosmotic.png'
import slide2 from '../Images/Cosmotic.png'
import slide3 from '../Images/Cosmotic.png'
import OfferCarousel from './ContainerWraper/OfferCarousel'
import TabNavigation from './ContainerWraper/TabNavigation'
import CardCarousel from './ContainerWraper/CardCarousel'


const images = [slide1, slide2, slide3];

const SpaDetails = () => {
    return (
        <>
            <Navbar />

            <ContainerWrapper>
                <Box  >
                    <Box mt='80px'>

                        <ImageCarousel images={images} />

                    </Box>
                    <Box mt='20px' bg='White' borderRadius='3xl' p='20px' boxShadow="md" >
                        <VStack align='flex-start'>
                            <HStack>
                                <Image src={logo} borderRadius='full' height='70px' width='70px' />

                                <VStack ml='-30px'>

                                    <Text fontSize='3xl' fontWeight='bold ' ml='10px'>  Oasis Spa Haven</Text>
                                    <HStack> <Image src={MapPin} height='26px' ml='40px' />
                                        <Text ml='-5px'>Madhapur</Text>
                                        <Image src={LocationPng} height='23px' ml='20px' />

                                        <Text ml='-5px'>3.5Km</Text>
                                        <Image src={star} height='20px' ml='20px' />

                                        <Text ml='-5px'>4.5</Text></HStack>

                                </VStack>


                            </HStack>
                            <Box borderBottom="2px dashed  #d3d3d3" width="100%" my={4} />


                            {/* <CardCarousel /> */}

                            <OfferCarousel />
                            {/* <SlickCarousel /> */}
                        </VStack>
                    </Box>


                    <TabNavigation />
                </Box>

            </ContainerWrapper>
        </>
    )
}

export default SpaDetails