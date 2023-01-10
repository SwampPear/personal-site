import React from 'react';
import styles from './Section.module.css'


type SectionProps = {
  children: JSX.Element | JSX.Element[]
}

const Section = (props: SectionProps) => {
  return (
    <section className={styles.container}>
        {props.children}
    </section>
  )
}

export default Section