import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="VisuTask">
    <Container>
      <Title>
        VisuTask <Badge>2021-Present</Badge>
      </Title>
      <P>
        Freelance platform
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.visutask.dk/">
            https://www.visutask.dk/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress</span>
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/visutask_logo.png" alt="VisuTask" />
    
    </Container>
  </Layout>
)

export default Work
