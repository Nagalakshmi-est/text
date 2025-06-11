import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const ImageCarousel = ({ images = [], delay = 2500, loop = true }) => {
    return (
        <Box w="100%" maxW="1250px" mx="auto" borderRadius="xl" overflow="hidden">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={loop}
                autoplay={{ delay, reverseDirection: false, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image src={img} alt={`Slide ${index + 1}`} w="100%" h="300px" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default ImageCarousel;
