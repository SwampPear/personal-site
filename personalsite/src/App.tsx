import React from 'react'
import './App.css'
import { Counter } from './features/counter/Counter';

import Nav from './features/nav/Nav'
import Header from './features/header/Header';
import Graphic from './features/graphic/Graphic'
import TextHeader from './features/textheader/TextHeader';
import Divider from './features/divider/Divider';
import CodeBlock from './features/codeblock/CodeBlock';
import Section from './features/section/Section';

import { selectDarkModeState } from './features/darkmode/darkModeSlice'; 
import { useAppSelector } from './app/hooks'


const App = () => {
  const darkmode = useAppSelector(selectDarkModeState)

  return (
    <div className={`App ${darkmode ? 'body-to-dark' : 'body-from-dark'}`}>
      <Nav/>
      <Header/>
      <Graphic/>
      <div className='check-it-button__container'>
        <a href="www.google.com" className='check-it-button'>
          Check out how I made this &#8594;
        </a>
      </div>
      <Section>
        <TextHeader large={true}>
          a
        </TextHeader>
        <TextHeader>
          a
        </TextHeader>
        <Divider/>
        <CodeBlock/>
        <Counter />
      </Section>
    </div>
  )
}

export default App
