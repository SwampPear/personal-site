import React from 'react';
import styles from './HomePage.module.css'

import me from '../../me.jpg'

import Image from 'next/image';

import Graphic from '../graphic/Graphic'
import TextHeader from '../textheader/TextHeader';
import TextParagraph from '../textparagraph/TextParagraph'
import Divider from '../divider/Divider';

import { useQuery, gql } from "@apollo/client";
import Blog from '../blog/Blog';

const QUERY = gql`
  {
    allPosts {
      postId
      title
      readingTime
      content
    }
  }
`

const HomePage = () => {
  const { data, loading, error } = useQuery( QUERY )

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <Graphic/>
      <div className={styles.checkItButtonContainer}>
        <a href="www.google.com" className={styles.checkItButton}>
          Check out how I made this &#8594;
        </a>
      </div>
      <div className={styles.main}>
        <div className={styles.welcome}>
          <div className={styles.welcomeText}>
            <TextHeader>
              Michael Vaden
            </TextHeader>
            <TextParagraph>
              developer ❀ designer
            </TextParagraph>
            <Divider/>
          </div>
          <Image className={styles.welcomeImage} src={me} alt=''/>
        </div>
        <TextParagraph>
          &emsp;Hey, I'm Michael. I'm a fullstack web developer, blockchain developer, and designer based out of Atlanta, Georgia
          and I'm currently a student at the Georgia Institute of Technology. Aside from my passions I have with developing I love 
          making music and performing and I currently play guitar, bass, trombone, tuba and a little keyboard. I'm also trying to 
          pick up the drums.
        </TextParagraph>
        <Blog/>
      </div>
    </div>
  )
}

export default HomePage