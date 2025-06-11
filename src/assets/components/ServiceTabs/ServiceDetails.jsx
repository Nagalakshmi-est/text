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
import './Service.css'


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
                flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                p='20px'
            >
                {Images.map((data) => (
                    // <Box
                    //     position="relative"
                    //     w="180px"
                    //     h="120px"
                    //     borderRadius="3xl"
                    //     overflow="hidden"
                    //     mt="30px"
                    //     flexShrink={1}
                    // >
                    //     <Image
                    //         src={img}
                    //         alt={data.title}
                    //         w="100%"
                    //         h="100%"
                    //         objectFit="cover"
                    //         borderRadius="3xl"
                    //     />

                    //     <Box
                    //         position="absolute"
                    //         bottom="0"
                    //         width="100%"
                    //         height="100%" // full height to fade smoothly into the image
                    //         bg="linear-gradient(to top, rgba(10, 10, 10, 0.6), transparent 60%)"
                    //         borderRadius="3xl"
                    //     />

                    //     <Text
                    //         position="absolute"
                    //         bottom="12px"
                    //         width="100%"
                    //         color="white"
                    //         textAlign="center"
                    //         fontSize="sm"
                    //         px={2}
                    //     >
                    //         {data.title}
                    //     </Text>
                    // </Box>
                    // <Box role="group"

                    //     position="relative" w="180px" h="120px" borderRadius="3xl" overflow="hidden" mt="30px" border="2px solid transparent"
                    //     transition="all 0.3s ease"
                    //     _hover={{
                    //         border: '2px solid brown',
                    //     }}>
                    //     <Image
                    //         src={img}
                    //         alt={data.title}
                    //         w="100%"
                    //         h="100%"
                    //         objectFit="cover"
                    //         borderRadius="3xl"
                    //         transition="transform 0.3s ease"
                    //         _groupHover={{
                    //             transform: 'scale(1.05)',
                    //         }}
                    //     />

                    //     <Box
                    //         position="absolute"
                    //         bottom="0"
                    //         width="100%"
                    //         height="100%"
                    //         bg="linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent 60%)"
                    //         borderRadius="3xl"
                    //     />

                    //     <Text
                    //         position="absolute"
                    //         bottom="12px"
                    //         width="100%"
                    //         color="white"
                    //         textAlign="center"
                    //         px={2}
                    //         textShadow="0px 0px 6px rgba(0, 0, 0, 0.7)"
                    //     >
                    //         {data.title}
                    //     </Text>
                    // </Box>
                    <Box className="image-card">
                        <img src={img} alt={data.title} />

                        <Box className="gradient-overlay" />

                        <Text className="image-title">
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

                <Accordion.Item borderBottom="none"  >
                    <Accordion.ItemTrigger>
                        <Span flex="1" fontWeight='bold' fontSize='lg' ml='20px'>Message Therapy</Span>
                        {/* <Accordion.ItemIndicator color='brown' /> */}
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody p='15px'>
                            <VStack ml='20px' mr='20px'>
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
                                    <Button borderRadius='xl'
                                        border="2px solid transparent"

                                        bg="linear-gradient(white, white) padding-box, linear-gradient(to right, #5e4325, #c1a15f) border-box" color='#8B4513' w='100px' h='35px' >Remove</Button>



                                </HStack>




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
                                    <Button variant='outline' borderRadius='xl' color='white' w='100px' h='35px' background='linear-gradient(45deg, #5B4C2D, #C1A15F)}'    >Add</Button>                                    </HStack>

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
                                    <Button variant='outline' borderRadius='xl' color='white' w='100px' h='35px' background='linear-gradient(45deg, #5B4C2D, #C1A15F)}'    >Add</Button>                                    </HStack>


                            </VStack>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>

            </Accordion.Root>
            <Accordion.Root collapsible defaultValue={["b"]} background='white ' border="1px solid  #d3d3d3 " borderRadius='xl' p='10px' mt='20px'   >

                <Accordion.Item borderBottom="none" >
                    <Accordion.ItemTrigger ml='20px'>
                        <Span flex="1" fontWeight='bold' fontSize='lg'>Nail Bar</Span>
                        {/* <Accordion.ItemIndicator color='brown' /> */}
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
                        <Span flex="1" fontWeight='bold' fontSize='lg' ml='20px'>Manicure&Pedicure</Span>
                        {/* <Accordion.ItemIndicator color='brown' /> */}
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