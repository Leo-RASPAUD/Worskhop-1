import React from 'react';
import { Auth } from 'aws-amplify';

const Signout = () => {
  const signout = () => {
    Auth.signOut({ global: true });
  };

  return (
    <button onClick={signout} style={{ padding: 10, borderRadius: 5, color: '#61dafb', backgroundColor: '#282c34' }}>
      Signout
    </button>
  );
};

export default Signout;
