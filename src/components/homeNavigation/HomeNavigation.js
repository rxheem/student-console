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
        <Navbar id='Home-Navigation' bg='light' variant='light' expand='lg'>
          <Navbar.Brand className='d-sm-block animated slideInLeft'>
            <span>Console</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='home-navbar-nav' />

          <Navbar.Collapse id='navbar-nav'>
            <Nav className='mr-auto'>
              <NavLink title='Home' to='/' hasIcon={false} icon='home' />
              <NavDropdown title='Your Role' id='basic-nav-dropdown'>
                <DropdownNavLink
                  title='Administration'
                  to='/roles/administration/'
                />
                <DropdownNavLink title='Admissions' to='/roles/admissions/' />
                <DropdownNavLink title='Teachers' to='/roles/teachers/' />
                <DropdownNavLink title='Inventory' to='/roles/inventory/' />
                <NavDropdown.Divider />
                <DropdownNavLink title='Other Staff' to='/roles/other-staff/' />
              </NavDropdown>
              <NavLink title='Resources' to='/resources/' />
              <NavLink title='Contact Us' to='/contact-us/' />
            </Nav>

            {/* Minified sign in */}
            <SignIn isMinified={true} />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HomeNavigation;
