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


const HomePage = () => {
    return (
        <Box  >
            <Box borderRadius="md" >
                <Flex align="center" flexDir={{ base: 'column', md: 'row' }} >
                    <Box bg="gray.400" w="100px" h="30px" borderRadius="lg" ml='80px' />

                    <Spacer />

                    <HStack gap={14} flexDir={{ base: 'column', md: 'row' }}>
                        <Flex align="center" gap={2}>
                            <FiHome />
                            <Text fontSize="sm">Home</Text>
                        </Flex>

                        <Flex align="center" gap={2}>
                            <FiSearch />
                            <Text fontSize="sm">Search</Text>
                        </Flex>

                        <Flex align="center" gap={2}>
                            <FiVideo />
                            <Text fontSize="sm">Reels</Text>
                        </Flex>

                        <Flex align="center" gap={2}>
                            <FiShoppingCart />
                            <Text fontSize="sm">Cart</Text>
                        </Flex>

                        <Flex align="center" gap={2}>
                            <FiUser />
                            <Text fontSize="sm">Login</Text>
                        </Flex>
                    </HStack>
                </Flex>
            </Box>

            <Flex justify="center" mt={{ base: '60px', md: '150px', lg: '150px' }} px={4}>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    maxW="600px"
                    gap={2}
                    w="100%"
                > <InputGroup startElement={<GrLocation color="#8B4513" />}>
                        <Input placeholder="1208,Spline Arcade,flat no1..." borderRadius='lg' w='250px' background='gray.100' _placeholder={{ color: "#8B4513" }} />
                    </InputGroup>

                    <InputGroup startElement={<LuSearch />}>
                        <Input placeholder="Search Spa Service..." borderRadius='lg' background='white' />
                    </InputGroup>
                </Stack>
            </Flex>


            <Box maxW="1200px" w="100%" mx="auto" mt="60px" >
                <HStack gap='80px' flexDir={{ base: 'column', md: 'row' }}>
                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl">
                        <Card.Body gap="5px">
                            <Stack
                                direction={{ base: 'row', md: 'column', lg: 'row' }}
                                spacing="10px"
                                align="center"
                                justify="center"
                                height="100%"
                            >                                <Image src={combo} alt="Combo" maxH='120px' />
                                <Spacer />

                                <Text fontWeight={500} ml='10px' mr='40px' fontSize='35px'  >Salon</Text>
                            </Stack>
                        </Card.Body>
                    </Card.Root>


                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl">
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

                    <Card.Root width={{ base: '300px', md: '360px', lg: "360px" }} height={{ base: '170px', md: '210px', lg: "170px" }} borderRadius="4xl">
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
