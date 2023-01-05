import React from 'react';
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
        <div className={styles.content}>
            <a href="https://www.google.com" className={styles.scrollButton}>Work</a>
            <a href="https://www.google.com" className={styles.scrollButton}>Posts</a>
            <a href="https://www.google.com" className={styles.scrollButton}>Contact</a>
        </div>
    </nav>
  );
}

export default Nav