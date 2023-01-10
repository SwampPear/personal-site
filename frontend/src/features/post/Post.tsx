import React from 'react';
import styles from './Post.module.css'

import { useAppSelector } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'
import Image, { StaticImageData } from 'next/image'


type PostProps = {
  img: string  | StaticImageData;
  title: string;
}


const Post = (props: PostProps) => {
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={props.img} alt=''/>
      </div>
      <span className={`${styles.text} ${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>{props.title}</span>
    </div>
  )
}

export default Post