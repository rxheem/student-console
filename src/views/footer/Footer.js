import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';

import FooterNavItem from './FooterNavItem.js';

const Footer = props => {
  return (
    <footer>
      <Nav className='justify-content-center'>
        <FooterNavItem title='About' to='/about/' />
        <FooterNavItem title='Terms Of Use' to='/terms-of-use/' />
        <FooterNavItem title='Privacy Policy' to='/privacy-policy/' />
        <FooterNavItem title='Join' to='/join/' />
        <FooterNavItem title='Contact' to='/contact/' />
      </Nav>
    </footer>
  );
};

export default Footer;
