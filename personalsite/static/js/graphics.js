import * as THREE from './three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const graphics = document.querySelector('.graphics')

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0 )
graphics.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x6ab0ed } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();