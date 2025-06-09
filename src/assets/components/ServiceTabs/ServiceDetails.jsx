import React from 'react'
import img from '../../Images/Day Spa.png'
import {
    Image, Box, HStack, Text, VStack, InputGroup, Input, Button,
    Spacer,
    Stack
} from '@chakra-ui/react'
import girlBoyIcon from '../../Images/Girlboyicon.png'
import menIcon from '../../Images/Men.png'
import GirlIcon from '../../Images/Girlicon.png'
import { Accordion, Span } from "@chakra-ui/react"
import { PiDotOutlineFill } from "react-icons/pi";
import { LuSearch } from "react-icons/lu"

const Images = [
    { id: 1, title: "Day Spa" },
    { id: 2, title: "Destination Spa" },
    { id: 3, title: "Wellness Spa" },
    { id: 4, title: "Medical Spa" },
    { id: 5, title: "Wellness Spa" },
    { id: 6, title: "Wellness Spa" },

]
const ServiceDetails = () => {
    return (
        <div>
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

        </div>
    )
}

export default ServiceDetails