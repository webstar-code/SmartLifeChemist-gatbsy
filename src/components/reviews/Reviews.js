import React from 'react'
import { Header, Section, Container, Pane, Item, UserImage, Title, Text, Rating, Image, Bar, BarItem } from './ReviewsStyles';

function Reviews({ children, ...restProps }) {
  return (
    <>
      <Section>
        <Header>Customer Reviews</Header>
        <Container {...restProps}>
          {children}
        </Container>
      </Section>
    </>
  )
}

Reviews.Pane = function ReviewsPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Reviews.Item = function ReviewsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}
Reviews.Title = function ReviewsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Reviews.Text = function ReviewsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Reviews.UserImage = function ReviewsUserImage({ children, ...restProps }) {
  return <UserImage {...restProps}>{children}</UserImage>
}
Reviews.Image = function ReviewsImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}
Reviews.Rating = function ReviewsRating({ children, ...restProps }) {
  return <Rating {...restProps}>{children}</Rating>
}
Reviews.BarItem = function ReviewsBarItem({ children, ...restProps }) {
  return <BarItem {...restProps}>{children}</BarItem>
}
Reviews.Bar = function ReviewsBar({ children, ...restProps }) {
  return <Bar {...restProps}>{children}</Bar>
}

export default Reviews
