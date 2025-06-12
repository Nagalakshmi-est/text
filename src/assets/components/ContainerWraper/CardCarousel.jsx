// rafce - CardCarousel.jsx
import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import usecode from '../../Images/UseCode.png';

import 'swiper/css';
import 'swiper/css/pagination';

const cardData = [
    { id: 1, title: 'Relaxing Spa', image: usecode },
    { id: 2, title: 'Luxury Massage', image: 'https://picsum.photos/id/1015/200/150' },
    { id: 3, title: 'Aroma Therapy', image: 'https://picsum.photos/id/1016/200/150' },
    { id: 4, title: 'Facial Glow', image: 'https://picsum.photos/id/1019/200/150' },

];

const CardCarousel = () => {
    return (
        <VStack spacing={6} w="100%" maxW="1200px" mx="auto" py={10}>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={2}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                style={{ width: '100%' }}
            >
                {cardData.map((card) => (
                    <SwiperSlide key={card.id}>
                        <Box
                            bg="white"
                            borderRadius="md"
                            boxShadow="sm"
                            textAlign="center"
                            p={2}
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                borderRadius="md"
                                w="100%"
                                h="120px"
                                objectFit="cover"
                            />
                            <Text fontSize="sm" fontWeight="semibold" mt={2}>
                                {card.title}
                            </Text>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </VStack>
    );
};

export default CardCarousel;
