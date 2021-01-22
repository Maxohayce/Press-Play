import React from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '../Nav/Nav';


const toolbar = (props) => (
    <header>
        <Logo />
        <nav>
            <Nav />
            <div>
                <form>
                    <label for="search">Search</label>
                    <input type="text"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <button>Register</button>
        </nav>
    </header>
);

export default toolbar;