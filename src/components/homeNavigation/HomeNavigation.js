import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignIn from '../signIn/SignIn';

class HomeNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar id='Home-Navigation' bg='light' variant='light' expand='lg'>
        <Navbar.Brand href='/'>School Console</Navbar.Brand>
        <Navbar.Toggle aria-controls='home-navbar-nav' />

        <Navbar.Collapse id='navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Why Console</Nav.Link>
            <Nav.Link href='#link'>Features</Nav.Link>
            <NavDropdown title='Your Role' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.2'>Principal</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>
                Administration
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Amissions</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Teacher</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Inventory</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Other Staff
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#home'>Resources</Nav.Link>
            <Nav.Link href='#link'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Minified sign in */}
        <SignIn isMinified={true} />
      </Navbar>
    );
  }
}

export default HomeNavigation;
