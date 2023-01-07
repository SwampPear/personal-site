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

const Posts = () => {
  const dispatch = useAppDispatch()
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  const { data, loading, error } = useQuery( QUERY, { pollInterval: 500 } )

  if (error) return <p style={{marginTop: '5rem'}}>Error</p>;

  if (loading) return <p style={{marginTop: '5rem'}}>Loading...</p>;
   
  return data.allPosts.map(( post: any) => (
    <div style={{marginTop: '5rem'}} key={post.postId}>
      <p>
        Post - {post.postId}: {post.title} {post.readingTime}
      </p>
    </div>
  ))
}

export default Posts