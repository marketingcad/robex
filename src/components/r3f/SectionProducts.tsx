'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PresentationControls, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { PRODUCTS, MATERIALS, COLORS, SECTIONS } from '@/lib/constants'
import { useGlobalStore } from '@/stores/useGlobalStore'
import Section3D from './Section3D'
import GridFloor from '../objects/GridFloor'
import { trackProductInteraction } from '@/lib/analytics'
import type { Product } from '@/types'

function ProductPrimitive({ product }: { product: Product }) {
  const ref = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!)
  const [hovered, setHovered] = useState(false)
  const setActiveProduct = useGlobalStore((s) => s.setActiveProduct)
  const prefersReducedMotion = useGlobalStore((s) => s.prefersReducedMotion)
  const scroll = useScroll()

  useFrame((_, delta) => {
    if (!ref.current) return

    // Rise-up animation based on scroll
    const offset = scroll.offset
    const progress = THREE.MathUtils.clamp(
      THREE.MathUtils.mapLinear(offset, SECTIONS.products.start, SECTIONS.products.start + 0.1, 0, 1),
      0,
      1
    )
    ref.current.position.y = THREE.MathUtils.lerp(-2, 0, progress)

    // Auto-rotate
    if (!prefersReducedMotion) {
      ref.current.rotation.y += delta * 0.4
    }

    // Hover glow
    if (materialRef.current) {
      const targetIntensity = hovered ? 2.0 : 0
      materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        materialRef.current.emissiveIntensity,
        targetIntensity,
        0.1
      )
    }
  })

  const geometry = {
    octahedron: <octahedronGeometry args={[0.6, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[0.6, 0]} />,
    sphere: <sphereGeometry args={[0.6, 32, 32]} />,
    icosahedron: <icosahedronGeometry args={[0.6, 0]} />,
  }[product.primitiveType]

  return (
    <PresentationControls
      global={false}
      snap
      polar={[-Math.PI / 4, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
    >
      <mesh
        ref={ref}
        position={product.position}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'grab'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
        onClick={(e) => {
          e.stopPropagation()
          setActiveProduct(product.id)
          trackProductInteraction(product.id)
        }}
      >
        {geometry}
        <meshPhysicalMaterial
          ref={materialRef}
          metalness={MATERIALS.chrome.metalness}
          roughness={MATERIALS.chrome.roughness}
          color={MATERIALS.chrome.color}
          envMapIntensity={MATERIALS.chrome.envMapIntensity}
          emissive={COLORS.accentBlue}
          emissiveIntensity={0}
        />
      </mesh>
    </PresentationControls>
  )

  // Rings for the sphere/welder product
}

function SphereWithRings({ product }: { product: Product }) {
  const ref = useRef<THREE.Group>(null!)
  const ringRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!)
  const [hovered, setHovered] = useState(false)
  const setActiveProduct = useGlobalStore((s) => s.setActiveProduct)
  const prefersReducedMotion = useGlobalStore((s) => s.prefersReducedMotion)
  const scroll = useScroll()

  useFrame((_, delta) => {
    if (!ref.current) return

    const offset = scroll.offset
    const progress = THREE.MathUtils.clamp(
      THREE.MathUtils.mapLinear(offset, SECTIONS.products.start, SECTIONS.products.start + 0.1, 0, 1),
      0,
      1
    )
    ref.current.position.y = THREE.MathUtils.lerp(-2, 0, progress)

    if (!prefersReducedMotion) {
      ref.current.rotation.y += delta * 0.4
      if (ringRef.current) ringRef.current.rotation.x += delta * 0.6
    }

    if (materialRef.current) {
      const targetIntensity = hovered ? 2.0 : 0
      materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        materialRef.current.emissiveIntensity,
        targetIntensity,
        0.1
      )
    }
  })

  return (
    <PresentationControls
      global={false}
      snap
      polar={[-Math.PI / 4, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
    >
      <group
        ref={ref}
        position={product.position}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'grab'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
        onClick={(e) => {
          e.stopPropagation()
          setActiveProduct(product.id)
          trackProductInteraction(product.id)
        }}
      >
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial
            ref={materialRef}
            metalness={MATERIALS.chrome.metalness}
            roughness={MATERIALS.chrome.roughness}
            color={MATERIALS.chrome.color}
            envMapIntensity={MATERIALS.chrome.envMapIntensity}
            emissive={COLORS.accentBlue}
            emissiveIntensity={0}
          />
        </mesh>
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.75, 0.02, 16, 100]} />
          <meshStandardMaterial
            color={COLORS.accentBlue}
            emissive={COLORS.accentBlue}
            emissiveIntensity={1.5}
            toneMapped={false}
          />
        </mesh>
      </group>
    </PresentationControls>
  )
}

export default function SectionProducts() {
  return (
    <Section3D range={[0.5, 0.75]}>
      {PRODUCTS.map((product) =>
        product.primitiveType === 'sphere' ? (
          <SphereWithRings key={product.id} product={product} />
        ) : (
          <ProductPrimitive key={product.id} product={product} />
        )
      )}
      <GridFloor />
    </Section3D>
  )
}
