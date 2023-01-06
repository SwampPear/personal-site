import React from 'react';
import styles from './Nav.module.css'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'

import { switchPage, NavOptions } from './navSlice';

const Nav = () => {
  const dispatch = useAppDispatch()
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <nav>
      <div className={styles.content}>
        <span 
          onClick={() => dispatch(switchPage(NavOptions.work))} 
          className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}
        >
          Work
        </span>
        <span 
          onClick={() => dispatch(switchPage(NavOptions.posts))} 
          className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}
        >
          Posts
        </span>
        <span 
          onClick={() => dispatch(switchPage(NavOptions.contact))} 
          className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}
        >
          Contact
        </span>
      </div>
    </nav>
  )
}

export default Nav