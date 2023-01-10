import React from 'react'
import styles from './Works.module.css'
import img from '../../image.jpeg'
import Post from '../post/Post'

import { useQuery, gql } from '@apollo/client'

const QUERY = gql`
  query {
    allWorks {
      workId
      title
      content
    }
  }
`


const Works = () => {
  const { data, loading, error } = useQuery( QUERY, { pollInterval: 500 } )

  if (error) return <></>
  if (loading) return <></>

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      {
        data.allWorks.map((work: any) => {
          return (
            <Post img={img} title={work.title}/>
          )
        })
      }
    </div>
  )
}

export default Works