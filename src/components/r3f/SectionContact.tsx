'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { SECTIONS, PARTICLES } from '@/lib/constants'
import Section3D from './Section3D'
import GlowOrb from '../objects/GlowOrb'
import { useGlobalStore } from '@/stores/useGlobalStore'

function DenseParticles() {
  const pointsRef = useRef<THREE.Points>(null!)
  const isMobile = useGlobalStore((s) => s.isMobile)
  const prefersReducedMotion = useGlobalStore((s) => s.prefersReducedMotion)

  const count = isMobile ? 100 : 300

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5
    }
    return pos
  }, [count])

  useFrame(({ clock }) => {
    if (prefersReducedMotion || !pointsRef.current) return

    const time = clock.elapsedTime * 0.15
    const posAttr = pointsRef.current.geometry.getAttribute('position') as THREE.BufferAttribute
    const array = posAttr.array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      array[i3] += Math.sin(time + i * 0.08) * 0.002
      array[i3 + 1] += Math.cos(time + i * 0.12) * 0.002
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation
        color="#E5E5E5"
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  )
}

export default function SectionContact() {
  return (
    <Section3D range={[0.75, 1.0]}>
      <GlowOrb position={[0, 0, -10]} color="#FFA500" baseIntensity={3.0} pulseRange={1.0} size={2} />
      <DenseParticles />
    </Section3D>
  )
}
