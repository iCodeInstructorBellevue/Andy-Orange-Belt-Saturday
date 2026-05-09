import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

let scene, camera, renderer, controls, entity;
let moveF = false, moveB = false, moveL = false, moveR = false;
let hasDied = false;
const wallBoxes = [];
const clock = new THREE.Clock();

// 1 = Wall, 0 = Empty Space
const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,1,1,1,0,0,1],
    [1,0,1,0,0,0,0,1,0,0,0,1,0,0,1],
    [1,0,1,0,1,1,1,1,0,1,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222211);
    scene.fog = new THREE.FogExp2(0x1a1a00, 0.25);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio * 0.7); // Low res for realism
    document.body.appendChild(renderer.domElement);

    controls = new PointerLockControls(camera, document.body);
    document.body.addEventListener('click', () => controls.lock());

    // Lighting (Flashlight)
    const flashlight = new THREE.SpotLight(0xffffff, 50, 15, Math.PI/6, 0.3);
    flashlight.position.set(0, 0, 0);
    camera.add(flashlight);
    camera.add(flashlight.target);
    flashlight.target.position.set(0, 0, -1);
    scene.add(camera);
    

    // Wall/Floor Construction
    const loader = new THREE.TextureLoader();
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xdbca7d, roughness: 0.9 });
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x554422 });

    const wallGeo = new THREE.BoxGeometry(4, 4, 4);
    for(let z=0; z<map.length; z++) {
        for(let x=0; x<map[z].length; x++) {
            if(map[z][x] === 1) {
                const wall = new THREE.Mesh(wallGeo, wallMat);
                wall.position.set(x*4, 2, z*4);
                scene.add(wall);
                // Add to collision array
                wallBoxes.push(new THREE.Box3().setFromObject(wall));
            }
        }
    }

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), floorMat);
    floor.rotation.x = -Math.PI/2;
    scene.add(floor);

    // PLAYER BODY (Visual Arms)
    const armGeo = new THREE.BoxGeometry(0.15, 0.15, 0.7);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x443322 });
    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.4, -0.3, -0.4);
    camera.add(rightArm);

    // THE ENTITY (Physical Stalker)
    const entGeo = new THREE.CylinderGeometry(0.2, 0.2, 2.5, 6);
    entity = new THREE.Mesh(entGeo, new THREE.MeshBasicMaterial({color: 0x000000}));
    entity.position.set(12, 1.25, 12);
    scene.add(entity);

    camera.position.set(4, 1.6, 4);
    animate();
}

// COLLISION FUNCTION
function checkCollision(targetPos, radius = 0.5) {
    const hitBox = new THREE.Box3().setFromCenterAndSize(
        targetPos, 
        new THREE.Vector3(radius, 2, radius)
    );
    for(let wall of wallBoxes) {
        if(hitBox.intersectsBox(wall)) return true;
    }
    return false;
}

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    if (controls.isLocked) {
        const oldPos = camera.position.clone();
        const speed = 4.5 * delta;

        if (moveF) controls.moveForward(speed);
        if (moveB) controls.moveForward(-speed);
        if (moveL) controls.moveRight(-speed);
        if (moveR) controls.moveRight(speed);

        // Check Wall Collision for Player
        if (checkCollision(camera.position)) {
            camera.position.copy(oldPos);
        }

        // Camera Bobbing
        camera.position.y = 1.6 + Math.sin(time * 10) * 0.03;

        // ENTITY AI (Pathfinding with Collisions)
        const entOldPos = entity.position.clone();
        const dirToPlayer = new THREE.Vector3().subVectors(camera.position, entity.position).normalize();
        entity.position.addScaledVector(dirToPlayer, 2.2 * delta);
        
        // Keep entity out of walls
        if (checkCollision(entity.position, 0.8)) {
            entity.position.copy(entOldPos);
        }
        entity.lookAt(camera.position.x, 1.25, camera.position.z);

        // Jumpscare
        if(entity.position.distanceTo(camera.position) < 1.3 && !hasDied) {
            document.body.innerHTML = "<h1 style='color:red; text-align:center; padding-top:20%'>SIGNAL LOST</h1>";
            document.body.style.backgroundImage = "url(https://i.ytimg.com/vi/6XqlsFOOJGM/hqdefault.jpg)";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            const a = new Audio("./Vhs insert effect (Update Read Desc Before Commenting) 4.mp3");
            a.play();
            hasDied = true;
            setTimeout(()=>location.reload(), 2000);
        }
    }
    renderer.render(scene, camera);
}

window.addEventListener('keydown', (e) => {
    if(e.code === 'KeyW') moveF = true; if(e.code === 'KeyS') moveB = true;
    if(e.code === 'KeyA') moveL = true; if(e.code === 'KeyD') moveR = true;
});
window.addEventListener('keyup', (e) => {
    if(e.code === 'KeyW') moveF = false; if(e.code === 'KeyS') moveB = false;
    if(e.code === 'KeyA') moveL = false; if(e.code === 'KeyD') moveR = false;
});

init();