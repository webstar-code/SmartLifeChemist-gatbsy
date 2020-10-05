import React from 'react'
import { Gallery } from '../components'
import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';



const query = graphql`
query All {
  allFile (filter: {relativeDirectory: {eq: "photos"}}) {
    nodes {
      childImageSharp{
        fluid(quality: 100) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }    
  }

  right: file(relativePath: {eq : "icons/right-chevron.png"}) {
      childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  left: file(relativePath: {eq : "icons/left-chevron.png"}) {
      childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

}

`;


function GalleryContainer() {
  const data = useStaticQuery(query);
  const photoslength = data.allFile.nodes.length;
  const [slideIndex, setSlideIndex] = useState(1);
  const filterImage = data.allFile.nodes.filter(item => (item.childImageSharp.fluid.originalName === `photo${slideIndex}.jpg`))
  return (
    <>
      <Gallery>
        <Gallery.Image src={filterImage[0].childImageSharp.fluid} />
        <Gallery.Icon src={data.left.childImageSharp.fluid} left="calc(100% - 90%)" 
        onClick={() => slideIndex <= 1 ? setSlideIndex(photoslength) : setSlideIndex(slideIndex - 1)} />        
        <Gallery.Icon src={data.right.childImageSharp.fluid} right="calc(100% - 90%)" 
        onClick={() => slideIndex >=photoslength ? setSlideIndex(1) : setSlideIndex(slideIndex + 1)} />
      </Gallery>
    </>
  )
}

export default GalleryContainer
