import React, { useState } from "react";
import ChangeGreeting from "../../components/ChangeGreeting";

function Greeting(props) {
  let element;
  if (props.text) {
    element = (
      <p>
        Hello! My name is Chris.
      </p>
    );
  } else {
    element = (
      <p>How Are You?</p>
    );
  }
  return (
    <div>
      {element}
      <ChangeGreeting handleClick={props.handleClick} />
    </div>
  );
}

export default Greeting;

