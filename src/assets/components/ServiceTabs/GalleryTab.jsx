import React from 'react'
import { Tabs, Box, Image } from "@chakra-ui/react"
import './GalleryTab.css';
import reelIcon from '../../Images/reel.png'
import images from '../../Images/Reelimg.png'

const allData = [
    {
        id: 1,
        title: "Reel 1",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 2,
        title: "Reel 2",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

]

const reelsData = [
    {
        id: 1,
        title: "Reel 1",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",   // local video file path or URL
    },
    {
        id: 2,
        title: "Reel 2",
        src: "https://www.w3schools.com/html/mov_bbb.mp4", // example external video url
    },
    // add more reels here
]

const GalleryTab = () => {
    return (
        <Tabs.Root defaultValue="all" variant="unstyled" isFitted >
            <Box display="flex" justifyContent="center" mt={4} >
                <Tabs.List
                    bg="white"
                    rounded="lg"
                    boxShadow="lg"
                    display="flex"
                    width="600px"
                    height="48px"
                    overflow="hidden">
                    <Tabs.Trigger value="all"
                        flex="1"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="medium"
                        fontSize="sm"
                        color="gray.500"
                        _selected={{
                            color: "white",
                            bg: "none",
                            background:
                                "linear-gradient(90deg, rgba(91,76,45,1) 0%, rgba(193,161,95,1) 100%)",
                        }}
                        borderRadius="md"
                    >All</Tabs.Trigger>
                    <Tabs.Trigger value="reels"
                        flex="1"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="medium"
                        fontSize="sm"
                        color="gray.500"
                        _selected={{
                            color: "white",
                            bg: "none",
                            background:
                                "linear-gradient(90deg, rgba(91,76,45,1) 0%, rgba(193,161,95,1) 100%)",
                        }}
                        borderRadius="md"
                    >Reels</Tabs.Trigger>
                    <Tabs.Trigger value="tasks"
                        flex="1"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="medium"
                        fontSize="sm"
                        color="gray.500"
                        _selected={{
                            color: "white",
                            bg: "none",
                            background:
                                "linear-gradient(90deg, rgba(91,76,45,1) 0%, rgba(193,161,95,1) 100%)",
                        }}
                        borderRadius="md"
                    >Images</Tabs.Trigger>
                    <Tabs.Indicator rounded="l2" bg="#C1A15F" />
                </Tabs.List>
            </Box>

            <Tabs.Content value="all" mt='10px' >
                <Box display="flex" flexWrap="wrap" gap={4} justifyContent='left' >
                    {allData.map(({ id, src }) => (<>
                        <Image src={images} width="150px" height="150px" borderRadius="lg" />
                        <Box key={id} position="relative" width="150px" height="150px" overflow="hidden" borderRadius="lg" boxShadow="md">
                            <video
                                src={src}
                                muted
                                loop
                                autoPlay
                                playsInline
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <Box position="absolute" top="8px" right="8px" borderRadius="full" p="1">
                                <Image src={reelIcon} w="20px" />
                            </Box>
                        </Box></>
                    ))}
                </Box>
            </Tabs.Content>

            <Tabs.Content value="reels" mt='10px'>
                <Box display="flex" flexWrap="wrap" gap={4} justifyContent="left">
                    {reelsData.map(({ id, src }) => (
                        <Box key={id} position="relative" width="150px" height="150px" overflow="hidden" borderRadius="lg" boxShadow="md">
                            <video
                                src={src}
                                muted
                                loop
                                autoPlay
                                playsInline
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <Box position="absolute" top="8px" right="8px" borderRadius="full" p="1">
                                <Image src={reelIcon} w="20px" />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Tabs.Content>

            <Tabs.Content value="tasks" mt='10px'>
                <Box textAlign="center" mt={4}>Manage your tasks for freelancers</Box>
            </Tabs.Content>
        </Tabs.Root>

    )
}

export default GalleryTab