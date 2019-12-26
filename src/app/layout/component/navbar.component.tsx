import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
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
        <NavItem style={{ cursor: 'pointer'}}>
          <Link href="/">
            <NavLink>Pocetna</NavLink>
          </Link>
        </NavItem>
        <NavItem style={{ cursor: 'pointer'}}>
          <Link href="/">
            <NavLink>O meni</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent;