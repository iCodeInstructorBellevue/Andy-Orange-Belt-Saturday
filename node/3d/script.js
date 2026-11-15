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
objectTexture.wrapS = THREE.RepeatWrapping
objectTexture.wrapT = THREE.RepeatWrapping
object.traverse((child) => {
    if (child.isMesh && child.material) {
        child.material = new THREE.MeshBasicMaterial({ map: objectTexture })
        console.log("hi")
        // child.material.map = objectTexture
        // child.castShadow = true;
        // child.receiveShadow = true;
        // child.material.needsUpdate = true;
    }
})
scene.add( object );

object.position.x = 100
object.position.y = -200
object.position.z = -100

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

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

const tick = () => {
    // Update objects
    mesh.rotation.y += 0.01

    // Render

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()