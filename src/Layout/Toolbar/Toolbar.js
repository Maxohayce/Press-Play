import React from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '../Nav/Nav';
import Button from '../../UI/Button/Button';

import classes from './Toolbar.module.css';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <Nav />
            <form>
                <label for="search">Search</label>
                <input type="text"></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
            <Button btnType="Orange">Register</Button>
        </nav>
    </header>
);

export default toolbar;