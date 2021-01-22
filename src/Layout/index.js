import React from 'react';

import Toolbar from './Toolbar/Toolbar'
import Footer from './Footer';
import SideDrawer from './SideDrawer/SideDrawer';

const Layout = (props) => (
    <div>
        <main>
            {props.children}
        </main>
    </div>
);

export { Layout, Toolbar, Footer, SideDrawer };