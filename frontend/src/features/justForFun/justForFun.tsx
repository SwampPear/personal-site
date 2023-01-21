import React, { useEffect, useRef } from 'react';
import styles from './JustForFun.module.css'

import * as THREE from 'three'

const JustForFun = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // setup
    var scene = new THREE.Scene()

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )

    camera.position.z = 10

    var renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setClearColor( 0x000000, 0 )
    renderer.setPixelRatio( window.devicePixelRatio )
    
    // append to container div
    mountRef.current!.appendChild( renderer.domElement )

    // testing
    const loader = new THREE.TextureLoader();
    var treetexture = loader.load( 'assets/sprite.png' );
    treetexture.magFilter = THREE.NearestFilter;

    var treematerial = new THREE.SpriteMaterial( { map: treetexture } ); 
    var treesprite = new THREE.Sprite( treematerial );

    treesprite.scale.set( 1, 2, 1);
    treesprite.position.set(0, 1, 0);
    scene.add(treesprite);
  
    const animate = () => {
      requestAnimationFrame(animate)
    
      renderer.render( scene, camera )
    }
    
    animate()
  }, [])
  
  return (
    <div className={styles.container} ref={mountRef}>
    </div>
  );
}

export default JustForFun
