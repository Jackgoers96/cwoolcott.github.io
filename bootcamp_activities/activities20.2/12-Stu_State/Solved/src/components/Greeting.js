// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // The declare a state variable using `useState`, we give a name of `greeting` and also give the method to update it a name, `setGreeting`
  // useState accepts one argument for the default or initial value of the state variable. In our case, we set it to "Welcome, React rules!".
  const [greeting, setGreeting] = useState('Welcome the following students to class!');
  const [group, setGroup] = useState(["John", "Grace", "Jared"]);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        <p className="card-text">{greeting}</p>
        <ul>
          <li>{group[0]}</li>
          <li>{group[1]}</li>
          <li>{group[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
