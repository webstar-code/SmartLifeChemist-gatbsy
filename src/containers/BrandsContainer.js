import React from 'react'
import { Brands } from '../components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
 {
  allFile(filter: {relativeDirectory: {eq: "brands"}}) {
    nodes{
      childImageSharp{
        fluid(grayscale: true){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}



`;


function BrandsContainer() {
  const data = useStaticQuery(query);
  return (
    <>
      <Brands>

        <Brands.Row speed="5s">
            {data.allFile.nodes.map((item,index) => (
              <Brands.Image key={index}>
              <Img fluid={item.childImageSharp.fluid} />
              </Brands.Image>
            ))}
        </Brands.Row>
     
      </Brands>

    </>
  )
}

export default BrandsContainer
