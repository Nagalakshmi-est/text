import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ImageCarousel = ({ images = [], delay = 3000, loop = true }) => {
    return (
        <Box w="100%" maxW="1250px" mx="auto" borderRadius="4xl" overflow="hidden">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={loop}
                autoplay={{
                    delay,
                    reverseDirection: false,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                style={{
                    borderRadius: "40px", // 4xl = 32px
                    overflow: "hidden"
                }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={img}
                            alt={`Slide ${index + 1}`}
                            w="100%"
                            h="300px"
                            objectFit="cover"
                            borderRadius="0" // don't round here
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default ImageCarousel;
