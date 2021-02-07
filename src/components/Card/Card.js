import React from 'react';

import classes from './Card.module.css'

const card = (props) => (
    <div className={classes.Card} key={props.key}>
        <h6 className={classes.Title}>{props.title}</h6>
        <p className={classes.Body}>{props.body}</p>
    </div>
);

export default card;