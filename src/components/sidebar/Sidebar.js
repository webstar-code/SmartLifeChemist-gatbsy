import React from 'react'
import { createPortal } from 'react-dom'
import { Container, List, ListTitle, Item, Text, Icon, LockBody, ReleaseBody } from './SidebarStyles';

function Sidebar({ active, children, ...restProps }) {
  return active ? createPortal(
    <Container {...restProps} bg="#f9f9f9" active={active}>
      <LockBody />
      {children}
    </Container>
    , document.body
  ) : <ReleaseBody />
}

Sidebar.List = function ({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Sidebar.ListTitle = function ({ children, ...restProps }) {
  return <ListTitle {...restProps}>{children}</ListTitle>
}

Sidebar.Item = function ({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Sidebar.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}


Sidebar.Icon = function ({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>
}



export default Sidebar
