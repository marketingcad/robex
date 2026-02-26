'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGlobalStore } from '@/stores/useGlobalStore'
import { PARTICLES } from '@/lib/constants'

export default function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null!)
  const isMobile = useGlobalStore((s) => s.isMobile)
  const prefersReducedMotion = useGlobalStore((s) => s.prefersReducedMotion)

  const count = isMobile ? PARTICLES.mobileCount : PARTICLES.desktopCount

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * PARTICLES.spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * PARTICLES.spread
      pos[i * 3 + 2] = (Math.random() - 0.5) * PARTICLES.spread
      sz[i] = PARTICLES.size.min + Math.random() * (PARTICLES.size.max - PARTICLES.size.min)
    }
    return [pos, sz]
  }, [count])

  useFrame(({ clock }) => {
    if (prefersReducedMotion || !pointsRef.current) return

    const time = clock.elapsedTime * 0.1
    const geometry = pointsRef.current.geometry
    const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute
    const array = posAttr.array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Slow sinusoidal drift
      array[i3] += Math.sin(time + i * 0.1) * 0.001
      array[i3 + 1] += Math.cos(time + i * 0.15) * 0.001
      array[i3 + 2] += Math.sin(time + i * 0.2) * 0.0005
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
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        sizeAttenuation
        color={PARTICLES.color}
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  )
}
