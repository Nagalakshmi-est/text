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
import { TiHeartFullOutline } from "react-icons/ti";
import { GoHeartFill } from "react-icons/go";
import { HiStar } from "react-icons/hi"
import { Grid } from "@chakra-ui/react"
import spaimg from '../../Images/Spa.png'
import { PiHeartThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import ContainerWrapper from "../ContainerWraper/ContainerWraper";
import offerImg from '../../Images/offer.png'

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



    const navigate = useNavigate()
    return (

        <>
            <ContainerWrapper >

                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)"
                }} gap="6" >
                    {data.map((dev) => (
                        <Box maxW='350px' position="relative" overflow="hidden" borderWidth="1px" borderRadius='2xl' onClick={() => navigate('/spadetails')} >


                            {/* <Box position="relative" borderRadius="2xl" overflow="hidden" >
                                <Image src={spaimg} borderRadius="2xl" height="140px" width="100%" objectFit="cover" />
                                <Box
                                    position="absolute"
                                    bottom="1"
                                    left="2"
                                    fontSize="small"
                                    color="#25B701"
                                    px="3"
                                    py="1"
                                    borderRadius="lg"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    backdropFilter="blur(1px)"
                                    boxShadow="0 4px 16px rgba(0, 0, 0, 0.2)"
                                >
                                    <HStack>

                                        <Image src={offerImg} />
                                        Flat 10% Off above value of 200

                                    </HStack>
                                </Box>
                            </Box> */}
                            <Box position="relative" borderRadius="2xl" overflow="hidden" w="100%" h="140px">
                                {/* Main Image */}
                                <Image
                                    src={spaimg}
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                    alt="Spa Offer"
                                />

                                {/* Black Overlay at Bottom (Fixed Height) */}
                                <Box
                                    position="absolute"
                                    bottom="0"
                                    left="0"
                                    right="0"
                                    height="100%"  // Adjust height for more/less black area
                                    bg="linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent 60%)"
                                />

                                {/* Glass Effect Text (Positioned Over Black Background) */}
                                <Box
                                    position="absolute"
                                    bottom="15px"  // Adjust to move up/down
                                    left="15px"   // Adjust to move left/right
                                    color="#25B701"
                                    fontSize="sm"
                                    px="3px"
                                    py="2px"
                                    borderRadius="md"
                                    bg="rgba(255, 255, 255, 0.01)" backdropFilter="blur(1px)"       // Frosted effect
                                >
                                    <HStack>

                                        <Image src={offerImg} />
                                        Flat 10% Off above value of 200

                                    </HStack>                                </Box>
                            </Box>
                            <Box p="4" >
                                <VStack align="start" spacing={2}>

                                    <HStack>
                                        <Text fontWeight="medium" color="fg"> {dev.title}    </Text>

                                        <Spacer />
                                        <GoHeartFill color="#B7995B" style={{ marginLeft: '90px' }} />
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
                                        <HStack gap="1" fontWeight="medium" ml='8px'>
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

            </ContainerWrapper>
        </>
    );
};

export default BeautyCards;