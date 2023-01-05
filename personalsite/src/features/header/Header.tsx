import React from 'react';
import styles from './Header.module.css'
import Icon from '../icon/Icon'
import DarkMode from '../darkmode/DarkMode' 

const Header = () => {
  return (
    <header>
        <div className={styles.brand}>
        <Icon />
            <span className={styles.title}>
                Michael Vaden
            </span>
        </div>
        <DarkMode/>
    </header>
  );
}

export default Header