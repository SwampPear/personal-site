import React from 'react';
import styles from './Post.module.css'


type PostProps = {
  img: string;
  title: string;
}


const Post = (props: PostProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.img}/>
      </div>
      <span className={styles.text}>{props.title}</span>
    </div>
  )
}

export default Post