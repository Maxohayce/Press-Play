import React from "react";

import Footer from "./Footer/Footer";
import Nav from "./Nav";

const Layout = ({children, withFooter}) => (
  <>
    <Nav />
    <main className="container container--layout">{children}</main>
    {withFooter && <Footer />}
  </>
);

export default Layout;
