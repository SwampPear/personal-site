import React from 'react';
import styles from './Home.module.css'

import me from '../../me.jpg'

import Graphic from '../graphic/Graphic'
import TextHeader from '../textheader/TextHeader';
import TextParagraph from '../textparagraph/TextParagraph'
import Divider from '../divider/Divider';
import Section from '../section/Section';

import { useQuery, gql } from "@apollo/client";

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


const Home = () => {
  const { data, loading, error } = useQuery( QUERY )

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <Graphic/>
      <div className='check-it-button__container'>
        <a href="www.google.com" className='check-it-button'>
          Check out how I made this &#8594;
        </a>
      </div>
      <Section>
        <div className='welcome'>
          <div className='welcome__text'>
            <TextHeader>
              Michael Vaden
            </TextHeader>
            <TextParagraph>
              developer ❀ designer
            </TextParagraph>
            <Divider/>
          </div>
          <img className='welcome__img' src={me}/>
        </div>
        <div>
          <TextParagraph>
            &emsp;Hey, I'm Michael. I'm a fullstack web developer, blockchain developer, and designer based out of Atlanta, Georgia
            and I'm currently a student at the Georgia Institute of Technology. Aside from my passions I have with developing I love 
            making music and performing and I currently play guitar, bass, trombone, tuba and a little keyboard. I'm also trying to 
            pick up the drums.
          </TextParagraph>
        </div>
      </Section>
    </div>
  )
}

export default Home