import React from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '../Nav/Nav';

import './Toolbar.css';


const toolbar = (props) => (
    <header className="Toolbar">
        <Logo />
        <nav>
            <Nav />
            <div>
                <form>
                    <label for="search">Search</label>
                    <input type="text"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
                <button>Register</button>
            </div>
        </nav>
    </header>
);

export default toolbar;