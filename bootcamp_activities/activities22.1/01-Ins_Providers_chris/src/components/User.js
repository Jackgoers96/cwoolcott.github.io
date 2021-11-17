import React from 'react';
// Import our custom useUserContext hook
import { useUserContext } from '../utils/UserContext';

export default function User() {
  // Assign users variable from our custom hook
  const { userinfo } = useUserContext();

  return (
    <>
      <span>Record:</span>
      <ul>
        {`${userinfo.id}: ${userinfo.name} ${userinfo.role}`}
      </ul>
    </>
  );
}
