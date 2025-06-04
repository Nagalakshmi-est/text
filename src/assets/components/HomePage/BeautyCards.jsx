import React from "react";
import {
    Box,
    Text,
    Image,
    SimpleGrid,
    Spinner,
    Center,
    Card,
    CardBody,
    VStack,
    Stack,
    Spacer,
} from "@chakra-ui/react";
import { Badge, HStack, Icon, } from "@chakra-ui/react"
import { FcLike } from "react-icons/fc";

import { HiStar } from "react-icons/hi"
import { Grid } from "@chakra-ui/react"
import spaimg from '../../Images/Spa.png'
import { PiHeartThin } from "react-icons/pi";

import { IoLocationOutline } from "react-icons/io5";

const data = [
    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',
        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    }, {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    }, {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    }, {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',

        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    },

    {
        imageAlt: "Rear view of modern home with pool",
        title: "Renew Day Spa",
        address: '1208,Spline Arcade,Flat No 102 ..',
        rating: 4.5,
        distance: '3.5km',
        spot: 'Unisex'
    }
]


const BeautyCards = () => {




    return (

        <>

            <Box maxW="1200px" w="100%" mx="auto" mt={10}>
                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)"
                }} gap="6">
                    {data.map((dev) => (
                        <Box maxW='350px' borderWidth="1px" borderRadius='2xl'>


                            <Image src={spaimg} borderRadius='2xl' height='140px' width='330px' />

                            <Box p="4" >
                                <VStack align="start" spacing={2}>

                                    <HStack>
                                        <Text fontWeight="medium" color="fg"> {dev.title}    </Text>

                                        <Spacer />
                                        <Icon as={FcLike} boxSize={4} ml='80px' color='brown' />

                                    </HStack>


                                    <Text color='gray.400'>{dev.address}</Text>
                                    <HStack>
                                        <HStack gap="1" fontWeight="medium">
                                            <Icon color="orange.400">
                                                <HiStar />
                                            </Icon>
                                            <Text>
                                                {dev.rating}
                                            </Text>
                                        </HStack>
                                        <HStack gap="1" fontWeight="medium">
                                            <Icon >
                                                <IoLocationOutline />
                                            </Icon>
                                            <Text >{dev.distance}</Text>
                                        </HStack>


                                        <Text ml='70px'>{dev.spot}</Text>
                                    </HStack>


                                </VStack>


                            </Box>

                        </Box>
                    ))}
                </Grid>

            </Box>

        </>
    );
};

export default BeautyCards;