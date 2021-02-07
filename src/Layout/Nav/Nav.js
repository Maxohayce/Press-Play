import React from 'react';

import NavItem from './NavItem/NavItem';
import './Nav.css';

const navs = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/create', name:  'Create a Podcast' },
    { path: '/listen', name: 'Listen to podcasts'}
]

const Nav = (props) => (
        <ul className="navItems">
            {navs.map((navItem, i) => (
                <NavItem exact key={i} path={navItem.path}>{navItem.name}</NavItem>
            ))}
        </ul>
)

export default Nav;