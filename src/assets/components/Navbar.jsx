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

import { GoArrowRight } from "react-icons/go";


const Navbar = () => {
    return (
        <Box borderRadius="md" >
            <Flex align="center" flexDir={{ base: 'column', md: 'row' }} >
                <Box bg="gray.400" w="100px" h="30px" borderRadius="lg" ml='80px' />

                <Spacer />

                <HStack gap={12} flexDir={{ base: 'column', md: 'row' }} mr='80px'>
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
    )
}

export default Navbar