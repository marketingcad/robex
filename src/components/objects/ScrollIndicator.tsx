'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { COLORS } from '@/lib/constants'

export default function ScrollIndicator() {
  const groupRef = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  useFrame(({ clock }) => {
    if (!groupRef.current) return

    // Fade out when user starts scrolling
    const opacity = scroll.offset < 0.05 ? 1 - scroll.offset / 0.05 : 0
    groupRef.current.visible = opacity > 0.01

    // Gentle bob animation
    groupRef.current.position.y = -2.5 + Math.sin(clock.elapsedTime * 2) * 0.1

    groupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mat = child.material as THREE.MeshStandardMaterial
        mat.opacity = opacity
        mat.transparent = true
      }
    })
  })

  return (
    <group ref={groupRef} position={[0, -2.5, 0]}>
      {/* Downward chevron made of two thin boxes */}
      <mesh position={[-0.15, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.3, 0.03, 0.03]} />
        <meshStandardMaterial
          color={COLORS.accentBlue}
          emissive={COLORS.accentBlue}
          emissiveIntensity={2}
          transparent
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.3, 0.03, 0.03]} />
        <meshStandardMaterial
          color={COLORS.accentBlue}
          emissive={COLORS.accentBlue}
          emissiveIntensity={2}
          transparent
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}
