import React from 'react';
import styles from './Blog.module.css'

import TextHeader from '../textheader/TextHeader';
import TextParagraph from '../textparagraph/TextParagraph';
import Divider from '../divider/Divider'

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
  } else
  if ( node.type === 'large-header') {
    return (
      <TextHeader large={true}>
        {node.content}
      </TextHeader>
    )
  } else
  if ( node.type === 'small-header') {
    return (
      <TextHeader large={true}>
        {node.content}
      </TextHeader>
    )
  } else {
    if ( node.type === 'divider') {
      return (
        <Divider/>
      )
    }
  }
}

type BlogProps = {
  id: number
  type: 'works' | 'posts'
  title: string
  readingTime: number
  content: string
}

const Blog = (props: BlogProps) => {
  return (
    <div className={styles.container}>
        <TextHeader large={true}>
            {props.title}
        </TextHeader>
        <TextParagraph>
              {`${props.readingTime} minute read`}
          </TextParagraph>
        <Divider/>
        {
          JSON.parse(props.content).map( ( node: NodeType ) => {
            return parseContent( node )
          })
        }
    </div>
  )
}

export default Blog