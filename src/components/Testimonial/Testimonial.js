import React from 'react';


import classes from './Testimonial.module.css';

const testimonial = (props) => (
    <div className={classes.Testimonial}>
        <img className={classes.Image}alt ="Testimonial" src={props.image} />
        <span className={classes.Card}>
            <h6>{props.name}</h6>
            <h5>{props.title}</h5>
            <p>{props.body}</p>
        </span>
    </div>
);

export default testimonial;