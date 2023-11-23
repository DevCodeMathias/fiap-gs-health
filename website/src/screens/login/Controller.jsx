import React, { useState } from 'react';
import LoginView from './View';
import json from '../../database/data.json';

export default function LoginController() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const auth = (email, password) => {
    const user = json.find(user => user.email === email);

    if (!user || user.password !== password) {
      alert('Fail!');
      return false;
    }

    alert('Success!');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Preencha todos os campos.');
    } else {
      const isAuthenticated = auth(email, password);
      setAuthenticated(isAuthenticated);
    }
  };

  return (
    <LoginView
      email={email}
      password={password}
      handlerEmail={handlerEmail}
      handlerPassword={handlerPassword}
      handleSubmit={handleSubmit}
      authenticated={authenticated}
    />
  );
}
