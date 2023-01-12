import React from 'react';
import styles from './Blog.module.css'

import TextHeader from '../textheader/TextHeader';
import TextParagraph from '../textparagraph/TextParagraph';
import Divider from '../divider/Divider'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'

import { useQuery, gql } from "@apollo/client";


const makeQuery = (postId: number) => {
  return gql`
    query {
      postById(postId: ${postId}) {
        postId
        title
        readingTime
        content
      }
    }
  `
}

type NodeType = {
  type: string;
  content: string;
}


const parseContent = ( node: NodeType) => {
  if ( node.type === 'paragraph') {
    return (
      <TextParagraph>
        &emsp;{node.content}
      </TextParagraph>
    )
  }
}

const Blog = () => {
  const { data, loading, error } = useQuery( makeQuery(3), { pollInterval: 500 } )

  if (loading) return <>loading</>
  if (error) return <>error</>

  return (
    <div className={styles.container}>
        <TextHeader large={true}>
            {data.postById.title}
        </TextHeader>
        <TextParagraph>
            {`${data.postById.readingTime} minute read`}
        </TextParagraph>
        <Divider/>
        {
          JSON.parse( data.postById.content ).data.map( ( node: NodeType ) => {
            return parseContent( node )
          })
        }
    </div>
  )
}

export default Blog