import './style.css'
import * as THREE from 'three'
import { ball, outline, outline2 } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}
let mesh //expose mesh to animate fn
const clock = new THREE.Clock()

init()
function init() {
  //set up our renderer default settings, add scene/canvas to webpage
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  
  meshes.outline = outline()
  meshes.outline2 = outline2()
  meshes.ball = ball()
  lights.default = addLight()

  scene.add(meshes.outline)
  scene.add(meshes.outline2)
  scene.add(meshes.ball)
  scene.add(lights.default)

  camera.position.set(0,0,5)
  resize()
  animate()
}

function resize() {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate() {
  requestAnimationFrame(animate)
  const tick = clock.getElapsedTime()

  meshes.ball.rotation.x -= 0.003
  meshes.ball.rotation.y += 0.003
  meshes.outline2.rotation.x += 0.016
  meshes.outline2.rotation.y -= 0.016
  meshes.outline.rotation.x += 0.018
  meshes.outline.rotation.y -= 0.018
  renderer.render(scene, camera)
}
