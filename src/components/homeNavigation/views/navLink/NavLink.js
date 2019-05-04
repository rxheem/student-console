import React from 'react';
import Link from 'react-router-dom/Link';
import Icon from '@material-ui/core/Icon';

const NavLink = props => {
  return (
    <React.Fragment>
      <Link className='nav-link' to={props.to}>
        {props.hasIcon ? <Icon>{props.icon}</Icon> : null}
        {props.title}
      </Link>
    </React.Fragment>
  );
};

export default NavLink;
