import React from 'react';
import styles from './TextHeader.module.css'


type TextHeaderProps = {
  large?: boolean;
  children: string
}

const TextHeader = (props: TextHeaderProps) => {
  if (props.large) {
    return (
      <h1 className={styles.large}>
        {props.children}
      </h1>
    )
  } else {
    return (
      <h1 className={styles.small}>
        {props.children}
      </h1>
    )
  }
}

export default TextHeader