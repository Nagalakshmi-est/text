import React from 'react';
import {
    Box,
    Flex,
    HStack,
    Text,
    Image,
} from '@chakra-ui/react';

import reelImg from '../Images/reel.png';
import { FiHome, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
    return (
        <Box
            as="nav"
            w="100vw"               // Full viewport width
            h="80px"
            bg="#E7DAC2"
            position="fixed"
            top="0"
            left="0"                // Ensure it's flush to left
            zIndex="1000"
            m="0"
            p="0"
        >
            <Flex
                h="100%"
                align="center"
                justify="space-between"
                maxW="1200px"          // Optional: controls max width
                mx="auto"              // Center the content
                px={{ base: 4, md: 12 }} // Internal padding only
            >
                {/* Logo or Placeholder */}
                <Box bg="gray.400" w="100px" h="30px" borderRadius="lg" />

                {/* Navigation Items */}
                <HStack spacing={10} gap={8}>
                    <Flex align="center" gap={2}>
                        <FiHome />
                        <Text fontSize="18px" fontWeight="90px">Home</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <FiSearch />
                        <Text fontSize="18px" fontWeight='medium' >Search</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Image src={reelImg} w="20px" alt="Reels" />
                        <Text fontSize="18px" fontWeight="500">Reels</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <FiShoppingCart />
                        <Text fontSize="18px" fontWeight="500">Cart</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <FiUser />
                        <Text fontSize="18px" fontWeight="500">Login</Text>
                    </Flex>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Navbar;
