import * as THREE from 'three'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

//console.log(THREE)

const scene = new THREE.Scene()

scene.background = new THREE.Color(0.2, 0.5, 0.8);

const loader = new FBXLoader();
const textureLoader = new THREE.TextureLoader();
const object = await loader.loadAsync( 'Tyrannosaurus Rex.fbx' );
const objectTexture = await textureLoader.loadAsync("trex.png")
objectTexture.colorSpace = THREE.SRGBColorSpace
object.traverse((child) => {
    if (child.isMesh && child.material) {
        child.material = new THREE.MeshBasicMaterial({ map: objectTexture })
    }
})
scene.add( object );

object.position.x = 100
object.position.y = -200
object.position.z = -100

const geometry = new THREE.BoxGeometry(1, 1, 1)
const antTexture = await textureLoader.loadAsync("ant.jpg")
antTexture.colorSpace = THREE.SRGBColorSpace
const material = new THREE.MeshBasicMaterial({ map: antTexture })
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener("resize", function () {
    sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    renderer.setSize(sizes.width, sizes.height)
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w": {
            camera.position.z -= 0.1
            break
        }
        case "s": {
            camera.position.z += 0.1
            break
        }
        case "a": {
            camera.position.x -= 0.1
            break
        }
        case "d": {
            camera.position.x += 0.1
            break
        }
    }
})

const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)



mesh.position.x = 0.7
mesh.position.y = - 0.6
mesh.position.z = 1

renderer.render(scene, camera)

// let time = Date.now()
// const tick = () => {
//     // Time
//     const currentTime = Date.now()
//     const deltaTime = currentTime - time
//     time = currentTime

//     // Update objects
//     mesh.rotation.y += 0.01 * deltaTime

//     // Render
//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// }

const tick = function () {
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()