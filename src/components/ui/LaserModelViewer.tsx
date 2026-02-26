'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center, Float, ContactShadows } from '@react-three/drei'

function LaserModel() {
  const { scene } = useGLTF('/models/laser-engraver.glb')
  return (
    <Center>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <primitive object={scene} />
      </Float>
    </Center>
  )
}

function LoadingPlaceholder() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00BFFF" wireframe opacity={0.3} transparent />
    </mesh>
  )
}

export default function LaserModelViewer() {
  return (
    <div className="w-full aspect-square rounded-xl overflow-hidden border border-border-color/30">
      <Canvas
        camera={{ position: [3, 2, 3], fov: 50, near: 0.1, far: 100 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#00BFFF" />
        <pointLight position={[0, 5, 0]} intensity={0.3} color="#00BFFF" />
        <Suspense fallback={<LoadingPlaceholder />}>
          <LaserModel />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/laser-engraver.glb')
