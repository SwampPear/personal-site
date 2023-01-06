import React from 'react'
import './App.css'

import me from './me.jpg'

import Nav from './features/nav/Nav'
import Header from './features/header/Header';
import Graphic from './features/graphic/Graphic'
import TextHeader from './features/textheader/TextHeader';
import TextParagraph from './features/textparagraph/TextParagraph'
import Divider from './features/divider/Divider';
import CodeBlock from './features/codeblock/CodeBlock';
import Section from './features/section/Section';

import { selectDarkModeInit, selectDarkModeState } from './features/darkmode/darkModeSlice'; 
import { useAppSelector } from './app/hooks'


const App = () => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <div className={`App ${darkmodeInit ? (darkmode ? 'app-to-dark' : 'app-from-dark') : ''}`}>
      <Nav/>
      <Header/>
      <Graphic/>
      <div className='check-it-button__container'>
        <a href="www.google.com" className='check-it-button'>
          Check out how I made this &#8594;
        </a>
      </div>
      <Section>
        <div className='welcome'>
          <div className='welcome__text'>
            <TextHeader>
              Michael Vaden
            </TextHeader>
            <TextParagraph>
              developer ❀ designer
            </TextParagraph>
            <Divider/>
          </div>
          <img className='welcome__img' src={me}/>
        </div>
        <div>
          <TextParagraph>
            Hey, I'm Michael.
          </TextParagraph>
        </div>
      </Section>
    </div>
  )
}

export default App
