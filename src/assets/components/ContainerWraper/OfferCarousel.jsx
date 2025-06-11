import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import usecode from '../../Images/UseCode.png';
import './OfferCarousel.css'


const OfferCarousel = () => {
    const offerData = [
        {
            code: "Dsaloon",
            desc: "Get ₹500 off on orders above ₹100/-",
            img: usecode,
        },
        {
            code: "WEEKEND",
            desc: "Flat ₹200 off on weekend bookings",
            img: usecode,
        },
        {
            code: "SAVE100",
            desc: "Save ₹100 on your first order",
            img: usecode,
        },
        {
            code: "GROOM50",
            desc: "Get ₹50 off on grooming services",
            img: usecode,
        },
    ];

    // Group 2 offers per slide
    const groupedOffers = [];
    for (let i = 0; i < offerData.length; i += 2) {
        groupedOffers.push(offerData.slice(i, i + 2));
    }

    return (
        <Box width="100%" >
            <Swiper

                spaceBetween={10}
                slidesPerView={1}
                className="custom-swiper"
                autoplay={{
                    delay: 2000,
                    reverseDirection: false,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
            >
                {groupedOffers.map((group, index) => (
                    <SwiperSlide key={index}>
                        <HStack justify="center" spacing={6}>
                            {group.map((offer, i) => (
                                <Box
                                    key={i}
                                    border="2px solid #d3d3d3"
                                    borderRadius="2xl"
                                    height="90px"
                                    width="450px"
                                    display="flex"
                                    alignItems="center"
                                    px={4}
                                >
                                    <Image src={offer.img} h="40px" />
                                    <VStack align="flex-start" pl="16px" spacing={0}>
                                        <Text fontSize="lg" fontWeight="medium">
                                            Use Code <strong>{offer.code}</strong>
                                        </Text>
                                        <Text color="gray.600" fontSize="sm">
                                            {offer.desc}
                                        </Text>
                                    </VStack>
                                </Box>
                            ))}
                        </HStack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default OfferCarousel;
