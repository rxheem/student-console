import React from 'react';
import Link from 'react-router-dom/Link'

const DropdownNavLink = props => {
  return (
    <Link className='dropdown-item' to={props.to}>
      {props.title}
    </Link>
  )
}

export default DropdownNavLink;
