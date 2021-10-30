import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import FaceCubeLoader from '../face-cube-loader'
import dynamic from 'next/dynamic'

const LazyVoxelFace = dynamic(() => import('../face-cube'), {
  ssr: false,
  loading: () => <FaceCubeLoader /> 
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" value="👨‍💻" type="image/x-icon" />
        <meta property="og:site_name" content="Daniel Theil Valnert portefølje" />
        <meta property="og:type" content="website" />
        <title>Daniel Theil Valnert</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelFace />

        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
