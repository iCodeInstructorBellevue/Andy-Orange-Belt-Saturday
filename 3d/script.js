import * as THREE from 'three'

//console.log(THREE)

const scene = new THREE.Scene()
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