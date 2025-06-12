import React from 'react'
import { Box, Button, HStack, VStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TbRefresh } from "react-icons/tb";
import saloonImg from '../../Images/SaloonPic.png'
import { FaArrowRightLong } from "react-icons/fa6";

import spaImg from '../../Images/SpaPic.png';
import clinicImg from '../../Images/ClinicPic.png';
import combIcon from '../../Images/comb.jpeg';
import towelIcon from '../../Images/towl.png';
import beautyIcon from '../../Images/beauty.png';
import { useNavigate } from 'react-router-dom';


const Data = [
    {
        image: saloonImg,
        title: 'Salon',
        img: combIcon

    },
    {
        image: spaImg,
        title: 'Spa',
        img: towelIcon

    },
    {
        image: clinicImg,
        title: 'Clinic',
        img: beautyIcon

    },
]


const SpaModal = () => {
    const [showBox, setShowBox] = useState(false);
    const navigate = useNavigate()

    return (
        <>

            <Button w='100px' onClick={() => setShowBox(!showBox)} background='gray.100' color='#8B4513' borderRadius='lg'>   {showBox ? "Clinic" : "Clinic"} <TbRefresh />  </Button>




            {showBox && (
                <>
                    {/* Background Overlay with Blur */}
                    <Box
                        position="fixed"
                        top="0"
                        left="0"
                        width="100vw"
                        height="100vh"
                        bg="rgba(248, 242, 242, 0.39)"  // Light semi-transparen
                        backdropFilter="blur(1px)"     // Light blur

                        zIndex={999}
                    />

                    {/* Centered Box */}
                    <Box
                        position="fixed"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        width="400px"
                        height='auto'
                        bg="white"
                        boxShadow="xl"
                        borderRadius="lg"
                        p={6}
                        zIndex={1000}
                    >
                        {
                            Data.map((data) => (
                                <VStack >


                                    <Box boxShadow='sm' h='150px' w='350px' p='10px' borderRadius='2xl' mt={4} mb={2} border="2px solid transparent"
                                        _hover={{
                                            border: "2px solid #C1A15F", // Brown border on hover
                                            cursor: "pointer",
                                        }}
                                        onClick={() => navigate('/services/salon')}
                                    >
                                        <HStack gap={10}>
                                            <Image src={data.image} />
                                            <VStack >
                                                <Image h='50px' w='50px' src={data.img} />
                                                <Text fontWeight='bold' fontSize='20px'>{data.title}</Text>
                                                <FaArrowRightLong color='#C1A15F' size='20px' />
                                            </VStack>
                                        </HStack>
                                    </Box>

                                </VStack>
                            ))
                        }


                        {/* <Button mt={4} size="sm" onClick={() => setShowBox(false)}>
                            Close
                        </Button> */}
                    </Box>
                </>
            )}
        </>)
}

export default SpaModal