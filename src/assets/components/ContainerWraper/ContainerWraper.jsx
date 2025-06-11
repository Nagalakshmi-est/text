import { Box } from '@chakra-ui/react';

const ContainerWrapper = ({ children }) => {
    return (
        <Box maxW="1250px" mx="auto" px={{ base: 4, sm: 6, md: 8 }} >
            {children}
        </Box>
    );
};

export default ContainerWrapper;
