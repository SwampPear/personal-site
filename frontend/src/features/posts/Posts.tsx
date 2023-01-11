import React from 'react'
import GridContainer from '../gridContainer/GridContainer'
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
    <GridContainer>
      {
        data.allPosts.map((post: any) => {
          return (
            <Post img={img} title={post.title}/>
          )
        })
      }
    </GridContainer>
  )
}

export default Posts