import {useState, useEffect, useRef, useMemo, Suspense} from 'react'
import * as THREE from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Text} from '@react-three/drei'
import type {ThreeEvent} from '@react-three/fiber'
import type {PropsWithChildren} from 'react'

import {stack} from '../data'

const times2 = <T extends any>(c1: number, c2: number, fn: (i: number, j: number) => T) => {
  const ret = []
  for (let i = 0; i < c1; i++) {
    for (let j = 0; j < c2; j++) {
      ret.push(fn(i, j))
    }
  }
  return ret
}

const fontProps = {
  letterSpacing: -0.05,
  lineHeight: 1,
  'material-toneMapped': false,
}

const highlightColor = '#fa2720'
const thc = new THREE.Color(highlightColor)

const randomColor = () => THREE.MathUtils.randInt(0, 0xffffff)

const Skill = ({children, ...props}: PropsWithChildren<any>) => {
  const color = new THREE.Color(randomColor())
  const ref = useRef<any>()
  const offset = Math.random() * 100
  const speed = Math.random() / 4
  const [hovered, setHovered] = useState(false)
  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setHovered(true)
  }
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => void (document.body.style.cursor = 'auto')
  }, [hovered])

  // Tie component to the render-loop
  useFrame(({camera}) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(hovered ? thc : color, 0.1)

    ref.current.fontSize = 1.4 + (Math.sin(offset + Date.now() / 200) + 1) * speed
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children}/>
}

type CloudProps = {
  radius: number
  texts: string[]
  countX: number
  countY: number
}

const Sphere = ({radius = 20, texts = [], countX, countY}: CloudProps) => {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (countX + 1)
    const thetaSpan = (Math.PI * 2) / countY
    return times2(countX, countY, (i, j) => {
      const r = spherical.set(radius, phiSpan * (i + 1), thetaSpan * j)
      return [new THREE.Vector3().setFromSpherical(r), texts[i * countY + j]] as [THREE.Vector3, string]
    })
  }, [countX, countY, radius])
  return <>
    {words.map(([pos, name], i) => <Skill key={i} position={pos} children={name}/>)}
  </>
}

const SkillSphere = () => {
  return (
      <Suspense fallback={null}>
        <Canvas style={{backgroundColor: 'transparent', height: '100vh', width: '100vw'}} dpr={[1, 2]}
                camera={{position: [0, 0, 30], fov: 90, far: 1000, near: 0.01}}>
          <fog attach="fog" args={['#202025', 0, 80]}/>
          <Sphere radius={10} texts={stack} countX={4} countY={6}/>
          <OrbitControls autoRotate enableRotate={false} autoRotateSpeed={10} enableZoom={false}/>
        </Canvas>
      </Suspense>
  )
}

export default SkillSphere
