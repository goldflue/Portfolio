import Link from 'next/Link'
import Image from 'next/Image'
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span `
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(90deg);
}
`
// Arrived at 13:27 at guide 
const Logo = () => {
    const footPrintImg = `/images/logo`
}

