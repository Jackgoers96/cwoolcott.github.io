import React from "react";

function SubContainer(props) {
  return <div data-attr="subContainer" className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default SubContainer;
