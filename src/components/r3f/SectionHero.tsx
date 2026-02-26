'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'
import { MATERIALS, COLORS } from '@/lib/constants'
import Section3D from './Section3D'
import ScrollIndicator from '../objects/ScrollIndicator'
import { useGlobalStore } from '@/stores/useGlobalStore'

function HeroTorusKnot() {
  const ref = useRef<THREE.Mesh>(null!)
  const prefersReducedMotion = useGlobalStore((s) => s.prefersReducedMotion)

  useFrame((_, delta) => {
    if (prefersReducedMotion || !ref.current) return
    ref.current.rotation.y += delta * 0.3
  })

  return (
    <mesh ref={ref} position={[1.5, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshPhysicalMaterial
        metalness={MATERIALS.chrome.metalness}
        roughness={MATERIALS.chrome.roughness}
        color={MATERIALS.chrome.color}
        envMapIntensity={MATERIALS.chrome.envMapIntensity}
      />
    </mesh>
  )
}

function HeroText() {
  return (
    <Float speed={2} floatIntensity={0.5} rotationIntensity={0.1}>
      <Text
        position={[-1, 0.5, 0]}
        fontSize={0.35}
        maxWidth={3}
        lineHeight={1.2}
        letterSpacing={0.05}
        textAlign="left"
        font="/fonts/SpaceGrotesk-Bold.ttf"
        anchorX="left"
        anchorY="middle"
      >
        ROBEX{'\n'}SOLUTIONS
        <meshStandardMaterial
          color={COLORS.accentBlue}
          emissive={COLORS.accentBlue}
          emissiveIntensity={MATERIALS.emissiveBlue.emissiveIntensity}
          toneMapped={false}
        />
      </Text>
    </Float>
  )
}

export default function SectionHero() {
  return (
    <Section3D range={[0, 0.25]}>
      <HeroTorusKnot />
      <HeroText />
      <ScrollIndicator />
    </Section3D>
  )
}
