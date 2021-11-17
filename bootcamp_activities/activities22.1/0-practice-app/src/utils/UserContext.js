import React, { createContext, useContext } from 'react';

// Initialize new context for user
const UserContext = createContext();

// We create a custom hook to provide immediate usage of the user context in other components
export const useUserContext = () => useContext(UserContext);

// UserProvider component that holds initial state, returns provider component
export const UserProvider = ({ children }) => {
  const initialState = {
    userinfo: {
      id: 2,
      name: 'chris_user',
      role: 'admin'
    }
  };

  // Provider components expect a value prop to be passed
  return (
    <UserContext.Provider value={initialState}>
      {children}
    </UserContext.Provider>
  );
};
