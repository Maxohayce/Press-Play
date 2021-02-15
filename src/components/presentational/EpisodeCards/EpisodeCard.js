import React from "react";

import Logo from "../../../assets/images/logo.png";
import "./podcastImages.css";

const episodeCard = ({ src }) => (
  <div className="column-1 column-sm-2 column-md-3 column-lg-4 my-2 mx-sm-2">
    <img className="img-fluid" alt="Logo" src={src} />
  </div>
);

export default episodeCard;
