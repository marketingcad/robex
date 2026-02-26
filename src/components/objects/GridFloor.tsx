'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Grid } from '@react-three/drei'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { SECTIONS, COLORS } from '@/lib/constants'

export default function GridFloor() {
  const groupRef = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  useFrame(() => {
    if (!groupRef.current) return

    const offset = scroll.offset
    const { start, end } = SECTIONS.products

    // Fade in during products section
    let opacity = 0
    if (offset >= start - 0.05 && offset <= end + 0.05) {
      if (offset < start + 0.05) {
        opacity = THREE.MathUtils.mapLinear(offset, start - 0.05, start + 0.05, 0, 1)
      } else if (offset <= end - 0.05) {
        opacity = 1
      } else {
        opacity = THREE.MathUtils.mapLinear(offset, end - 0.05, end + 0.05, 1, 0)
      }
    }

    groupRef.current.visible = opacity > 0.01
  })

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      <Grid
        infiniteGrid
        cellSize={0.5}
        cellThickness={0.5}
        cellColor={COLORS.border}
        sectionSize={2}
        sectionThickness={1}
        sectionColor={COLORS.accentBlue}
        fadeDistance={20}
        fadeStrength={1}
      />
    </group>
  )
}
