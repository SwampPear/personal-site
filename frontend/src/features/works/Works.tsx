import styles from './Works.module.css'
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

const Works = () => {
  const { data, loading, error } = useQuery( QUERY, { pollInterval: 500 } )

  if (error) return <></>
  if (loading) return <></>

  return (
    <GridContainer>
      {
        data.allPosts.map((post: any) => {
          if (post.type === 'W') {
            return (
              <Link className={styles.link} key={post.id} href={`/posts/${post.title}`}>
                <Post img={img} title={post.title}/>
              </Link>
            )
          }
        })
      }
    </GridContainer>
  )
}

export default Works