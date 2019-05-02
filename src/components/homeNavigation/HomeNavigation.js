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
      <Navbar id='Home-Navigation' bg='light' expand='lg'>
        <Navbar.Brand href='#home'>School Console</Navbar.Brand>
        <Navbar.Toggle aria-controls='home-navbar-nav' />

        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Minified sign in */}
        <SignIn isMinified={true} />
      </Navbar>
    );
  }
}

export default HomeNavigation;
