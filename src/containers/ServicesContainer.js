import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Services } from '../components';

export const squareImage = graphql`
  fragment smallImage on File {
    childImageSharp {
      fluid (maxWidth: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  `;

const query = graphql`
 {
  hours: file(relativePath: {eq : "services/24hour.png"}) {
    ...smallImage
  }
  fast: file(relativePath: {eq : "services/fast.png"}) {
    ...smallImage
  }
  verified: file(relativePath: {eq : "services/verified.png"}) {
    ...smallImage
  }
}

`;

function ServicesContainer() {
  const data = useStaticQuery(query);

  return (
    <>
      <Services>
        <Services.Title>Our Services</Services.Title>
        <Services.Group>
          <Services.Card>
            <Services.CardImage><Img fluid={data.hours.childImageSharp.fluid} /></Services.CardImage>
            <Services.CardTitle>24 hours open</Services.CardTitle>
            <Services.CardInfo>We are open for 24 hours providing all the needs to our customer at anytime.</Services.CardInfo>
          </Services.Card>
          <Services.Card>
            <Services.CardImage><Img fluid={data.fast.childImageSharp.fluid} /></Services.CardImage>
            <Services.CardTitle>Fast & Free Delivery</Services.CardTitle>
            <Services.CardInfo>Get all your products deleiverd at your home fast & free at just one call.</Services.CardInfo>
          </Services.Card>
          <Services.Card>
            <Services.CardImage><Img fluid={data.verified.childImageSharp.fluid} /></Services.CardImage>
            <Services.CardTitle>All Branded Products</Services.CardTitle>
            <Services.CardInfo>We bring you the most trusted and legit products from the industry.</Services.CardInfo>
          </Services.Card>
        </Services.Group>
      </Services>
    </>
  )
}

export default ServicesContainer
