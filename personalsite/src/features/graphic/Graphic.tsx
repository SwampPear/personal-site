import { useEffect } from 'react'
import styles from './Graphic.module.css'
import * as THREE from 'three'

export function Graphic() {
    
  useEffect(() => {
    // setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const graphics = document.querySelector('.container')
  })
  return (
    <div className={styles.container}>
        
    </div>
  );
}