import React from 'react';
import { Counter } from './features/counter/Counter';
import { Nav } from './features/nav/Nav'
import './App.css';
import { Header } from './features/header/Header';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
    </div>
  );
}

export default App;
