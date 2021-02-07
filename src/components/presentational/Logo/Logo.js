import React from 'react';

import pressPlay from '../../../assets/images/press-play.svg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={pressPlay} alt="pressplay"/>
    </div>
);

export default logo;