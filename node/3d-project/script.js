import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()
// console.log(THREE)
const scene = new THREE.Scene()
scene.background = new THREE.Color(0, 0.5, 1)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const creeper = await textureLoader.loadAsync("minecraft-creeper-drawing.jpeg")
const material = new THREE.MeshBasicMaterial({ 
    // color: 0xff0000 
    map: creeper
})
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x=0.7
// mesh.position.y=-0.6
// mesh.position.z=1
scene.add(mesh)
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', function (){
    sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    renderer.setSize(sizes.width, sizes.height)
})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

document.addEventListener("keydown", function (event){
    switch (event.key) {
        case "w": {
            camera.position.z -= 0.02
            break
        }
         case "s": {
            camera.position.z += 0.02
            break
        }
         case "a": {
            camera.position.x -= 0.02
            break
        }
         case "d": {
            camera.position.x += 0.02
            break
        }
         case "e": {
            camera.position.y -= 0.02
            break
        }
         case "q": {
            camera.position.y += 0.02
            break
        }
    }
})

const canvas = document.querySelector('canvas.tricube')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene, camera)

const tick = function(){
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()