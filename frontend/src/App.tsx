import React from 'react'
import './App.css'

import me from './me.jpg'

import Nav from './features/nav/Nav'
import Header from './features/header/Header';
import Home from './features/home/Home'
import Posts from './features/posts/Posts';
import Works from './features/works/Works'
import Blog from './features/blog/Blog';
import Copyright from './features/copyright/Copyright';

import { selectDarkModeInit, selectDarkModeState } from './features/darkmode/darkModeSlice'; 
import { useAppSelector } from './app/hooks'

import { selectNavPage, NavOptions } from './features/nav/navSlice';


const handlePage = (page: NavOptions) => {
  switch( page ) {
    case(NavOptions.home):
      return <Home/>
    case(NavOptions.work):
      return <Works/>
    case(NavOptions.posts):
      return <Posts/>
  }
}



const App = () => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)
  const page = useAppSelector(selectNavPage)

  // handles darkmode animations for body
  /*
  if (darkmodeInit) {
    if (darkmode) {
      document.querySelector('body')?.classList.remove('app-from-dark')
      document.querySelector('body')?.classList.add('app-to-dark')
    } else {
      document.querySelector('body')?.classList.remove('app-to-dark')
      document.querySelector('body')?.classList.add('app-from-dark')
    }
  }
  */

  return (
    <div className={`App ${darkmodeInit ? (darkmode ? 'app-to-dark' : 'app-from-dark') : ''}`}>
      <Nav/>
      <Header/>
      {handlePage(page)}
      <Copyright/>
    </div>
  )
}

export default App
