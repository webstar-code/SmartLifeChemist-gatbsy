import React from 'react'
import { Container,Header, Items, Item, Name, Image } from './ProductBrandStyles';

function ProductBrand({children, ...restProps}) {
  return (
    <>
      <Container {...restProps}>
        {children}
      </Container>
    </>
  )
}

ProductBrand.Header = function ProductBrandHeader({children, ...restProps}) {
  return <Header {...restProps}>{children}</Header>
}

ProductBrand.Items = function ProductBrandItems({children, ...restProps}) {
  return <Items {...restProps}>{children}</Items>
}

ProductBrand.Item = function ProductBrandItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
}
ProductBrand.Name = function ProductBrandName({children, ...restProps}) {
  return <Name {...restProps}>{children}</Name>
}

ProductBrand.Image = function ProductBrandImage({children, ...restProps}) {
  return <Image {...restProps}>{children}</Image>
}



export default ProductBrand
