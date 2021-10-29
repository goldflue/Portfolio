import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbVisuTask from '../public/images/works/visutask.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="VisuTask" thumbnail={thumbVisuTask}>
            Freelancer platform
          </WorkGridItem>
        </Section>
        
        
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbVisuTask} title="EXAKT">
            Where I currently work as a student worker / 
          </WorkGridItem>
        </Section>
      </SimpleGrid>


      

      
      
    </Container>
  </Layout>
)

export default Works
