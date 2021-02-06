import React from 'react';

import classes from './Card.module.css'

const card = (props) => (
    <div className={classes.Card} key={props.key}>
        <img className={classes.cardImage}src={props.image} alt="avatar" />
        {console.log(props)} 
        <div className={classes.Content}>
            <h2>{props.episode}</h2>
            <h6>{props.time}</h6>
            <p>{props.title}</p>
        </div>
    </div>
);

export default card;