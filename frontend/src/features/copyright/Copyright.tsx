import styles from './Copyright.module.css'

import { useAppSelector } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'


const Copyright = () => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <div className={`${styles.container} ${darkmodeInit ? (darkmode ? styles.copyrightToDark : styles.copyrightFromDark) : ''}`}>
      &#169; Michael Vaden. All Rights Reserved.
    </div>
  )
}

export default Copyright