'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

interface Section3DProps {
  range: [number, number]
  children: React.ReactNode
  fadeMargin?: number
}

export default function Section3D({ range, children, fadeMargin = 0.05 }: Section3DProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  useFrame(() => {
    const offset = scroll.offset
    const [start, end] = range

    // Calculate visibility: fade in at start, fade out at end
    let opacity = 0
    if (offset >= start - fadeMargin && offset <= end + fadeMargin) {
      // Fade in
      if (offset < start + fadeMargin) {
        opacity = THREE.MathUtils.mapLinear(offset, start - fadeMargin, start + fadeMargin, 0, 1)
      }
      // Full visibility
      else if (offset <= end - fadeMargin) {
        opacity = 1
      }
      // Fade out
      else {
        opacity = THREE.MathUtils.mapLinear(offset, end - fadeMargin, end + fadeMargin, 1, 0)
      }
    }

    opacity = THREE.MathUtils.clamp(opacity, 0, 1)

    if (groupRef.current) {
      groupRef.current.visible = opacity > 0.01
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.8, 1, opacity))

      // Update material opacity for all children
      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const mat = child.material as THREE.MeshStandardMaterial
          if (mat.transparent !== undefined) {
            mat.transparent = true
            mat.opacity = opacity
          }
        }
      })
    }
  })

  return <group ref={groupRef}>{children}</group>
}
