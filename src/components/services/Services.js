import React from 'react'
import { Container, Title, Group, Card, CardTitle, CardInfo, CardImage } from './ServicesStyles';


function Services({ children, ...restProps }) {
  return (
    <>
      <Container {...restProps}>{children}</Container>
    </>
  )
}

Services.Title = function ServicesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Services.Group = function ServicesGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}
Services.Card = function ServicesCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>
}
Services.CardTitle = function ServicesCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>
}
Services.CardInfo = function ServicesCardInfo({ children, ...restProps }) {
  return <CardInfo {...restProps}>{children}</CardInfo>
}
Services.CardImage = function ServicesCardImage({ children, ...restProps }) {
  return <CardImage {...restProps}>{children}</CardImage>
}



export default Services
