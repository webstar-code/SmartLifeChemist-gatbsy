import React from 'react'
import { Container, Header, Text } from './AboutStyles';

function About({children, ...restProps}) {
  return (
    <Container>
      <Header>About Us</Header>
      {children}
    </Container>
  )
}

About.Text = function AboutText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

export default About
