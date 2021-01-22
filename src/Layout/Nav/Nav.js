import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './Nav.css';

const navs = [
    { path: '/', name: 'Home' },
    { path: '/create', name: 'Create Yours' },
    { path: '/about', name:  'About' },
    { path: '/listen', name: 'Listen'}
]

const Nav = (props) => (
        <ul className={classes.navItems}>
            {navs.map((navItem, i) => (
                <NavItem exact key={i} path={navItem.path}>{navItem.name}</NavItem>
            ))}
        </ul>
)

export default Nav;