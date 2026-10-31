console.log('javascript is working')

import * as THREE from 'three'

import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 

const scene = new THREE.Scene()

const canvas = document.querySelector('canvas.wabg1')

const textureLoader = new THREE.TextureLoader();

const texture = textureLoader.load('./images.png');

const loader = new FBXLoader();
const sniperMesh = await loader.loadAsync( 'Snipex Alligator.fbx' );

const goemetry = new THREE.BoxGeometry(2, 2, 2)
const meterial = new THREE.MeshBasicMaterial({ map: texture })
const mesh = new THREE.Mesh(goemetry, meterial)

scene.add( sniperMesh );

// scene.add(mesh)

scene.background = new THREE.Color('skyblue')

const sizes = {
    width: 2000,
    height: 1000
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "w":
        camera.position.z -= 1;
        break;
        case "a":
        camera.position.x -= 1;
        break;
        case "s":
        camera.position.z += 1;
        break;
        case "d":
        camera.position.x += 1;
        break;
    }
});

window.addEventListener("mousemove", function (event){
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    camera.rotation.y += y * 0.01
}, false)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

mesh.position.x = 0.7
mesh.position.y = - 0.6
mesh.position.z = 1

sniperMesh.position.x = 0.7
sniperMesh.position.y = - 0.6
sniperMesh.position.z = -100

const tick = () =>
{
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()

