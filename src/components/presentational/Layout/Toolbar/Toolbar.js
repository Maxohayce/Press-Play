import React from 'react';
import Logo from '../../Logo/Logo';
import Nav from '../Nav/Nav';

import classes from './Toolbar.module.css';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <Nav />
        </nav>
    </header>
);

export default toolbar;