import React from 'react';
import {
    Box,
    Flex,
    HStack,
    Text,
    Spacer,
    Input,
    Stack
} from '@chakra-ui/react';

import {
    SimpleGrid,
    CardBody,
} from '@chakra-ui/react';

import { Image } from '@chakra-ui/react';
import { IoMdArrowDropdown } from "react-icons/io";

import { FiHome, FiSearch, FiVideo, FiShoppingCart, FiUser } from 'react-icons/fi';
import { InputGroup } from "@chakra-ui/react"
import { LuLocate, LuSearch } from "react-icons/lu"
import { GrLocation } from "react-icons/gr";
import { Avatar, Button, Card } from "@chakra-ui/react"
import combo from '../../Images/comb.jpeg'
import towl from '../../Images/towl.png'
import beauty from '../../Images/beauty.png'
// import group from '../../Images/Group.png'
import BeautyCards from './BeautyCards';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";

import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import ContainerWrapper from '../ContainerWraper/ContainerWraper';
import ImageCarousel from '../ContainerWraper/ImageCarousel';
import slide1 from "../../Images/Banner.png";
import slide2 from "../../Images/Group.png";
import slide3 from "../../Images/Group.png";
const images = [slide1, slide2, slide3];

const HomePage = () => {

    const navigate = useNavigate()
    return (<>

        <Navbar />
        {/* <Text>Checking</Text> */}
        <ContainerWrapper>
            <Flex justify="center" mt={{ base: '60px', md: '100px', lg: '100px' }}>

                <HStack
                    flexDir={{ base: "column", md: "row", lg: "row" }}
                    maxW="600px"
                    w="100%"
                >
                    {/* <InputGroup startElement={<GrLocation color="#8B4513" />} >
                        <Input placeholder="1208,Spline Arcade,flat no1..." borderRadius='lg' w='250px' background='gray.100' _placeholder={{ color: "#8B4513" }} />
                    </InputGroup> */}
                    <Box position="relative" maxW="300px" mx="auto">
                        {/* Input */}
                        <Input
                            placeholder="1208,Spline Arcade,flat no1..." pl="35px"
                            borderRadius='lg' w='250px' background='gray.100' _placeholder={{ color: "#8B4513" }}
                        />

                        {/* Left Icon */}
                        <Box position="absolute" top="10px" left="10px" fontSize="18px" color="gray.500">
                            <GrLocation color="#8B4513" />
                        </Box>

                        {/* Right Icon */}
                        <Box position="absolute" top="12px" right="10px" fontSize="18px" color="gray.500">
                            <IoCaretDownOutline color="#8B4513" />
                        </Box>
                    </Box>
                    <InputGroup startElement={<LuSearch />} w={{ base: '200px', md: '300px', lg: '900px' }}>
                        <Input placeholder="Search Services..." borderRadius='lg' background='white' />
                    </InputGroup>











                </HStack>
            </Flex>


            <Box w="100%" mx="auto" mt="60px"  >
                <HStack gap='80px' flexDir={{ base: 'column', md: 'row' }}>
                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl" onClick={() => navigate('/services')} bg='white' color='black'>
                        <Card.Body gap="5px">
                            <Stack
                                direction={{ base: 'row', md: 'column', lg: 'row' }}
                                spacing="10px"
                                align="center"
                                justify="center"
                                height="100%"
                            >
                                <Image src={combo} alt="Combo" maxH='120px' />
                                <Spacer />

                                <Text fontWeight={500} ml='10px' mr='40px' fontSize='35px'  >Salon</Text>
                            </Stack>
                        </Card.Body>
                    </Card.Root>


                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl" onClick={() => navigate('/services')} bg='white' color='black'>
                        <Card.Body gap="5px">
                            <Stack
                                direction={{ base: 'row', md: 'column', lg: 'row' }}
                                spacing="10px"
                                align="center"
                                justify="center"
                                height="100%"
                            >
                                <Image src={towl} alt="Towel" maxH="120px" />
                                <Spacer />
                                <Text fontWeight={500} ml='10px' mr='40px' fontSize='35px'  >
                                    SPA
                                </Text>
                            </Stack>
                        </Card.Body>
                    </Card.Root>

                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl" onClick={() => navigate('/services')} bg='white' color='black'>
                        <Card.Body gap="5px">
                            <Stack
                                direction={{ base: 'row', md: 'column', lg: 'row' }}
                                spacing="10px"
                                align="center"
                                justify="center"
                                height="100%"
                            >                                   <Image src={beauty} alt="Beauty" maxH='120px' />
                                <Spacer />

                                <Text fontWeight={500} mr='40px' fontSize='35px'>Clinic</Text>

                            </Stack>
                        </Card.Body>
                    </Card.Root>
                </HStack>
            </Box>

            <Box mt={10}>
                {/* <Image src={group} alt="Group" w="100%" objectFit="cover" borderRadius="xl" /> */}
                <ImageCarousel images={images} />
            </Box>
            <HStack w="100%" mx="auto" mt='30px' mb='20px'>
                <Text fontSize='30px' fontWeight='bold'>Featured</Text>
                <Spacer />
                <Text>View all</Text>
                <FaArrowRightLong color='#C1A15F' />
            </HStack>



        </ContainerWrapper>

        <BeautyCards />
    </>
    );
};

export default HomePage;
