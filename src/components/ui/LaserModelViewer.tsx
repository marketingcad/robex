'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function LaserModel() {
  const { scene } = useGLTF('/models/laser-engraver.glb')
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
}

export default function LaserModelViewer() {
  return (
    <div className="w-full aspect-square rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-3, 2, -3]} intensity={0.3} color="#00BFFF" />
        <Suspense fallback={null}>
          <LaserModel />
          <Environment preset="warehouse" />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/laser-engraver.glb')
