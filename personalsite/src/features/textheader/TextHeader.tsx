import React from 'react';
import styles from './TextHeader.module.css'

import { selectDarkModeState } from '../darkmode/darkModeSlice'
import { useAppSelector } from '../../app/hooks'


type TextHeaderProps = {
  large?: boolean;
  children: string
}

const TextHeader = (props: TextHeaderProps) => {
  const darkmode = useAppSelector(selectDarkModeState)
  if (darkmode) {
    return (
      <h1 className={styles.large}>
        {'t'}
      </h1>
    )
  } else {
    return (
      <h1 className={styles.large}>
        {'f'}
      </h1>
    )
  }
  /*
  if (props.large) {
    return (
      <h1 className={styles.large}>
        {a}
      </h1>
    )
  } else {
    return (
      <h1 className={styles.small}>
        {props.children}
      </h1>
    )
  }*/
}

export default TextHeader