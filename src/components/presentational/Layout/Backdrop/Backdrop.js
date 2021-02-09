import React from "react";
import "./backdrop.css";

const Backdrop = ({ backgroundImage, children }) => (
  <div
    className="backdrop"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="container--backdrop-children">{children}</div>
  </div>
);

export default Backdrop;
