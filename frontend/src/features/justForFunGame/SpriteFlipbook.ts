import * as THREE from 'three'


interface ISpriteFlipbook {
    animations: number
    frames: number
    texturePath: string
    loader: any
    scene: any
}

export default class SpriteFlipbook {
    animations: number
    frames: number
    currentOffset: number
    texture: any

    constructor(options: ISpriteFlipbook) {
        this.animations = options.animations
        this.frames = options.frames
        this.currentOffset = this.frames - 1

        this.texture = options.loader.load( options.texturePath )
        this.texture.magFilter = THREE.NearestFilter
        this.texture.repeat.set( 1 / this.animations, 1 / this.frames )
        this.texture.offset.x = 0
        this.texture.offset.y = this.currentOffset / this.frames

        let material = new THREE.SpriteMaterial( { map: this.texture } )
        let sprite = new THREE.Sprite( material )
        sprite.scale.set( 200, 200, 200 )
        sprite.position.set( 0, 1, 0 )
        options.scene.add( sprite )
    }

    update = () => {
        if (this.currentOffset === 0) {
            this.currentOffset = this.frames - 1
        } else {
            this.currentOffset--
        }

        this.texture.offset.y = this.currentOffset / this.frames
    }

    switchAnimation = (animation: number) => {
        if (animation >= 0 && animation < this.animations) {
            this.currentOffset = this.frames - 1
            this.texture.offset.y = this.currentOffset / this.frames

            this.texture.offset.x = animation / this.animations
        }
    }
}

/*
const loader = new THREE.TextureLoader();
    
let texture = loader.load( 'assets/sprite.png' );
texture.magFilter = THREE.NearestFilter;

const tilesHorizontal = 1
const tilesVertical = 6

texture.repeat.set(1/tilesHorizontal, 1/tilesVertical)
texture.offset.x = 0 / 1
texture.offset.y = 5 / 6
let currentOffset = 5

let material = new THREE.SpriteMaterial( { map: texture } ); 
let sprite = new THREE.Sprite( material );

sprite.scale.set( 200, 200, 200);
sprite.position.set(0, 1, 0);
scene.add(sprite);

// update
if (currentOffset === 0) {
    currentOffset = 5
} else {
    currentOffset--
}

texture.offset.y = currentOffset / 6
*/