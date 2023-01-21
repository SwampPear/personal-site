import React, { useEffect, useRef } from 'react';
import styles from './JustForFunGame.module.css'

import * as THREE from 'three'
import SpriteFlipbook from './SpriteFlipbook';

const JustForFunGame = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // setup
    var scene = new THREE.Scene()

    var cameraO = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
    let width = window.innerWidth
    let height = window.innerHeight
    let camera = new THREE.OrthographicCamera( -width / 2, width / 2, height / 2, -height / 2, 0.1, 1000)

    camera.position.z = 5

    var renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setClearColor( 0x000000, .5 )
    renderer.setPixelRatio( window.devicePixelRatio )
    
    mountRef.current!.appendChild( renderer.domElement )

    const loader = new THREE.TextureLoader();

    let sprite = new SpriteFlipbook({
      frames: 6,
      texturePath: 'assets/sprite.png',
      loader: loader,
      scene: scene
    })
  
    const animate = () => {
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000 / 8)

      sprite.update()

      renderer.render( scene, camera )
    }
    
    animate()
  }, [])
  
  return (
    <div className={styles.container} ref={mountRef}>
    </div>
  );
}

export default JustForFunGame
