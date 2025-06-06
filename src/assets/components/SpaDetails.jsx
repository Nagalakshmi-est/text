import React from 'react'
import Navbar from './Navbar'
import {
    Image, Box, HStack, Text, VStack, InputGroup, Input, Button,
    Spacer,
    Stack
} from '@chakra-ui/react'
import CosmoticImg from '../Images/Cosmotic.png'
import CosmoticHalf from '../Images/CosmoticHalf.png'
import logo from '../Images/logo.png'
import MapPin from '../Images/map-pin.png'
import LocationPng from '../Images/location.png'
import star from '../Images/Star.png'
import UseCode from '../Images/UseCode.png'
import { LuSearch } from "react-icons/lu"
import { Accordion, Span } from "@chakra-ui/react"
import girlBoyIcon from '../Images/Girlboyicon.png'
import { Tabs } from "@chakra-ui/react"
import img from '../Images/Day Spa.png'
import { PiDotOutlineFill } from "react-icons/pi";
import GirlIcon from '../Images/Girlicon.png'
import menIcon from '../Images/Men.png'
const Images = [
    { id: 1, title: "Day Spa" },
    { id: 2, title: "Destination Spa" },
    { id: 3, title: "Wellness Spa" },
    { id: 4, title: "Medical Spa" },
    { id: 5, title: "Wellness Spa" },
    { id: 6, title: "Wellness Spa" },

]
const SpaDetails = () => {
    return (
        <>
            <Navbar />


            <Box mt='50px'  >
                <Box >
                    <HStack gap={6}>
                        <Image src={CosmoticImg} />
                        <Image src={CosmoticHalf} />
                    </HStack>
                </Box>
                <Box mt='20px' bg='White' borderRadius='3xl' p='20px' boxShadow="md" >
                    <VStack align='flex-start'>
                        <HStack>
                            <Image src={logo} borderRadius='full' height='70px' width='70px' />

                            <VStack ml='-30px'>

                                <Text fontSize='3xl' fontWeight='bold'>  Oasis Spa Haven</Text>
                                <HStack> <Image src={MapPin} height='26px' ml='40px' />
                                    <Text ml='-5px'>Madhapur</Text>
                                    <Image src={LocationPng} height='23px' ml='20px' />

                                    <Text ml='-5px'>3.5Km</Text>
                                    <Image src={star} height='20px' ml='20px' />

                                    <Text ml='-5px'>4.5</Text></HStack>

                            </VStack>


                        </HStack>
                        <Box borderBottom="2px dashed  #d3d3d3" width="100%" my={4} />

                        <HStack gap={4} >
                            <Box border="2px solid #d3d3d3"
                                borderRadius="2xl"
                                height="90px"
                                width="480px"
                                display="flex"
                                alignItems="center"
                                paddingLeft="16px">
                                <Image src={UseCode} h='50px' />

                                <VStack align='flex-start' p='20px'><Text fontSize='xl' fontWeight='medium'> Use Code

                                    <span style={{ fontWeight: 'bold' }}> Dsaloon</span> </Text>
                                    <Text color='gray'>Get &#8377;500 off on orders above 100/- </Text>
                                </VStack>
                            </Box>
                            <Box border="2px solid #d3d3d3"
                                borderRadius="2xl"
                                height="90px"
                                width="480px"
                                display="flex"
                                alignItems="center"
                                paddingLeft="16px">
                                <Image src={UseCode} h='50px' />

                                <VStack align='flex-start' p='20px'>
                                    <Text fontSize='xl' fontWeight='medium'> Use Code

                                        <span style={{ fontWeight: 'bold' }}> Dsaloon</span> </Text>
                                    <Text color='gray'>Get &#8377;500 off on orders above 100/- </Text>
                                </VStack>
                            </Box>
                            <Box border="2px solid  #d3d3d3 " borderLeftRadius='2xl' borderRight='none' h='90px' w='240px' paddingLeft="16px" display='flex' alignItems='center'>
                                <Image src={UseCode} h='50px' />
                                <VStack align='flex-start' p='20px'>
                                    <Text fontSize='xl' fontWeight='medium'> Use Code

                                        <span style={{ fontWeight: 'bold' }}> Ds</span> </Text>
                                    <Text color='gray'>Get &#8377;500 off on  </Text>
                                </VStack>
                            </Box>

                        </HStack>
                    </VStack>
                </Box>
                <Tabs.Root defaultValue="services" mt='40px'>
                    <Tabs.List>
                        <Tabs.Trigger value="services">
                            Services
                        </Tabs.Trigger>
                        <Tabs.Trigger value="doc">
                            Doc&Staff
                        </Tabs.Trigger>
                        <Tabs.Trigger value="gallery">
                            Gallery
                        </Tabs.Trigger>
                        <Tabs.Trigger value="reviews">
                            Reviews
                        </Tabs.Trigger>
                        <Tabs.Trigger value="about">
                            About Us
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="services">

                        <Box
                            display="flex"
                            gap={10}
                            flexWrap="nowrap"
                            justifyContent="flex-start"
                            alignItems="center"
                            flexGrow={1}
                            overflow="hidden"
                            flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                        >
                            {Images.map((data) => (
                                <Box
                                    key={data.id}
                                    mt='30px'
                                    position="relative"
                                    borderRadius="md"
                                    overflow="hidden"

                                    flexShrink={1}     // allow shrinking if container is smaller
                                >
                                    <Image
                                        src={img}
                                        alt={data.title}
                                        w="180px"
                                        h="120px"
                                        objectFit="cover"
                                        borderRadius="3xl"
                                    />
                                    <Text
                                        position="absolute"
                                        bottom="0"
                                        width="100%"
                                        color="white"
                                        textAlign="center"
                                        background='black'
                                        py={1}
                                        borderBottomRadius="3xl"
                                    >
                                        {data.title}
                                    </Text>
                                </Box>
                            ))}
                        </Box>

                    </Tabs.Content>
                    <Tabs.Content value="doc">Manage your projects</Tabs.Content>
                    <Tabs.Content value="gallery">
                        Manage your tasks for freelancers
                    </Tabs.Content>
                    <Tabs.Content value="reviews">
                        Manage your tasks for freelancers
                    </Tabs.Content>  <Tabs.Content value="about">
                        Manage your tasks for freelancers
                    </Tabs.Content>
                </Tabs.Root>

                <HStack mt='30px' >
                    <Box><InputGroup startElement={<LuSearch />}   >
                        <Input placeholder="Search Services..." borderRadius='lg' background='white' w='380px' />
                    </InputGroup></Box>
                    <Box ml='60px'>
                        <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px ' color='white' background='linear-gradient(45deg, #5B4C2D, #C1A15F)}'  >
                            All
                        </Button> <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px' ml='10px'>
                            Home-visit
                        </Button> <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px' ml='10px'>
                            Walk-in
                        </Button>
                        <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px' ml='10px'>
                            Male
                        </Button>
                        <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px' ml='10px'>
                            Female
                        </Button>  <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px' ml='10px'>
                            Unisex
                        </Button>
                    </Box>

                </HStack>

                <Accordion.Root collapsible defaultValue={["b"]} background='white ' border="1px solid  #d3d3d3 " borderRadius='xl' p='10px' mt='50px'>

                    <Accordion.Item borderBottom="none" >
                        <Accordion.ItemTrigger>
                            <Span flex="1" fontWeight='bold' fontSize='lg'>Message Therapy</Span>
                            <Accordion.ItemIndicator color='brown' />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody p='15px'>
                                <VStack>
                                    <HStack w="100%" justifyContent="space-between" alignItems="center">
                                        <VStack align="flex-start" maxW="70%">
                                            <Text fontWeight='bold' fontSize='lg'>Swedish Message</Text>
                                            <Text fontSize="sm" color='gray' >
                                                Experience relaxation and stress relief with long, flowing strokes and gentle kneading techniques.
                                            </Text>
                                        </VStack>

                                        <Image src={girlBoyIcon} boxSize="60px" alt="massage icon" />
                                    </HStack>
                                    <HStack w="100%" justifyContent="space-between" alignItems="center">
                                        <HStack display="inline-flex" alignItems="center">
                                            <Text > <span style={{ color: 'gray' }}>From</span> &#8377;<span style={{ fontWeight: 'bold', fontSize: 'xl' }}>4,000</span></Text>
                                            <PiDotOutlineFill color="brown" />
                                            <Text as="span">60Min</Text>
                                            <PiDotOutlineFill color="brown" />
                                            <Text as="span">Walkin</Text>
                                        </HStack>
                                        <Button variant='outline' borderRadius='3xl' borderColor="#8B4513" color='#8B4513' w='100px' h='35px' >Remove</Button>                                    </HStack>

                                    <Box borderBottom="1px solid  #d3d3d3" width="100%" my={4} />
                                    <HStack w="100%" justifyContent="space-between" alignItems="center">
                                        <VStack align="flex-start" maxW="70%">
                                            <Text fontWeight='bold' fontSize='lg'>Deep Tissue Message</Text>
                                            <Text fontSize="sm" color='gray' >
                                                Experience relaxation and stress relief with long, flowing strokes and gentle kneading techniques.
                                            </Text>
                                        </VStack>

                                        <Image src={GirlIcon} boxSize="60px" alt="massage icon" />
                                    </HStack>
                                    <HStack w="100%" justifyContent="space-between" alignItems="center">
                                        <HStack display="inline-flex" alignItems="center">
                                            <Text > <span style={{ color: 'gray' }}>From</span> &#8377;<span style={{ fontWeight: 'bold', fontSize: 'xl' }}>4,000</span></Text>
                                            <PiDotOutlineFill color="brown" />
                                            <Text as="span">60Min</Text>
                                            <PiDotOutlineFill color="brown" />
                                            <Text as="span">Walkin</Text>
                                        </HStack>
                                        <Button variant='outline' borderRadius='3xl' borderColor="#8B4513" color='white' w='100px' h='35px' background='linear-gradient(45deg, #5B4C2D, #C1A15F)}'    >Add</Button>                                    </HStack>

                                    <Box borderBottom="1px solid  #d3d3d3" width="100%" my={4} />
                                    <HStack w="100%" justifyContent="space-between" alignItems="center">
                                        <VStack align="flex-start" maxW="70%">
                                            <Text fontWeight='bold' fontSize='xl'>Hot Stone Message</Text>
                                            <Text fontSize="sm" color='#64748B' >
                                                Experience relaxation and stress relief with long, flowing strokes and gentle kneading techniques.
                                            </Text>
                                        </VStack>

                                        <Image src={menIcon} boxSize="60px" alt="massage icon" />
                                    </HStack>
                                    <HStack w="100%" justifyContent="space-between" alignItems="center">
                                        <HStack display="inline-flex" alignItems="center">
                                            <Text > <span style={{ color: 'gray' }}>From</span> &#8377;  <span style={{ fontWeight: 'bold', fontSize: 'xl' }}>4,000</span></Text>
                                            <PiDotOutlineFill color="brown" />
                                            <Text as="span">60Min</Text>
                                            <PiDotOutlineFill color="brown" />
                                            <Text as="span">Walkin</Text>
                                        </HStack>
                                        <Button variant='outline' borderRadius='3xl' borderColor="#8B4513" color='white' w='100px' h='35px' background='linear-gradient(45deg, #5B4C2D, #C1A15F)}'    >Add</Button>                                    </HStack>


                                </VStack>
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>

                </Accordion.Root>
                <Accordion.Root collapsible defaultValue={["b"]} background='white ' border="1px solid  #d3d3d3 " borderRadius='xl' p='10px' mt='20px'   >

                    <Accordion.Item borderBottom="none" >
                        <Accordion.ItemTrigger>
                            <Span flex="1" fontWeight='bold' fontSize='lg'>Nail Bar</Span>
                            <Accordion.ItemIndicator color='brown' />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody p='15px'>
                                Nail Bar
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>

                </Accordion.Root>
                <Accordion.Root collapsible defaultValue={["b"]} background='white ' border="1px solid  #d3d3d3 " borderRadius='xl' p='10px' mt='20px'  >

                    <Accordion.Item borderBottom="none" >
                        <Accordion.ItemTrigger>
                            <Span flex="1" fontWeight='bold' fontSize='lg'>Manicure&Pedicure</Span>
                            <Accordion.ItemIndicator color='brown' />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody p='15px'>
                                Manicure&Pedicure                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>

                </Accordion.Root>

            </Box>
        </>
    )
}

export default SpaDetails