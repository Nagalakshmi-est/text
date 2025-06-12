import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
];

const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Box maxW="900px" mx="auto" mt={8}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <Box key={index}>
                        <Image src={src} alt={`slide-${index}`} w="100%" h="auto" borderRadius="lg" />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default SlickCarousel;
