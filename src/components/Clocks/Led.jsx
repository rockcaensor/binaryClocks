import React from "react";
import modules from "./Led.module.css";

const Led = props => {
  if (props.value === 1) {
    return <div className={modules.one} />;
  } else {
    return <div className={modules.null} />;
  }
};

export default Led;
