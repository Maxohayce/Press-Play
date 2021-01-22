import React from 'react';

import Logo from '../../components/Logo/Logo';
import Nav from '../Nav/Nav';
import classes from './SideDrawer.css';

const sideDrawer = () => {


    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <Nav />
            </nav>
        </div>
    );
};

export default sideDrawer;

