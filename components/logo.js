import Link from 'next/Link'
import Image from 'next/Image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span `
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
border-radius: 50%;

&:hover img {
    transform: rotate(30deg);
}
`
// Arrived at 13:27 at guide 
const Logo = () => {
    const footPrintImg = `/images/mig${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="Logo"></Image>
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight='bold'
                        ml={3}
                        >
                            Daniel Theil Valnert
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo

