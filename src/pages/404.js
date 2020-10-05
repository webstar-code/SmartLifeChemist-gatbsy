import React from 'react'
import { Link } from 'gatsby';
import { Container, Title, Button } from './404Styles';
import LayoutContainer from '../containers/LayoutContainer'

function Error() {
  return (
      <LayoutContainer>
        <Container>
          <Title>The page you looking for doesn't exist.</Title>
          <Link to="/"><Button>Return Home</Button></Link>
          </Container>        
      </LayoutContainer>

    )
}

export default Error
