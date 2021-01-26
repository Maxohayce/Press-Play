import React from 'react';

import Logo from '../../components/Logo/Logo';
import Nav from '../Nav/Nav';

import './Footer.css';

const Footer = (props) => (
    <div className="Footer">
        <Logo />
        <nav className="FooterNav">
            <Nav />
        </nav>
    </div>
)

export default Footer;