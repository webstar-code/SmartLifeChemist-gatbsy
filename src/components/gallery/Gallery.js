import React from 'react'
import {Container,  Icon, Image} from './GalleryStyles'
import Img from 'gatsby-image';

function Gallery({children, ...restProps}) {
  return (
      <Container {...restProps}>{children}</Container>
  )
}

Gallery.Icon = function GalleryIcon( {src, ...restProps}) {
  return <Icon {...restProps}>
    <Img fluid={src} />
  </Icon>
}

Gallery.Image = function GalleryImage( {src, ...restProps}) {
  return <Image {...restProps}>
    <Img fluid={src} />
  </Image>
}
export default Gallery
