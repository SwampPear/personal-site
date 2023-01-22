import * as THREE from 'three'


interface ISpriteFlipbook {
    animations: number
    frames: number
    texturePath: string
    loader: any
    scene: any
    x: number
    y: number
    z: number
}

export default class SpriteFlipbook {
    animations: number
    frames: number
    currentOffset: number
    texture: any
    sprite: any

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
        this.sprite = new THREE.Sprite( material )
        this.sprite.scale.set( 200, 200, 200 )
        this.sprite.position.set( options.x, options.y, options.z )
        options.scene.add( this.sprite )
    }

    forwards = () => {
        this.sprite.position.y--
    }

    backwards = () => {
        this.sprite.position.y++
    }

    left = () => {
        this.sprite.position.x--
    }

    right = () => {
        this.sprite.position.x++
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
            this.texture.offset.x = animation / this.animations
        }
    }
}