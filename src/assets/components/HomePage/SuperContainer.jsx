import React from "react";

import { Box, Flex, HStack, Text, Spacer, Input, Stack } from "@chakra-ui/react"

import BeautyCards from "./BeautyCards";

import ContainerWrapper from "../ContainerWraper/ContainerWraper";
import ImageCarousel from '../ContainerWraper/ImageCarousel';
import { FaArrowRightLong } from "react-icons/fa6";

import "./superContainer.css"

import slide1 from "../../Images/Banner.png";
import slide2 from "../../Images/Group.png";
import slide3 from "../../Images/Group.png";
const images = [slide1, slide2, slide3];


const SuperContainer = () => (
    <div className="super-container">
        <ContainerWrapper>
            <Box mt={10} className="laptop">
                <ImageCarousel images={images} />
            </Box>
            <HStack w="100%" mx="auto" mt='30px' mb='20px'>
                <Text fontSize='30px' fontWeight='bold'>Featured</Text>
                <Spacer />
                <Text>View all</Text>
                <FaArrowRightLong color='#C1A15F' />
            </HStack>
            <BeautyCards />
        </ContainerWrapper>
    </div>
);


export default SuperContainer