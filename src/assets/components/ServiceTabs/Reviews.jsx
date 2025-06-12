import { Grid, Box, Text, Image, HStack, VStack, Spacer, Flex } from '@chakra-ui/react'
import React from 'react'
import Img from '../../Images/DoctorImg.png'
import { FaStar } from "react-icons/fa6";

const data = [
    {
        name: 'Ruchika Tiwari',
        title: 'Blissful Hot Stone Massage',
        discription: 'The Hot Stone Massage at Oasis Spa Haven was pure bliss! Expertly placed warm stones melted away tension, leaving me feeling rejuvenated and relaxed.',
        day: '1 day ago'
    },
    {
        name: 'Ruchika Tiwari',
        day: '1 day ago',
        title: 'Blissful Hot Stone Massage',
        discription: 'The Hot Stone Massage at Oasis Spa Haven was pure bliss! Expertly placed warm stones melted away tension, leaving me feeling rejuvenated and relaxed.'
    }, {
        name: 'Ruchika Tiwari',
        day: '1 day ago',
        title: 'Blissful Hot Stone Massage',
        discription: 'The Hot Stone Massage at Oasis Spa Haven was pure bliss! Expertly placed warm stones melted away tension, leaving me feeling rejuvenated and relaxed.'
    }, {
        name: 'Ruchika Tiwari',
        day: '1 day ago',
        title: 'Blissful Hot Stone Massage',
        discription: 'The Hot Stone Massage at Oasis Spa Haven was pure bliss! Expertly placed warm stones melted away tension, leaving me feeling rejuvenated and relaxed.'
    }
]

const Reviews = () => {
    return (
        <>

            <Grid templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)"
            }} gap="6">
                {
                    data.map((Data) => (
                        <Box h='160px' w='570px' bg='white' borderRadius='2xl' py='10px' px='25px ' boxShadow='xl' mt='5px'  >
                            <HStack><Image src={Img} w='40px' />

                                <VStack align='flex-start' w='100%'>

                                    <Flex w="100%" justify="space-between" align="center" >
                                        <Text fontSize="md" fontWeight="medium">
                                            {Data.name}
                                        </Text>

                                        <Text fontSize="sm"  >
                                            {Data.day}
                                        </Text>
                                    </Flex>


                                    <HStack spacing={1}>
                                        {Array(5)
                                            .fill("")
                                            .map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    color='#FFCB14'
                                                />
                                            ))}
                                    </HStack>
                                </VStack>
                            </HStack>
                            <Text fontSize='md' fontWeight='medium'>{Data.title}</Text>
                            <Text color='gray'>{Data.discription}</Text></Box>
                    ))
                }

            </Grid>

        </>
    )
}

export default Reviews