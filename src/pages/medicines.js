import React from 'react'
import ProductBrand from '../components/templates/ProductBrand'
import LayoutContainer from '../containers/LayoutContainer'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
{
  allContentfulMedicineBrands {
    nodes {
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      name
    }
  }
}
`;


function Medicines() {
  const data = useStaticQuery(query);

  return (
    <div>
      <LayoutContainer>
        <ProductBrand>
          <ProductBrand.Header>Medicines</ProductBrand.Header>
          <ProductBrand.Items>
            {data.allContentfulMedicineBrands.nodes.map(item => (
              <ProductBrand.Item>
                <ProductBrand.Name>{item.name}</ProductBrand.Name>
                <ProductBrand.Image>
                  <Img fluid={item.image.fluid} />
                </ProductBrand.Image>
              </ProductBrand.Item>
            ))}
          </ProductBrand.Items>
        </ProductBrand>
      </LayoutContainer>
    </div>
  )
}


export default Medicines
