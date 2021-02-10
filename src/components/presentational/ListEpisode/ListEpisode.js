import React from 'react';

import Button from '../Button/Button';


import './ListEpisode.css';

const listEpisode = (props) => (
    <div className="listEpisode">
        <span className="Detail">
            <h6>{props.title}</h6>
            <p>{props.time}</p>
        </span>
        <Button btnType="Play" ><i className="fa fa-play"></i></Button>
    </div>
);

export default listEpisode;