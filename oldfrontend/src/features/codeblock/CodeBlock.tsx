import React from 'react';
import styles from './CodeBlock.module.css'


const CodeBlock = () => {
  const colors = {
    'pink':	'#ff7edB',
    'yellow': 	'#fede5d',
    'orange': 	'#ff8b39',
    'gray': '#bbbbbb'
  }

  return (
    <div className={styles.container}>
      <span style={{ color: colors.yellow}}className={styles.code}>import </span>
      <span style={{ color: colors.pink}}className={styles.code}>React </span>
      <span style={{ color: colors.yellow}}className={styles.code}>from </span>
      <span style={{ color: colors.orange}}className={styles.code}>'react'</span>
      <span style={{ color: colors.gray}}className={styles.code}>;</span>
    </div>
  );
}

export default CodeBlock