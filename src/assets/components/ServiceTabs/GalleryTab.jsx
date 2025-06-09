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
        <Tabs.Root defaultValue="all" variant="plain" >
            <Box display="flex" justifyContent="center" mt={4} >
                <Tabs.List bg='white' rounded="l3" p="2" w="600px" justifyContent='space-evenly' boxShadow='lg'>
                    <Tabs.Trigger value="all" w='150px' display="flex"
                        alignItems="center"
                        justifyContent="center">All</Tabs.Trigger>
                    <Tabs.Trigger value="reels" w='150px' display="flex"
                        alignItems="center"
                        justifyContent="center">Reels</Tabs.Trigger>
                    <Tabs.Trigger value="tasks" w='150px' display="flex"
                        alignItems="center"
                        justifyContent="center">Images</Tabs.Trigger>
                    <Tabs.Indicator rounded="l2" bg="#C1A15F" />
                </Tabs.List>
            </Box>

            <Tabs.Content value="all">
                <Box display="flex" flexWrap="wrap" gap={4} justifyContent='left'>
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

            <Tabs.Content value="reels">
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

            <Tabs.Content value="tasks">
                <Box textAlign="center" mt={4}>Manage your tasks for freelancers</Box>
            </Tabs.Content>
        </Tabs.Root>

    )
}

export default GalleryTab