import React from 'react'
import { Container, Icon, Title, List, Item, Link, Text, DropDownMenu, DropDown } from './NavbarStyles'

function Navbar({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Navbar.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Navbar.Icon = function ({children, ...restProps }) {
return <Icon  {...restProps}>{children}</Icon>
}
Navbar.List = function ({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}
Navbar.Item = function ({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}
Navbar.Link = function ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
Navbar.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Navbar.DropDown = function ({ children, ...restProps }) {
  return <DropDown {...restProps}>{children}</DropDown>
}
Navbar.DropDownMenu = function ({ children, ...restProps }) {
  return <DropDownMenu {...restProps}>{children}</DropDownMenu>
}
export default Navbar
