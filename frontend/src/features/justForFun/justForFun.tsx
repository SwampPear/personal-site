import React, { useRef, useEffect } from 'react'
import styles from './justForFun.module.css'

import * as THREE from 'three'

const JustForFun = () => {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      // setup scene
      let scene = new THREE.Scene()
  
      // setup camera
      let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
      camera.position.z = 100
  
      // setup rendered
      let renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } )
      renderer.setSize( window.innerWidth, window.innerHeight )
      renderer.setClearColor( 0x000000, 1 )
      renderer.setPixelRatio( window.devicePixelRatio )
      
      // append to container div
      mountRef.current!.appendChild( renderer.domElement )
  
      /*
      // define and add blob
      const material = new THREE.ShaderMaterial( {
          uniforms: {
            time: { // float initialized to k
              value: 0.0
            },
            mouseY: {
              value: 0.0
            }
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader
      })
      
      const mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(35, 40),
        material
      )
    
      scene.add(mesh)
    
      */
     /*
      // animation
      let start = Date.now()
  
      const animate = () => {
          requestAnimationFrame(animate)
      
        material.uniforms['time'].value = .000125 * ( Date.now() - start )
          
      
        renderer.render( scene, camera )
      }
      
      animate()
  
      addEventListener('mousemove', (event) => {
        material.uniforms['mouseY'].value = event.screenY
      })
      */
    }, [])
    
    return (
      <div className={styles.container} ref={mountRef}>
      </div>
    )
}

export default JustForFun