import React from 'react'
import Navbar from './Navbar'
import { Flex, HStack, Button, Menu, Portal, Stack, InputGroup, Input, Box, Text, Image, Card, Grid, Spacer } from '@chakra-ui/react'
import { LuSearch } from "react-icons/lu"
import { GrLocation } from "react-icons/gr";
import { TbRefresh } from "react-icons/tb";
import img from '../Images/Day Spa.png'
import { FaArrowRightLong } from "react-icons/fa6";
// import makeupimg from '../Images/Makeupbanner.png'
// import halfmakeup from '../Images/HalfMakeup.png'
import { MdArrowDropDown } from "react-icons/md";
import BeautyCards from './HomePage/BeautyCards';
import ImageCarousel from './ContainerWraper/ImageCarousel';
import ContainerWrapper from './ContainerWraper/ContainerWraper';

import slide1 from '../Images/Group.png'
import slide2 from '../Images/Group.png'
import slide3 from '../Images/Group.png'
import SpaModal from './ContainerWraper/SpaModal';

const images = [slide1, slide2, slide3];



const Images = [
    { id: 1, title: "Day Spa" },
    { id: 2, title: "Destination Spa" },
    { id: 3, title: "Wellness Spa" },
    { id: 4, title: "Medical Spa" },
    { id: 5, title: "Wellness Spa" },
    { id: 6, title: "Wellness Spa" },
    { id: 7, title: "Wellness Spa" },


]
const Imagecircle = [
    { id: 1, title: "Day Spa" },
    { id: 2, title: "Destination Spa" },
    { id: 3, title: "Wellness Spa" },
    { id: 4, title: "Medical Spa" },
    { id: 5, title: "Wellness Spa" },
    { id: 6, title: "Wellness Spa" },
    { id: 7, title: "Wellness Spa" },
    { id: 8, title: "Wellness Spa" },
    { id: 9, title: "Wellness Spa" },




]
const Services = () => {
    return (<>
        <Navbar />
        <ContainerWrapper>



            <Flex justify="center" mt={{ base: '60px', md: '80px', lg: '80px' }} >
                <HStack
                    flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                    maxW="700px"
                    w="100%"
                > <InputGroup startElement={<GrLocation color="#8B4513" />}>
                        <Input placeholder="1208,Spline Arcade,flat no1..." borderRadius='lg' w='250px' background='gray.100' _placeholder={{ color: "#8B4513" }} />
                    </InputGroup>

                    <InputGroup startElement={<LuSearch />} ml='-80px' >
                        <Input placeholder="Search Services..." borderRadius='lg' background='white' />
                    </InputGroup>

                    <SpaModal />
                    {/* <Button w='100px' background='gray.100' color='#8B4513' borderRadius='lg'>Clinic< TbRefresh />   </Button> */}
                </HStack>
            </Flex>


            <Box  >
                <HStack mt='20px' flexDir={{ base: 'column', md: 'row', lg: 'row' }}><Text fontWeight='700' font='Lato '
                    fontSize='30px'>Services</Text>
                    <Spacer />
                    <HStack> <Text fontSize='20px'>View all</Text>
                        <FaArrowRightLong />
                    </HStack></HStack>

                <Box
                    display="flex"
                    gap={4}
                    flexWrap="nowrap"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexGrow={1}
                    overflow="hidden"
                    flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                >
                    {Images.map((data) => (
                        <Box position="relative" w="180px" h="120px" borderRadius="3xl" overflow="hidden" mt="30px" >
                            <Image
                                src={img}
                                alt={data.title}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="3xl"
                            />

                            <Box
                                position="absolute"
                                bottom="0"
                                width="100%"
                                height="100%"
                                bg="linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent 60%)"
                                borderRadius="3xl"
                            />

                            <Text
                                position="absolute"
                                bottom="12px"
                                width="100%"
                                color="white"
                                textAlign="center"
                                px={2}
                                textShadow="0px 0px 6px rgba(0, 0, 0, 0.7)"
                            >
                                {data.title}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </Box>


            <Box w="100%" mx="auto" mt={10}>
                {/* <Image src={group} alt="Group" w="100%" objectFit="cover" borderRadius="xl" /> */}
                <ImageCarousel images={images} />
            </Box>
            <HStack mt='20px' flexDir={{ base: 'column', md: 'row', lg: 'row' }}><Text fontWeight='bold' fontSize='30px'>Premium Spa</Text>
                <Spacer />
                <HStack> <Text fontSize='20px'>View all</Text>
                    <FaArrowRightLong />
                </HStack></HStack>

            <Box
                display="flex"
                gap='30px'
                justifyContent="flex-start"
                alignItems="center"
                bg='white'
            >
                {Imagecircle.map((data) => (
                    <Box
                        key={data.id}
                        mt="20px"
                        w="110px"
                        h="110px"
                        borderRadius="full"
                        flexShrink={0}
                    >
                        <Image
                            src={img}
                            alt={data.title}
                            boxSize="100%"
                            objectFit="cover"
                            borderRadius="full"
                        />
                    </Box>
                ))}
            </Box>

            <Box  >
                <HStack mt='30px' mb='30px' flexDir={{ base: 'column', md: 'row', lg: 'row' }}>
                    <Text> Filters</Text>

                    <HStack flexDir={{ base: 'column', md: 'row', lg: 'row' }}>


                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <Button variant="outline" borderRadius='full' borderColor="#8B4513" ml='20px' height='30px'>
                                    Sort <MdArrowDropDown color="#8B4513" />
                                </Button>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content>
                                        <Menu.Item value="new-txt">All</Menu.Item>
                                        <Menu.Item value="new-file">A-Z</Menu.Item>
                                        <Menu.Item value="new-win">Z-A</Menu.Item>
                                        <Menu.Item value="open-file">Near by</Menu.Item>
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>


                        <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px'>
                            Discounts
                        </Button>
                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px'>
                                    Gender <MdArrowDropDown color="#8B4513" />
                                </Button>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content>
                                        <Menu.Item value="new-txt">All</Menu.Item>
                                        <Menu.Item value="new-file">Male</Menu.Item>
                                        <Menu.Item value="new-win"> Female</Menu.Item>
                                        <Menu.Item value="new-openfile"> UniSex</Menu.Item>

                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>

                        <Button variant="outline" borderRadius='full' borderColor="#8B4513" height='30px'>
                            Top Ratings
                        </Button>
                    </HStack>

                </HStack>
            </Box>
        </ContainerWrapper>

        <BeautyCards />
    </>

    )
}

export default Services