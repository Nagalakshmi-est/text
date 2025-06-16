import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import slide1 from "../../Images/Massage.png";
import ContainerWrapper from "./ContainerWraper";

const CardCarousel = () => {
    const images = [slide1, slide1, slide1];

    return (
        // <Box w="100%" maxW="1350px" px={{ base: 2, md: 4, lg: 1 }} borderRadius="60px" overflow="hidden">
        <ContainerWrapper >
            <Swiper
                spaceBetween={30}
                slidesPerView={1.5}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                style={{
                    padding: "10px",
                    borderRadius: "50px",
                    marginTop: '60px'
                }}
            >
                {images.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            w="100%"
                            h="auto"
                            overflow="hidden"
                            bg="white" borderRadius="50px"

                        >
                            <Image
                                src={imgUrl}
                                alt={`carousel-slide-${index}`}
                                w="100%"
                                h="290px"
                                borderRadius="inherit"
                                fallbackSrc="https://placehold.co/600x230?text=Image+Not+Found"
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper></ContainerWrapper>
        // </Box>
    );
};

export default CardCarousel;
