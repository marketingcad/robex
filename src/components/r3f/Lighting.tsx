'use client'

import { Environment } from '@react-three/drei'
import { LIGHTING } from '@/lib/constants'

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={LIGHTING.ambient.intensity} color={LIGHTING.ambient.color} />
      <directionalLight
        position={LIGHTING.key.position}
        intensity={LIGHTING.key.intensity}
        color={LIGHTING.key.color}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight
        position={LIGHTING.fill.position}
        intensity={LIGHTING.fill.intensity}
        color={LIGHTING.fill.color}
      />
      <directionalLight
        position={LIGHTING.rim.position}
        intensity={LIGHTING.rim.intensity}
        color={LIGHTING.rim.color}
      />
      <Environment preset="studio" />
    </>
  )
}
