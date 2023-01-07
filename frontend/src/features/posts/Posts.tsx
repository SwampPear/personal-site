import React from 'react';
import styles from './Posts.module.css'

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

const parseData = (data: any) => {
    return (
        data.allPosts.map((post: any) => {

        <p key={post.postId}>
            Post - {post.postId}: {post.title} {post.readingTime}
        </p>
      })
    )
}

const Posts = () => {
  const dispatch = useAppDispatch()
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  const { data, loading, error } = useQuery( QUERY, { pollInterval: 500 } )

  if (error) return <p style={{marginTop: '35rem'}}>Error</p>;
  if (loading) return <p style={{marginTop: '5rem'}}>Loading...</p>;

  alert(JSON.stringify(data.allPosts))

  return (
    <div className={styles.container}>
      {
        data.allPosts.map((post: any) => {
          return (
            <p key={post.postId}>
              Post - {post.postId}: {post.title} {post.readingTime}
            </p>
          )
        })
      }
    </div>
  )
}

export default Posts