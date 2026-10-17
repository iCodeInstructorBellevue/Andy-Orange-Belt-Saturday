console.log('javascript is working')

import * as THREE from 'three'

const scene = new THREE.Scene()

const canvas = document.querySelector('canvas.wabg1')

const textureLoader = new THREE.TextureLoader();

const texture = textureLoader.load('./images.png');


const goemetry = new THREE.BoxGeometry(1, 1, 1)
const meterial = new THREE.MeshBasicMaterial({ map: texture })
const mesh = new THREE.Mesh(goemetry, meterial)

scene.add(mesh)

scene.background = new THREE.Color('skyblue')

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

mesh.position.x = 0.7
mesh.position.y = - 0.6
mesh.position.z = 1

const tick = () =>
{
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()

