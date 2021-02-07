import React from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '../Nav/Nav';
import Button from '../../components/Button/Button';

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