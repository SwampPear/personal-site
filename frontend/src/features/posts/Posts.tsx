import React from 'react'
import styles from './Posts.module.css'
import Link from 'next/link'
import GridContainer from '../gridContainer/GridContainer'
import img from '../../image.jpeg'
import Post from '../post/Post'

import { useQuery, gql } from '@apollo/client'


const QUERY = gql`
  query AllPosts {
    allPosts {
      id
      type
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
    <GridContainer>
      {
        data.allPosts.map((post: any) => {
          return (
            <Link className={styles.link} key={post.id} href={`/posts/${post.title}`}>
              <Post img={img} title={post.title}/>
            </Link>
          )
        })
      }
    </GridContainer>
  )
}

export default Posts