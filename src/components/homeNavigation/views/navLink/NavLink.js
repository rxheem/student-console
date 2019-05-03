import React from 'react';
import Link from 'react-router-dom/Link'

const NavLink = props => {
  return (
    <Link className='nav-link' to={props.to}>
      {props.title}
    </Link>
  )
}

export default NavLink;
