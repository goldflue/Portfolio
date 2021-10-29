import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.5} fontSize="sm">
      &copy; {new Date().getFullYear()} Daniel Theil Valnert 
    </Box>
    
  )
}

export default Footer
