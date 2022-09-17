import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'

const Home: NextPage = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <p>SignIn to create a repository with sample codes!</p>
    </Container>
  )
}

export default Home