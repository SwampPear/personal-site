import React from 'react';
import styles from './Post.module.css'

import { useAppSelector } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'


type PostProps = {
  img: string;
  title: string;
}


const Post = (props: PostProps) => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.img}/>
      </div>
      <span className={`${styles.text} ${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>{props.title}</span>
    </div>
  )
}

export default Post