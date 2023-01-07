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

const Blog = () => {
  const dispatch = useAppDispatch()
  const darkmode = useAppSelector(selectDarkModeState)
  const darkmodeInit = useAppSelector(selectDarkModeInit)

  const { data, loading, error } = useQuery( makeQuery(0), { pollInterval: 500 } )

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
        <TextParagraph>
            {JSON.stringify(data.postById.content)}
        </TextParagraph>
    </div>
  )
}

export default Blog