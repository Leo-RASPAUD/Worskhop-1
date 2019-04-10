import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import Signout from './Signout';

const Toolbar = () => {
  const [user, setUser] = useState({ username: '' });

  const initUser = async () => {
    setUser(await Auth.currentAuthenticatedUser());
  };

  useEffect(() => {
    initUser();
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: 15, backgroundColor: '#282c34', color: 'white', borderBottom: '1px solid #61dafb' }}>
      <div style={{ flex: 1, textAlign: 'left' }}>Athena</div>
      <div>{user.username}</div>
      <Signout />
    </div>
  );
};

export default Toolbar;
