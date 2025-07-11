import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import doctorImg from '../../Images/DoctorImg.png'

const Staff = [
    { name: 'Dr.Manisha K', role: 'Dermatology', exp: '15yrs' },
    { name: 'Dr.Manisha K', role: 'Dermatologic', exp: '15yrs' },
    { name: 'Dr.Manisha K', role: 'Dermatology', exp: '15yrs' },
    { name: 'Dr.Manisha K', role: 'Dermatology', exp: '15yrs' },
    { name: 'Dr.Manisha K', role: 'Dermatology', exp: '15yrs' },
    { name: 'Dr.Manisha K', role: 'Dermatology', exp: '15yrs' },
    { name: 'Dr.Manisha K', role: 'Dermatology', exp: '15yrs' },
    { name: 'Dr.Manisha K', role: 'Dermatology', exp: '15yrs' },


]

const DocStaff = () => {
    return (
        <Box>
            <Grid templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(6, 1fr)"
            }} gap="6">
                {
                    Staff.map((data) => (
                        <><Box background='white' p='10px' boxShadow='sm' borderRadius='lg'>

                            <VStack gap={0}> <Image src={doctorImg} h='80px' />
                                <Text fontSize='lg' fontWeight='semibold'>{data.name}</Text>
                                <Text>{data.role}</Text>
                                <Text>{data.exp}</Text></VStack>
                        </Box>
                        </>
                    ))
                }</Grid>
        </Box>


    )
}

export default DocStaff