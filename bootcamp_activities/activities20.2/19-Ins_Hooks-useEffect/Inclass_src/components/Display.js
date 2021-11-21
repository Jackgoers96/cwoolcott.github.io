import React, { useState, useEffect } from 'react';

export default function Display() {
  //const [count, setCount] = useState(0);
  let count = 0

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    localStorage.setItem('myCount', count);
  }, [count]);

  const handleIncrease = () => {
    count++;
  };

  const handleDecrease = () => {
    count--
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}
