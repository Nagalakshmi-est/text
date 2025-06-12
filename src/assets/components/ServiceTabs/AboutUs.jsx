import { HStack, Box, Text, Stack } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {
    return (
        <>
            <Box>

                <HStack mt='10px ' spaceX={10} >

                    <Box background='white' boxShadow='md' w='1000px' h='300px' borderRadius='xl' py='30px' px='30px'>
                        <Text fontWeight='bold' fontSize='xl' >About Us</Text>
                        <Text color='#64748B' mt='20px'>At Oasis Spa Haven, we specialize in providing a serene escape from the hustle and bustle of everyday life. Nestled in the heart of Relaxation Town, our spa offers a sanctuary where guests can unwind, rejuvenate, and indulge in luxurious pampering. </Text>
                        <Text color='#64748B' mt='20px'>From soothing massages and rejuvenating facials to revitalizing body treatments, our skilled therapists tailor each experience to promote relaxation, balance, and well-being. Step into our Oasis Spa Haven and embark on a journey of blissful relaxation and renewal.</Text>

                    </Box><Box borderRadius='2xl' background='white' boxShadow='xl' w='450px' h='300px'>
                        <Stack p='40px'>
                            <Text fontWeight='bold' fontSize='xl' >Working Hours</Text>
                            <Text mt='10px'> Monday  : 10am-9pm</Text>
                            <Text>Tuesday  : 10am-9pm</Text>
                            <Text>Wednessday  : 10am-9pm</Text>
                            <Text>Thursday  : 10am-9pm</Text>
                            <Text>Friday  : 10am-9pm</Text>
                            <Text>Saturday-Sunday  : 10am-11pm</Text>

                        </Stack>
                    </Box>
                </HStack></Box>
        </>)
}

export default AboutUs