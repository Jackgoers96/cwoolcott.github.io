import React, { useEffect } from 'react';
import { UserProvider } from './utils/UserContext';
import User from './components/User';
import './jass.css';
import './app.css';

function App() {
  const title = 'Lastest User';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="app">
      <h1>Some Application</h1>
      <h4 style={{ color: 'grey' }}>{title}</h4>
      {/* Provider wraps all the logic that handles/updates our state */}
      <UserProvider>
        <User />
      </UserProvider>
    </div>
  );
}

export default App;
