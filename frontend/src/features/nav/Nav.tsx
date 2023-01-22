import styles from './Nav.module.css'
import Link from 'next/link'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'

import { switchPage, NavOptions } from './navSlice';

const Nav = () => {
  const dispatch = useAppDispatch()
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <Link href='/' className={styles.link}>
          <span 
            onClick={() => dispatch(switchPage(NavOptions.work))} 
            className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}
          >
            Work
          </span>
        </Link>
        <Link href='/' className={styles.link}>
          <span 
            onClick={() => dispatch(switchPage(NavOptions.posts))} 
            className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}
          >
            Posts
          </span>
        </Link>
        <Link href='/' className={styles.link}>
          <span 
            onClick={() => dispatch(switchPage(NavOptions.contact))} 
            className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}
          >
            Contact
          </span>
        </Link>
        <Link href='/fun-mode' className={styles.link}>
          <span 
            className={`${styles.scrollButton} ${darkmodeInit ? (darkmode ? styles.scrollButtonToDark : styles.scrollButtonFromDark) : ''}`}
          >
            Fun Mode
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Nav