import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignIn from '../signIn/SignIn';

// Views
import DropdownNavLink from './views/dropdownNavLink/DropdownNavLink';
import NavLink from './views/navLink/NavLink';

class HomeNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='animated fadeIn'>
        <Navbar className='d-lg-none d-sm-none'>
          <Navbar.Brand href='/'>School Console</Navbar.Brand>
        </Navbar>
        <Navbar id='Home-Navigation' bg='light' variant='light' expand='lg'>
          <Navbar.Brand href='/' className='d-sm-block'>
            School Console
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='home-navbar-nav' />

          <Navbar.Collapse id='navbar-nav'>
            <Nav className='mr-auto'>
              <NavLink title='Home' to='/' />
              <NavDropdown title='Your Role' id='basic-nav-dropdown'>
                <DropdownNavLink title='Administration' />
                <DropdownNavLink title='Admissions' to='' />
                <DropdownNavLink title='Teachers' to='' />
                <DropdownNavLink title='Inventory' to='' />
                <NavDropdown.Divider />
                <DropdownNavLink title='Other Staff' to='' />
              </NavDropdown>
              <NavLink title='Resources' to='' />
              <NavLink title='Contact Us' to='' />
            </Nav>
          </Navbar.Collapse>

          {/* Minified sign in */}
          <SignIn isMinified={true} />
        </Navbar>
      </div>
    );
  }
}

export default HomeNavigation;
