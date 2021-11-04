import React from "react";

function somethingElse() {
  return "Hi";
}

function HelloDiv() {
  const firstName = "Chris!";

  return (
    <div>
      <h1>Hello My Name is {firstName}</h1>
      <h2>Things I like</h2>
      <ul>
        <li>Dropping Internet</li>
        <li>Rx-7's</li>
        <li>My Kids</li>
      </ul>
    </div>
  );
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
