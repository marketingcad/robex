'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Text } from '@react-three/drei'
import * as THREE from 'three'
import { MATERIALS, COLORS, SECTIONS, STATS } from '@/lib/constants'
import Section3D from './Section3D'
import { useGlobalStore } from '@/stores/useGlobalStore'

function ValuePrimitive({
  position,
  type,
}: {
  position: [number, number, number]
  type: 'icosahedron' | 'box' | 'octahedron'
}) {
  const ref = useRef<THREE.Mesh>(null!)
  const scroll = useScroll()
  const prefersReducedMotion = useGlobalStore((s) => s.prefersReducedMotion)

  useFrame((_, delta) => {
    if (!ref.current) return

    // Scale up as user enters the About section
    const offset = scroll.offset
    const progress = THREE.MathUtils.clamp(
      THREE.MathUtils.mapLinear(offset, SECTIONS.about.start, SECTIONS.about.start + 0.1, 0, 1),
      0,
      1
    )
    const scale = THREE.MathUtils.lerp(0.25, 0.6, progress)
    ref.current.scale.setScalar(scale)

    if (!prefersReducedMotion) {
      ref.current.rotation.y += delta * 0.2
      ref.current.rotation.x += delta * 0.1
    }
  })

  const geometry =
    type === 'icosahedron' ? (
      <icosahedronGeometry args={[1, 0]} />
    ) : type === 'box' ? (
      <boxGeometry args={[1, 1, 1]} />
    ) : (
      <octahedronGeometry args={[1, 0]} />
    )

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshPhysicalMaterial
        metalness={MATERIALS.chrome.metalness}
        roughness={MATERIALS.chrome.roughness}
        color={MATERIALS.chrome.color}
        envMapIntensity={MATERIALS.chrome.envMapIntensity}
      />
    </mesh>
  )
}

function StatText({ value, label, position }: { value: string; label: string; position: [number, number, number] }) {
  return (
    <group position={position}>
      <Text
        fontSize={0.3}
        letterSpacing={0.02}
        anchorX="center"
        anchorY="middle"
      >
        {value}
        <meshStandardMaterial
          color={COLORS.accentBlue}
          emissive={COLORS.accentBlue}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </Text>
      <Text
        position={[0, -0.3, 0]}
        fontSize={0.1}
        anchorX="center"
        anchorY="middle"
      >
        {label}
        <meshStandardMaterial color={COLORS.textSecondary} />
      </Text>
    </group>
  )
}

export default function SectionAbout() {
  return (
    <Section3D range={[0.25, 0.5]}>
      <ValuePrimitive position={[-4.5, 0, 0]} type="icosahedron" />
      <ValuePrimitive position={[-3, 0, 0]} type="box" />
      <ValuePrimitive position={[-1.5, 0, 0]} type="octahedron" />

      {STATS.map((stat) => (
        <StatText key={stat.value} value={stat.value} label={stat.label} position={stat.position} />
      ))}
    </Section3D>
  )
}
