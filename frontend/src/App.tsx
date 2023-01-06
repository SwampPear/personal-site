import React from 'react'
import './App.css'

import me from './me.jpg'

import Nav from './features/nav/Nav'
import Header from './features/header/Header';
import Home from './features/home/Home'

import { selectDarkModeInit, selectDarkModeState } from './features/darkmode/darkModeSlice'; 
import { useAppSelector } from './app/hooks'


const App = () => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <div className={`App ${darkmodeInit ? (darkmode ? 'app-to-dark' : 'app-from-dark') : ''}`}>
      <Nav/>
      <Header/>
      <Home/>
      
    </div>
  )
}

export default App
