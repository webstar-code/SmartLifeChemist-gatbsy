import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { HeroBanner } from '../components'

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  `;

const query = graphql`
query MyQuery {
  main: file(relativePath: {eq : "7815.jpg"}) {
    ...squareImage
  }
}

`;

function HeroBannerContainer() {
  const data = useStaticQuery(query);
  return (
    <>
      <HeroBanner>
        <HeroBanner.Pane>
        <HeroBanner.Title>Get all medicines and cosmetics</HeroBanner.Title>
        <HeroBanner.Group>
          <HeroBanner.Link href="tel:7427854917">
          <HeroBanner.Button>Call Us</HeroBanner.Button>
          </HeroBanner.Link>
          <HeroBanner.Link href="https://goo.gl/maps/3rCxs53HVmw3GfBb7">
          <HeroBanner.Button>Visit Us</HeroBanner.Button>
          </HeroBanner.Link>
        </HeroBanner.Group>
        </HeroBanner.Pane>
        <HeroBanner.Image>
            <Img fluid={data.main.childImageSharp.fluid} />
        </HeroBanner.Image>
      </HeroBanner>
    </>
  )
}

export default HeroBannerContainer
