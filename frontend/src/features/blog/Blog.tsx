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
  }
}

type BlogProps = {
  id: number
  type: 'works' | 'posts'
  title: string
  readingTime: number
  content: NodeType[]
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
          props.content.map( ( node: NodeType ) => {
            return parseContent( node )
          })
        }
    </div>
  )
}

export default Blog