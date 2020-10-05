import React from 'react'
import { GlobalStyle } from '../Globalstyles';
import ContactContainer from './ContactContainer';
import NavbarContainer from './NavbarContainer';

function LayoutContainer({children}) {
  return (
    <>
    <GlobalStyle />
    <NavbarContainer />
    {children}

    <ContactContainer />

    </>
  )
}

export default LayoutContainer
