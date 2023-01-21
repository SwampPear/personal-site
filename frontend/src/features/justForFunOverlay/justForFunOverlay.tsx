import React, { use, useState } from 'react'
import styles from './JustForFunOverlay.module.css'

import Link from 'next/link'


const JustForFunOverlay = () => {
  const [controlsOpen, setControlsOpen] = useState(false)

  return (
    <div className={styles.container}>
        <div className={styles.settingsContainer}>
            <Link href='/' className={styles.homeLink}>
              Home
            </Link>
            <div onClick={() => setControlsOpen(!controlsOpen)} className={styles.controlButton}>
              Controls
            </div>
        </div>
        <div 
          className={`${styles.controlsContainer} ${controlsOpen ? styles.controlsContainerOpen : styles.controlsContainerClosed}`}>
          <ul className={styles.controlsList}>
            <li>W - forwards</li>
            <li>A - left</li>
            <li>S - backwards</li>
            <li>D - right</li>
          </ul>
        </div>
    </div>
  );
}

export default JustForFunOverlay
