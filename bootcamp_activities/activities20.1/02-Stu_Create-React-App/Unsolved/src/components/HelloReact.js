import React from 'react';

// components are responsible for rendering content
function HelloReact() {
  const text = 'some text';
  let hiText = "Hello!";

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return (<div>{hiText} World! here is {text}</div>);
}

export default HelloReact;
