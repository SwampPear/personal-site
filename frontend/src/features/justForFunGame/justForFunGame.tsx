import React, { useEffect, useRef, useState } from 'react';
import styles from './JustForFunGame.module.css'

import * as THREE from 'three'
import SpriteFlipbook from './SpriteFlipbook';

const JustForFunGame = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [movingBackwards, setmovingBackwards] = useState(false)
  const [movingForwards, setmovingForwards] = useState(false)
  const [movingLeft, setmovingLeft] = useState(false)
  const [movingRight, setmovingRight] = useState(false)

  const [sprite, setSprite] = useState<SpriteFlipbook>()
  const [camera, setCamera] = useState(new THREE.OrthographicCamera( 
    0, 
    0, 
    0, 
    0, 
    0.1, 
    1000
  ))

  const animateMovement = useRef(() => {})
  const animateSprite = useRef(() => {})

  useEffect(() => {
    let loader = new THREE.TextureLoader()
    let scene = new THREE.Scene()
    let renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } )

    camera.position.z = 5
    camera.left = -window.innerWidth / 2
    camera.right = window.innerWidth / 2
    camera.top = window.innerHeight / 2
    camera.bottom = -window.innerHeight / 2
    camera.updateProjectionMatrix()

    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setClearColor( 0x000000, .5 )
    renderer.setPixelRatio( window.devicePixelRatio )
    
    mountRef.current!.appendChild( renderer.domElement )

    // load water
    let waterTexture = loader.load( 'assets/Water.png' )
    waterTexture.magFilter = THREE.NearestFilter
      
    let waterMaterial = new THREE.SpriteMaterial( { map: waterTexture } )

    for (let i = -10; i < 20; i++) {
      for (let j = -10; j < 20; j++) {
        let water = new THREE.Sprite( waterMaterial )
        water.scale.set( 200, 200, 200 )
        water.position.set( (i * 200), (j * 200), 0 )
        scene.add( water )
      }
    }

    // load ice
    let iceTexture = loader.load( 'assets/Ice.png' )
    iceTexture.magFilter = THREE.NearestFilter
      
    let iceMaterial = new THREE.SpriteMaterial( { map: iceTexture } )
    let ice = new THREE.Sprite( iceMaterial )
    ice.scale.set( 1000, 600, 200 )
    ice.position.set( 0, 0, 0 )
    scene.add( ice )

    setSprite(new SpriteFlipbook({
      animations: 4,
      frames: 6,
      texturePath: 'assets/PearSpriteSheet.png',
      loader: loader,
      scene: scene
    }))

    const animate = () => {
      requestAnimationFrame(animate)

      if (movingForwards) {
        camera.position.y++
      }

      renderer.render( scene, camera )
    }

    animate()
  }, [camera])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'w' || event.key === 'W') {
        if (!movingForwards && !movingLeft && !movingRight) {
          sprite?.switchAnimation(1)
        } 
      } else 
      if (event.key === 'a' || event.key === 'A') {
        if (!movingForwards && !movingBackwards && !movingRight) {
          sprite?.switchAnimation(2)
        } 
      } else
      if (event.key === 's' || event.key === 'S') {
        if (!movingLeft && !movingBackwards && !movingRight) {
          sprite?.switchAnimation(0)
        }
      } else 
      if (event.key === 'd' || event.key === 'D') {
        if (!movingLeft && !movingBackwards && !movingForwards) {
          sprite?.switchAnimation(3)
        }
      }
    }

    document.addEventListener('keypress', handleKeyPress)

    if (!movingBackwards && !movingLeft && !movingRight) {
      sprite?.switchAnimation(0)
    }

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [sprite, movingForwards, movingBackwards, movingLeft, movingRight])

  useEffect(() => {
    const animateSprite = () => {
      setTimeout(() => {
        requestAnimationFrame(animateSprite)
      }, 1000 / 8)

      sprite?.update()
    }

    animateSprite()
  }, [sprite])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'w' || event.key === 'W') {
        if (!movingForwards && !movingLeft && !movingRight) {
          setmovingBackwards(true)
        } 
      } else 
      if (event.key === 'a' || event.key === 'A') {
        if (!movingForwards && !movingBackwards && !movingRight) {
          setmovingLeft(true)
        } 
      } else
      if (event.key === 's' || event.key === 'S') {
        if (!movingLeft && !movingBackwards && !movingRight) {
          setmovingForwards(true)
        } 
      } else 
      if (event.key === 'd' || event.key === 'D') {
        if (!movingLeft && !movingBackwards && !movingForwards) {
          setmovingRight(true)
        }
      }
    }

    document.addEventListener('keypress', handleKeyPress)

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'w' || event.key === 'W') {
        if (movingBackwards) {
          setmovingBackwards(false)
        }
      } else 
      if (event.key === 'a' || event.key === 'A') {
        if (movingLeft) {
          setmovingLeft(false)
        }
      } else
      if (event.key === 's' || event.key === 'S') {
        if (movingForwards) {
          setmovingForwards(false)
        }
      } else 
      if (event.key === 'd' || event.key === 'D') {
        if (movingRight) {
          setmovingRight(false)
        }
      }
    }

    document.addEventListener('keyup', handleKeyUp)

    animateMovement.current = () => {
      if (movingBackwards || movingForwards || movingLeft || movingRight) {
        requestAnimationFrame(animateMovement.current)
      } else {
        cancelAnimationFrame(animateMovement.current)
      }

      if (movingBackwards && camera.position.y < 370) {
        camera.position.y++
        sprite?.backwards()
      }

      if (movingForwards && camera.position.y > -190) {
        camera.position.y--
        sprite?.forwards()
      }

      if (movingRight && camera.position.x < 450) {
        camera.position.x++
        sprite?.right()
      }

      if (movingLeft && camera.position.x > -450) {
        camera.position.x--
        sprite?.left()
      }
    }

    animateMovement.current()

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [movingBackwards, movingForwards, movingLeft, movingRight])

  return (
    <div className={styles.container} ref={mountRef}>
    </div>
  );
}

export default JustForFunGame
