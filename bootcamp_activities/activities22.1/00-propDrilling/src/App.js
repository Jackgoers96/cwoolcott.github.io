import React, { useState } from "react";

import Greeting from "./components/Greeting";

function App() {
  const [textSwitch, setTextSwitch] = useState(true);
  return (
    <div>
      <Greeting
        text={textSwitch}
        handleClick={() => setTextSwitch(!textSwitch)}
      />
    </div>
  );
}

export default App;
