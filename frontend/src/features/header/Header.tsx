import Link from 'next/link'
import styles from './Header.module.css'
import Icon from '../icon/Icon'
import DarkMode from '../darkmode/DarkMode' 
import GithubLink from '../githublink/GithubLink'
import LinkedInLink from '../linkedinLink/LinkedInLink'

import { useAppSelector, useAppDispatch } from '../../app/hooks'; 
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice';
import { switchPage, NavOptions } from '../nav/navSlice';


const Header = () => {
  const dispatch = useAppDispatch()

  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <header className={`${styles.header} ${darkmodeInit ? (darkmode ? styles.headerToDark : styles.headerFromDark) : ''}`}>
      <Link href='/' className={styles.link}>
        <div onClick={() => dispatch(switchPage(NavOptions.home))} className={styles.brand}>
          <Icon />
          <span className={`${styles.title} ${darkmodeInit ? (darkmode ? styles.titleToDark : styles.titleFromDark) : ''}`}>
              Michael Vaden
          </span>
        </div>
      </Link>
      <div className={styles.brand}>
        <LinkedInLink/>
        <GithubLink/>
        <DarkMode/>
      </div>
    </header>
  )
}

export default Header