import React from 'react';
import logo from './assets/img/logo.png'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Main from './pages/MainPage'

import './App.css'
function App() {
  return (
    <div>
      <img src={logo} className="Logo" alt="loldesign logo"></img>
      <Main></Main>
    
    </div>
  );
}

export default App;
