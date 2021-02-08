import React from 'react';
import './Icon.css';


const Icon =  (props) => <span className="Icons"><i className={props.class}></i><p>{props.title}</p></span> ;

export default Icon;