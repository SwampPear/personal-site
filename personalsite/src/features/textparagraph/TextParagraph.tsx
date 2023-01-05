import React from 'react';
import styles from './TextParagraph.module.css'


type TextParagraphProps = {
  children: string
}

const TextParagraph = (props: TextParagraphProps) => {
  return (
    <p className={styles.large}>
      {props.children}
    </p>
  )
}

export default TextParagraph