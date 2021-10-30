import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

import thumbVisuTaskBoys from '../public/images/works/visutask.jpg'
import thumbVisuTask from '../public/images/works/visutask_logo.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={1}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hej med dig!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Theil Valnert
          </Heading>
          <p>Software engineering student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/cropped.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        I am a goal seeking, structured and cheerful software engineering student on my 5th semester.
        Based on the semester projects that I have been a part of, I have obtained
        a variety of skills in relation to computer science, as can be seen in the left
        column. I am curious in nature, and always been happily willing to learn
        new subjects in relation to my studies and to optimise work tasks.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2019 - 2021</BioYear>
            
        </BioSection>
        <BioSection>
          <BioYear>2021 - Now</BioYear>
         
        </BioSection>
        <BioSection>
          <BioYear>2021 - Now</BioYear>
            </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Personal life
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
            Born in Hobro, Denmark.
        </BioSection>
        <Paragraph>
        My interests in my spare time are technology, music, weightlifting and hunting. I live with three of my friends from high school in an apartment
in central Aalborg.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/goldflue" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @goldflue
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/danieltheilvalnert/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @danieltheilvalnert
              </Button>
            </Link>
          </ListItem>
         
        </List>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <GridItem
            href="https://www.hestenettet.dk"
            title="Hestenettet"
            thumbnail={thumbVisuTaskBoys}
          >
Hestenettet          </GridItem>
          <GridItem
            href="https://www.visutask.dk"
            title="VisuTask"
            thumbnail={thumbVisuTask}
          >
            Freelancer platform
          </GridItem>
        </SimpleGrid>

      </Section>
    </Container>
  </Layout>
)

export default Home
