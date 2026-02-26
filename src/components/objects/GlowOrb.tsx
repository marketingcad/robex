'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GlowOrbProps {
  position?: [number, number, number]
  color?: string
  baseIntensity?: number
  pulseRange?: number
  size?: number
}

export default function GlowOrb({
  position = [0, 0, -10],
  color = '#FFA500',
  baseIntensity = 3.0,
  pulseRange = 1.0,
  size = 2,
}: GlowOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!)
  const lightRef = useRef<THREE.PointLight>(null!)

  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.elapsedTime * 0.8) * pulseRange
    const intensity = baseIntensity + pulse

    if (materialRef.current) {
      materialRef.current.emissiveIntensity = intensity
    }
    if (lightRef.current) {
      lightRef.current.intensity = intensity * 2
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          color={color}
          emissive={color}
          emissiveIntensity={baseIntensity}
          toneMapped={false}
        />
      </mesh>
      <pointLight ref={lightRef} color={color} intensity={baseIntensity * 2} distance={30} />
    </group>
  )
}
