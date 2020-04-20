import React from 'react';
import logo from './logo.svg';
import { Register } from './auth/register.js';
import { Login } from './auth/login.js';
import { Home } from './home/home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedComponent from './auth/protected';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path = "/login" component = {Login} />
      <Route path = "/Register" component = {Register} />
      <ProtectedComponent path= "/home" component= {Home} />
    </BrowserRouter>
  );
}

export default App;
