import React from 'react';

import Logo from '../../../assets/images/logo.png';
import './podcastImages.css';

const episodeCard = (props) => (
    <div className={props.image}>
        <img alt="Logo" src={Logo} />
    </div>
);

export default episodeCard;