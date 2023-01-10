import React from 'react'
import styles from './Posts.module.css'
import img from '../../image.jpeg'
import Post from '../post/Post'

import { useQuery, gql } from '@apollo/client'

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
  const { data, loading, error } = useQuery( QUERY, { pollInterval: 500 } )

  if (error) return <></>
  if (loading) return <></>

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      {
        data.allPosts.map((post: any) => {
          return (
            <Post img={img} title={post.title}/>
          )
        })
      }
    </div>
  )
}

export default Posts