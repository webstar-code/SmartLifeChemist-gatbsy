import React from 'react'
import { Section, Container, Header, Title, Pane, Text, Item, Icon, Map, Details, Link } from './ContactStyles'
import Img from 'gatsby-image';

function Contact({ children, ...restProps }) {
  return (
    <Section>
    <Container {...restProps}>   
      {children}
    </Container>
    </Section>
  )
}

Contact.Header = function ({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}
Contact.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Contact.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Contact.Pane = function ({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Contact.Details = function ({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>
}
Contact.Item = function ({ ...restProps }) {
  return <Item {...restProps} />
}
Contact.Icon = function ({ src, ...restProps }) {
  return <Icon {...restProps}>
    <Img fluid={src} />
  </Icon>
}
Contact.Map = function ({ children, ...restProps }) {
  return <Map {...restProps}>{children}</Map>
}
Contact.Link = function ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}



export default Contact
