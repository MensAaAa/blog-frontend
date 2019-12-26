import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import '../styles/navbar.styles.scss';


const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false)
  const navBackgroundColor = !scroll ? 'transparent' : 'black';

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 500 && !scroll) {
        setScroll(true)
      }
      if (window.scrollY < 500 && scroll) {
        setScroll(false)
      }
    })
  }, [scroll]);


  return (
    <Navbar light expand="md" className="d-flex flex-row flex-wrap justify-content-center custom-navbar pt-4 pb-4" fixed="top" style={{ backgroundColor: navBackgroundColor }}>
      <Nav className="" navbar>
        <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
              </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
                </DropdownItem>
            <DropdownItem>
              Option 2
                </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
                </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent;