import React from "react";
import "./backdrop.css";

const Backdrop = ({ backgroundImage, children, minHeight }) => (
  <div
    className="backdrop"
    style={{ backgroundImage: `url(${backgroundImage})`, ...(minHeight && {minHeight})  }}
  >
    <div className="container--backdrop-children" 
    style={{ ...(minHeight && {minHeight})  }}>{children}</div>
  </div>
);

export default Backdrop;
