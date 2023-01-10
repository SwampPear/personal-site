import React from 'react';
import styles from './Header.module.css'
import Icon from '../icon/Icon'
import DarkMode from '../darkmode/DarkMode' 
import GithubLink from '../githublink/GithubLink'

import { useAppSelector, useAppDispatch } from '../../app/hooks'; 
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice';
import { switchPage, NavOptions } from '../nav/navSlice';


const Header = () => {
  const dispatch = useAppDispatch()

  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  // Current URL: https://my-website.com/page_a
const nextURL = 'http://localhost:3000';
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);

// This will replace the current entry in the browser's history, without reloading
window.history.replaceState(nextState, nextTitle, nextURL);

  return (
    <header className={`${darkmodeInit ? (darkmode ? styles.headerToDark : styles.headerFromDark) : ''}`}>
        <div onClick={() => dispatch(switchPage(NavOptions.home))} className={styles.brand}>
          <Icon />
          <span className={`${styles.title} ${darkmodeInit ? (darkmode ? styles.titleToDark : styles.titleFromDark) : ''}`}>
              Michael Vaden
          </span>
        </div>
        <div className={styles.brand}>
          <GithubLink/>
          <DarkMode/>
        </div>
    </header>
  );
}

export default Header