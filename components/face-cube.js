import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FaceContainer } from './face-cube-loader'
//import { Physics, useBox, usePlane } from 'use-cannon'
import { BoxBufferGeometry, MeshLambertMaterial } from 'three'
import face from '../public/images/cropped.jpg'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
  }




const FaceCube = () => {
    const refContainer = useRef()
  const [loading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)
    

      // Helpers

      const gridHelper = new THREE.GridHelper(10, 10);
      scene.add(gridHelper)

      //EXAMPLE
      const loadManager = new THREE.LoadingManager();
      const loader = new THREE.TextureLoader();
      
      const geometry = new THREE.BoxGeometry( 3, 3, 3 );
      
      // TODO
      // https://stackoverflow.com/questions/35540880/three-textureloader-is-not-loading-images-files
      loader.load(
        '../public/images/sun.png',
        function (face) {
          const material = new THREE.MeshBasicMaterial({map:face})
          const cube = new THREE.Mesh( geometry, material );
          cube.position.setY(5)
        } );      
        
        const planeGeo = new THREE.PlaneGeometry(5,5);
        const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
        const plane = new THREE.Mesh(planeGeo, planeMaterial);
        
        //Flip the bottom plane
        plane.rotateX(-Math.PI / 2);
        
        loadManager.onLoad = () => {
          scene.add(cube, plane);
        };
         

      //EXAMPLE STOP

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      animate()

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }

    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <FaceContainer ref={refContainer}>{loading }</FaceContainer>
  )
}

export default FaceCube