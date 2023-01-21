import React from 'react';
import styles from './TextHeader.module.css'

import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'
import { useAppSelector } from '../../app/hooks'


type TextHeaderProps = {
  large?: boolean;
  children: string
}

const TextHeader = (props: TextHeaderProps) => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  if (props.large) {
    return (
      <h1 className={`${styles.large} ${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>
        {props.children}
      </h1>
    )
  } else {
    return (
      <h1 className={`${styles.small} ${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>
        {props.children}
      </h1>
    )
  }
}

export default TextHeader