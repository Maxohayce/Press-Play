import React from "react";

import Footer from "./Footer/Footer";

import classes from "./layout.css";
import Nav from "./Nav";

const Layout = (props) => (
  <>
    <Nav />
    <main className={classes.Content}>{props.children}</main>
    {/* <Footer /> */}
  </>
);

export default Layout;
