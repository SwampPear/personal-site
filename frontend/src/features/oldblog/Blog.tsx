import React from 'react';
import styles from './Blog.module.css'

import TextHeader from '../textheader/TextHeader';
import TextParagraph from '../textparagraph/TextParagraph';
import Divider from '../divider/Divider'

import { useQuery, gql } from "@apollo/client";
import { NumericLiteral } from 'typescript';


type NodeType = {
  type: string;
  content: string;
}

const parseContent = ( node: NodeType) => {
  if ( node.type === 'paragraph') {
    return (
      <TextParagraph>
        &emsp;&emsp;{node.content}
      </TextParagraph>
    )
  }
}

type BlogProps = {
  id: number
  type: 'works' | 'posts'
  title: string
  readingTime: number
  content: JSON
}

const Blog = (props: BlogProps) => {
  if (props.type === 'works') {
    const { data, loading, error } = useQuery( getWork(props.id), { pollInterval: 500 } )

    if (loading) return <>loading</>
    if (error) return <>error</>

    return (
      <div className={styles.container}>
          <TextHeader large={true}>
              {data.workById.title}
          </TextHeader>
          <Divider/>
          {
            JSON.parse( data.workById.content ).data.map( ( node: NodeType ) => {
              return parseContent( node )
            })
          }
      </div>
    )
  } else {
    const { data, loading, error } = useQuery( getPost(props.id), { pollInterval: 500 } )

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
}

export default Blog