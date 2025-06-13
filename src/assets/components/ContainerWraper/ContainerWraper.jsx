import { Box } from '@chakra-ui/react';
// import img from '../../Images/BgImage.png'

const ContainerWrapper = ({ children }) => {
    return (
        <Box maxW="1300px" mx="auto" px={{ base: 4, sm: 6, md: 8 }}
        >
            {children}
        </Box>
    );
};

export default ContainerWrapper;
