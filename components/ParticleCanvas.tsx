'use client'

import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralNetworkPoints() {
  const count = 100
  const maxDistance = 75
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const idx = i * 3
      pos[idx] = (Math.random() - 0.5) * 240
      pos[idx + 1] = (Math.random() - 0.5) * 240
      pos[idx + 2] = (Math.random() - 0.5) * 120 - 40

      vel[idx] = (Math.random() - 0.5) * 0.3
      vel[idx + 1] = (Math.random() - 0.5) * 0.3
      vel[idx + 2] = (Math.random() - 0.5) * 0.3

      cols[idx] = 0.0 + Math.random() * 0.1
      cols[idx + 1] = 0.8 + Math.random() * 0.2
      cols[idx + 2] = 0.9 + Math.random() * 0.1
    }

    return [pos, vel, cols]
  }, [])

  useFrame(() => {
    const pointsGeo = pointsRef.current?.geometry
    const linesGeo = linesRef.current?.geometry

    if (!pointsGeo || !linesGeo) return

    const posAttr = pointsGeo.getAttribute('position') as THREE.BufferAttribute
    const positionsArray = posAttr.array as Float32Array

    for (let i = 0; i < count; i++) {
      const idx = i * 3
      positionsArray[idx] += velocities[idx]
      positionsArray[idx + 1] += velocities[idx + 1]
      positionsArray[idx + 2] += velocities[idx + 2]

      if (Math.abs(positionsArray[idx]) > 140) velocities[idx] *= -1
      if (Math.abs(positionsArray[idx + 1]) > 140) velocities[idx + 1] *= -1
      if (Math.abs(positionsArray[idx + 2] + 40) > 80) velocities[idx + 2] *= -1
    }
    posAttr.needsUpdate = true

    const linePos: number[] = []
    const lineCols: number[] = []

    for (let i = 0; i < count; i++) {
      const idxA = i * 3
      const xA = positionsArray[idxA]
      const yA = positionsArray[idxA + 1]
      const zA = positionsArray[idxA + 2]

      for (let j = i + 1; j < count; j++) {
        const idxB = j * 3
        const xB = positionsArray[idxB]
        const yB = positionsArray[idxB + 1]
        const zB = positionsArray[idxB + 2]

        const dist = Math.sqrt((xA - xB) ** 2 + (yA - yB) ** 2 + (zA - zB) ** 2)

        if (dist < maxDistance) {
          linePos.push(xA, yA, zA)
          linePos.push(xB, yB, zB)

          const alpha = (1 - dist / maxDistance) * 0.4
          lineCols.push(0.0, 0.7 * alpha, 0.9 * alpha)
          lineCols.push(0.4 * alpha, 0.0, 0.8 * alpha)
        }
      }
    }

    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3))
    linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineCols, 3))
    linesGeo.computeBoundingSphere()

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008
      pointsRef.current.rotation.y += (mouse.current.x * 0.12 - pointsRef.current.rotation.y) * 0.03
      pointsRef.current.rotation.x += (mouse.current.y * 0.12 - pointsRef.current.rotation.x) * 0.03
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = pointsRef.current?.rotation.y || 0
      linesRef.current.rotation.x = pointsRef.current?.rotation.x || 0
    }
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={3.0}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}

export default function ParticleCanvas() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 160], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <NeuralNetworkPoints />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 via-transparent to-gray-950/50 pointer-events-none" />
    </div>
  )
}
