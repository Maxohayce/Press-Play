import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.css';


const NavItem = (props) => (
    <li className={classes.navLink} key={props.key}>
        <NavLink exact={props.exact}
            to={props.path}
            activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>            
);

export default NavItem;