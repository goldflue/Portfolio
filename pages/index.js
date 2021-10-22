import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
    return (
    <Container>
        <Box borderRadius="lg" bg="green" p={3}  mb={6} align="center">
         Hello Pøls Pøls Pøls Pøls
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Daniel Theil Valnert
                </Heading>
                <p>Software engineering student | Co-founder of <a href="https://visutask.dk">VisuTask</a> | Retard</p>
            </Box> 
        </Box>
    </Container>
    )
}

export default Page