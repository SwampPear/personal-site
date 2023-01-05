import React from 'react'
import './App.css'
import { Counter } from './features/counter/Counter';

import Nav from './features/nav/Nav'
import Header from './features/header/Header';
import Graphic from './features/graphic/Graphic'
import TextHeader from './features/textheader/TextHeader';


const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Graphic />
      <div>
        <TextHeader large={true}>
          a
        </TextHeader>
        <TextHeader>
          a
        </TextHeader>
      </div>

    </div>
  );
}

export default App
