import React, { useState } from 'react';
import CardBody from './CardBody';

// We need to import counter at App
export default function Counter() {
  // set state of count to inital value of 0 and the function to change it
  let [count, setCount] = useState(0);

  // Handling click event to add 1 to current count using the setCount from useState
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // Handling click event to sub 1 to current count using the setCount from useState
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* count, handleIncrement, handleDecrement props are being passed */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
