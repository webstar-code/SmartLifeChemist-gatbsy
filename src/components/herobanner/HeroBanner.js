import React from 'react'
import { Frame, Container, Pane, Title, Group, Button, Image, Link } from './HeroBannerStyles';
function HeroBanner({ children, ...restProps }) {
  return (
    <Frame>
      <Container {...restProps}>
        {children}
      </Container>
    </Frame>
  )
}


HeroBanner.Pane = function HeroBannerPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
HeroBanner.Title = function HeroBannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
HeroBanner.Group = function HeroBannerGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}
HeroBanner.Button = function HeroBannerButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
HeroBanner.Image = function HeroBannerImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}
HeroBanner.Link = function HeroBannerLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}


export default HeroBanner
