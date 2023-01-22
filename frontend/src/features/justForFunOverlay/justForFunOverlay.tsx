import React, { use, useEffect, useState } from 'react'
import styles from './JustForFunOverlay.module.css'

import Link from 'next/link'


const JustForFunOverlay = () => {
  const [controlsOpen, setControlsOpen] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio('assets/PersonalSiteTheme.mp3'))
  }, [])

  useEffect(() => {
    if (audio) {
      audio.loop = true
      
      audio.addEventListener('timeupdate', function(){
        var buffer = .1
        if(this.currentTime > this.duration - buffer){
            this.currentTime = 0
            this.play()
      }}, false)
    }
  }, [audio])
  
  const toggle = () => {
    playing ? audio?.play() : audio?.pause()
    setPlaying(!playing)
  }

  return (
    <div className={styles.container}>
        <div className={styles.settingsContainer}>
            <Link href='/' className={styles.homeLink}>
              Home
            </Link>
            <div onClick={() => setControlsOpen(!controlsOpen)} className={styles.controlButton}>
              Controls
            </div>
            <div onClick={toggle} className={styles.controlButton}>
              Music: {playing ? 'Off' : 'On'}
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
