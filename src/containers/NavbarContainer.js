import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Navbar, Sidebar } from '../components'

const query = graphql`
{
  phone: file(relativePath: {eq : "icons/phone.png"}) {
     childImageSharp {
      fluid (maxWidth: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  menu: file(relativePath: {eq : "icons/menu.png"}) {
     childImageSharp {
      fluid (maxWidth: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  location: file(relativePath: {eq : "icons/location.png"}) {
     childImageSharp {
      fluid (maxWidth: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  cancel: file(relativePath: {eq : "icons/cancel.png"}) {
    childImageSharp {
     fluid (maxWidth: 64) {
       ...GatsbyImageSharpFluid
     }
   }
 }
 right: file(relativePath: {eq : "icons/right-chevron.png"}) {
  childImageSharp {
   fluid (maxWidth: 64) {
     ...GatsbyImageSharpFluid
   }
 }
}
}`;



function NavbarContainer() {
  const data = useStaticQuery(query);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Navbar>
        {showSidebar ?
          <Navbar.Icon onClick={() => setShowSidebar(false)}>
            <Img fluid={data.cancel.childImageSharp.fluid} />
          </Navbar.Icon>
          :
          <Navbar.Icon onClick={() => setShowSidebar(true)}>
            <Img fluid={data.menu.childImageSharp.fluid} />
          </Navbar.Icon>
        }
        <Link to={"/"}>
        <Navbar.Title>
          <span style={{color: "red"}}>Smart</span>
          <span style={{color: "green"}}>Life</span>
          <span style={{color: "blue"}}>Chemist</span>
          </Navbar.Title></Link>
        <Navbar.List>
          {/* For Mobile */}
          <Navbar.Link href="tel:7427854917">
            <Navbar.Icon>
              <Img fluid={data.phone.childImageSharp.fluid} />
            </Navbar.Icon>
          </Navbar.Link>
          <Navbar.Link href={"https://goo.gl/maps/3rCxs53HVmw3GfBb7"}>
            <Navbar.Icon>
              <Img fluid={data.location.childImageSharp.fluid} />
            </Navbar.Icon>
          </Navbar.Link>
          {/* For Desktop */}
          <Navbar.DropDown>
            <Navbar.Text>Categories</Navbar.Text>
            <Navbar.DropDownMenu>
              <Navbar.Text>Medicines</Navbar.Text>
              <Navbar.Text>Cosmetics</Navbar.Text>
            </Navbar.DropDownMenu>
          </Navbar.DropDown>
          <Navbar.Text>Contact Us</Navbar.Text>
        </Navbar.List>
      </Navbar>

      {/* For Mobile */}
      <Sidebar active={showSidebar}>
        <Sidebar.List>
          <Sidebar.ListTitle>Cateogries</Sidebar.ListTitle>
          <Link to={"/medicines"}>
            <Sidebar.Item>
              <Sidebar.Text>Medicines</Sidebar.Text>
              <Sidebar.Icon>
                <Img fluid={data.right.childImageSharp.fluid} />
              </Sidebar.Icon>
            </Sidebar.Item>
          </Link>
          <Link to={"/cosmetics"}>
            <Sidebar.Item>
              <Sidebar.Text>Cosmetics</Sidebar.Text>
              <Sidebar.Icon>
                <Img fluid={data.right.childImageSharp.fluid} />
              </Sidebar.Icon>
            </Sidebar.Item>
          </Link>
        </Sidebar.List>
      </Sidebar>

    </>
  )
}

export default NavbarContainer