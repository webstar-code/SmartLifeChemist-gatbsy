import React from 'react'
import { Container, Row, Image } from './BrandsStyles';

function Brands({ children, ...restProps }) {
  return (
    <Container {...restProps}>
        {children}
    </Container>

  )
}


Brands.Row = function ({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}
Brands.Image = function ({children, ...restProps }) {
return <Image {...restProps}>{children}</Image>
}
export default Brands
