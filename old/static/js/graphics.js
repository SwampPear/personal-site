import * as THREE from './three/build/three.module.js';

// setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const graphics = document.querySelector('.graphics')

// renderer
const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 0)
renderer.setPixelRatio( window.devicePixelRatio )
graphics.appendChild(renderer.domElement)

let start = Date.now()

const material = new THREE.ShaderMaterial( {
    uniforms: {
      time: { // float initialized to 0
        type: "f",
        value: 0.0
      },
      mouseY: {
        type: 'f',
        value: 0.0
      }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});

const mesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(35, 40),
    material
)

scene.add(mesh)


camera.position.z = 100

const animate = () => {
    requestAnimationFrame(animate)

    material.uniforms['time'].value = (.000125) * (Date.now() - start)
    

    renderer.render(scene, camera)
}

animate()

addEventListener('mousemove', (event) => {
    material.uniforms['mouseY'].value = event.screenY
});