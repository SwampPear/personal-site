//import { useEffect } from 'react'
import styles from './Graphic.module.css'
import * as THREE from 'three'

import React, { useEffect, useRef } from 'react';

export function Graphic() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    mountRef.current!.appendChild( renderer.domElement );
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );
    camera.position.z = 5;
    
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    
    animate()

    //mountRef.current!.removeChild( renderer.domElement )
  }, []);
  
  return (
    <div className={styles.container} ref={mountRef}>
    </div>
  );
}
