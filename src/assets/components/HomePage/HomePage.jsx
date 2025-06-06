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

import { FiHome, FiSearch, FiVideo, FiShoppingCart, FiUser } from 'react-icons/fi';
import { InputGroup } from "@chakra-ui/react"
import { LuLocate, LuSearch } from "react-icons/lu"
import { GrLocation } from "react-icons/gr";
import { Avatar, Button, Card } from "@chakra-ui/react"
import combo from '../../Images/comb.jpeg'
import towl from '../../Images/towl.png'
import beauty from '../../Images/beauty.png'
import group from '../../Images/Group.png'
import BeautyCards from './BeautyCards';
import { GoArrowRight } from "react-icons/go";
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Box  >
            <Navbar />
            <Flex justify="center" mt={{ base: '60px', md: '150px', lg: '150px' }}>
                <HStack
                    flexDir={{ base: "column", md: "row", lg: "row" }}
                    maxW="600px"
                    w="100%"
                > <InputGroup startElement={<GrLocation color="#8B4513" />}>
                        <Input placeholder="1208,Spline Arcade,flat no1..." borderRadius='lg' w='250px' background='gray.100' _placeholder={{ color: "#8B4513" }} />
                    </InputGroup>

                    <InputGroup startElement={<LuSearch />} mr={{ base: '20px', md: '70px', lg: '70px' }}>
                        <Input placeholder="Search Services..." borderRadius='lg' background='white' />
                    </InputGroup>
                </HStack>
            </Flex>


            <Box maxW="1200px" w="100%" mx="auto" mt="60px" >
                <HStack gap='80px' flexDir={{ base: 'column', md: 'row' }}>
                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl" onClick={() => navigate('/services')}>
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


                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl" onClick={() => navigate('/services')}>
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

                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl" onClick={() => navigate('/services')}>
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

            <Box maxW="1200px" w="100%" mx="auto" mt={10}>
                <Image src={group} alt="Group" w="100%" objectFit="cover" borderRadius="xl" />
            </Box>
            <HStack maxW="1200px" w="100%" mx="auto" mt='30px' mb='20px'>
                <Text fontSize='30px' fontWeight='bold'>Featured</Text>
                <Spacer />
                <Text>View all</Text>
                <GoArrowRight />
            </HStack>


            <BeautyCards />

        </Box>
    );
};

export default HomePage;
