import React from 'react';
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


const NavbarComponent = () => (
  <Navbar light expand="md" className="d-flex flex-row flex-wrap justify-content-center custom-navbar pt-4 pb-4" fixed="top">
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

export default NavbarComponent;