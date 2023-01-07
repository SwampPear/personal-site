import React from 'react';
import styles from './Posts.module.css'
import img from '../../image.jpeg'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'

import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query AllPosts {
    allPosts {
      postId
      title
      readingTime
      content
    }
  }
`


const Posts = () => {
  const dispatch = useAppDispatch()
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  const { data, loading, error } = useQuery( QUERY, { pollInterval: 500 } )

  //if (error) return <p style={{marginTop: '35rem'}}>Error</p>;
  //if (loading) return <p style={{marginTop: '5rem'}}>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={img}/>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={img}/>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={img}/>
        </div>
      </div>
      {/*
        data.allPosts.map((post: any) => {
          return (
            <p key={post.postId}>
              Post - {post.postId}: {post.title} {post.readingTime}
            </p>
          )
        })
      */}
    </div>
  )
}

export default Posts