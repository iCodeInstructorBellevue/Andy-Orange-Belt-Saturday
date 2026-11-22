// TODO: SEE WHAT SECTIONS OF THE sdf.frag CAN BE EASILY MODIFIED (kids will not be tyhping everything from scratch)

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

async function init() {
  // Load external GLSL shader files
  const [vertexShader, fragmentShader] = await Promise.all([
    fetch('./shaders/sdf.vert').then((res) => res.text()),
    fetch('./shaders/sdf.frag').then((res) => res.text()),
  ]);
  console.log(vertexShader)

  // 1. Scene, Camera, Renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x18181b);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(3.5, 2.5, 4.5);


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
  const canvas = document.querySelector('canvas.webgl')
  
  // Renderer
  const renderer = new THREE.WebGLRenderer({
      canvas: canvas
  })
  renderer.setSize(sizes.width, sizes.height)

//   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//   document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // 2. Standard Cube Mesh & Lights
  const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
  dirLight.position.set(5, 8, 5);
  scene.add(dirLight, new THREE.AmbientLight(0xffffff, 0.4));

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 1.6, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.35 })
  );
  cube.position.set(-0.5, 0, 0);
  scene.add(cube);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // SDF STUFF START
  ////////////////////////////////////////////////////////////////////////////////////////////////

  const sdfUniforms = {
    uSpherePos: { value: new THREE.Vector3(0.5, 0, 0) },
    uSphereRadius: { value: 1.0 },
    uLightDir: { value: dirLight.position.clone().normalize() },
    uProjectionMatrix: { value: camera.projectionMatrix }, // <-- Add this
  };

  const sdfMaterial = new THREE.ShaderMaterial({
    uniforms: sdfUniforms,
    vertexShader,
    fragmentShader,
    side: THREE.BackSide,
  });

  const sdfBounds = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 2.4, 2.4),
    sdfMaterial
  );
  sdfBounds.position.copy(sdfUniforms.uSpherePos.value);
  scene.add(sdfBounds);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // SDF STUFF END
  ////////////////////////////////////////////////////////////////////////////////////////////////

  // 4. Resize & Animation Loop
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // SDF STUFF START
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const x = Math.sin(clock.getElapsedTime() * 1.5) * 0.9;
    sdfUniforms.uSpherePos.value.x = x;
    sdfBounds.position.x = x;
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // SDF STUFF END
    ////////////////////////////////////////////////////////////////////////////////////////////////

    cube.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

init();
