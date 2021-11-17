import React, { useState } from "react";

function ChangeGreeting(props) {
  return (
    <button onClick={props.handleClick}>
      Toggle Name
    </button>
  );
}

export default ChangeGreeting;

