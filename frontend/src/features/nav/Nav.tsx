import React from 'react';
import styles from './Nav.module.css'

import { useAppSelector } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'

const Nav = () => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <nav>
        <div className={styles.content}>
            <a href="https://www.google.com" className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}>Work</a>
            <a href="https://www.google.com" className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}>Posts</a>
            <a href="https://www.google.com" className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}>Contact</a>
        </div>
    </nav>
  );
}

export default Nav