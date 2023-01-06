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
            <span className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}>Work</span>
            <span className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}>Posts</span>
            <span className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}>Contact</span>
        </div>
    </nav>
  );
}

export default Nav