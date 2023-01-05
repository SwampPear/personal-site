import React from 'react'
import './App.css'
import { Counter } from './features/counter/Counter';
import Nav from './features/nav/Nav'

import Header from './features/header/Header';
import Graphic from './features/graphic/Graphic'


const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Graphic />

    </div>
  );
}

export default App
