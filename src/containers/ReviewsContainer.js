import React from 'react'
import { Reviews } from '../components'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
{
  rating:file (relativePath: {eq: "icons/rating.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;


function ReviewsContainer() {
  const data = useStaticQuery(query);

  return (
    <>
      <Reviews>
        <Reviews.Pane width="60%">
          <Reviews.Item>
            <Reviews.Title><Reviews.UserImage>
            </Reviews.UserImage>S V</Reviews.Title>
            <Reviews.Text>""So if you're a bachelor and fallen sick you can buy meds and packed food too."</Reviews.Text>
          </Reviews.Item>
          <Reviews.Item>
            <Reviews.Title><Reviews.UserImage>
            </Reviews.UserImage>Ashish Verma</Reviews.Title>
            <Reviews.Text>"Baner/ Balewadi best medicine store. Offers 24 hours service. If required delivers at home for no extra cost.  polite service... availability is good....decency maintained.....!!!!"</Reviews.Text>
          </Reviews.Item>
          <Reviews.Item>
            <Reviews.Title><Reviews.UserImage>
            </Reviews.UserImage>Harish N</Reviews.Title>
            <Reviews.Text>"Great 24 hours service. Got medicine at 12 midnight. Appreciate the help. Bless you"</Reviews.Text>
          </Reviews.Item>
        </Reviews.Pane>

        <Reviews.Pane width="40%;">
          <Reviews.Rating>
            <Reviews.Text>4.7</Reviews.Text>
            <Reviews.Image>
              <Img fluid={data.rating.childImageSharp.fluid} />
            </Reviews.Image>
          </Reviews.Rating>
          <Reviews.BarItem>
            <Reviews.Text>5</Reviews.Text>
            <Reviews.Bar width="100%"></Reviews.Bar>
          </Reviews.BarItem>
          <Reviews.BarItem>
            <Reviews.Text>4</Reviews.Text>
            <Reviews.Bar width="50%"></Reviews.Bar>
          </Reviews.BarItem>
          <Reviews.BarItem>
            <Reviews.Text>3</Reviews.Text>
            <Reviews.Bar width="40%"></Reviews.Bar>
          </Reviews.BarItem>
          <Reviews.BarItem>
            <Reviews.Text>2</Reviews.Text>
            <Reviews.Bar width="20%"></Reviews.Bar>
          </Reviews.BarItem>
          <Reviews.BarItem>
            <Reviews.Text>1</Reviews.Text>
            <Reviews.Bar width="10%"></Reviews.Bar>
          </Reviews.BarItem>
        </Reviews.Pane>
      </Reviews>
    </>
  )
}

export default ReviewsContainer
