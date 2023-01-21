import React, { useEffect, useRef } from 'react';
import styles from './JustForFunGame.module.css'

import * as THREE from 'three'
import { text } from 'node:stream/consumers';

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
    let texture = loader.load( 'assets/sprite.png' );
    texture.mageFilter = THREE.NearestFilter;

    let currentTile = 0
    const tilesHorizontal = 1
    const tilesVertical = 6

    texture.repeat.set(1/tilesHorizontal, 1/tilesVertical)
    texture.offset.x = 0
    texture.offset.y = 5/6
    let currentOffset = 5

    let material = new THREE.SpriteMaterial( { map: texture } ); 
    let sprite = new THREE.Sprite( material );

    sprite.scale.set( 200, 200, 200);
    sprite.position.set(0, 1, 0);
    scene.add(sprite);
  
    const animate = () => {
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000 / 8)

      if (currentOffset === 0) {
        currentOffset = 5
      } else {
        currentOffset--
      }

      texture.offset.y = currentOffset/6

    
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
