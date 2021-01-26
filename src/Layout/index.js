import React from 'react';

import Toolbar from './Toolbar/Toolbar'
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';

import  classes from './layout.css';

const Layout = (props) => (
    <div>
        <Toolbar />
        {/* <SideDrawer /> */}


        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer />
    </div>
);

export { Layout, Toolbar, Footer, SideDrawer };