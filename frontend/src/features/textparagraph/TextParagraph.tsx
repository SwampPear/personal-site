import React from 'react';
import styles from './TextParagraph.module.css'

import { useAppSelector } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'


type TextParagraphProps = {
  children: string | string[]
}

const TextParagraph = (props: TextParagraphProps) => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <p className={`${styles.p} ${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>
      {props.children}
    </p>
  )
}

export default TextParagraph