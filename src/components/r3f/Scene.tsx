'use client'

import { Component, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Vector2 } from 'three'
import SceneManager from './SceneManager'
import { useGlobalStore } from '@/stores/useGlobalStore'
import { POST_PROCESSING, PRODUCTS } from '@/lib/constants'
import SectionTitle from '../ui/SectionTitle'
import ProductCard from '../ui/ProductCard'
import ContactForm from '../ui/ContactForm'
import Footer from '../ui/Footer'

// Error boundary that renders nothing on failure (safe for R3F tree)
class R3FErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

function PostProcessing() {
  const isMobile = useGlobalStore((s) => s.isMobile)

  if (isMobile) return null

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={POST_PROCESSING.bloom.intensity}
        luminanceThreshold={POST_PROCESSING.bloom.luminanceThreshold}
        luminanceSmoothing={POST_PROCESSING.bloom.luminanceSmoothing}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new Vector2(...POST_PROCESSING.chromaticAberration.offset)}
        radialModulation={false}
        modulationOffset={0}
      />
      <Vignette
        offset={POST_PROCESSING.vignette.offset}
        darkness={POST_PROCESSING.vignette.darkness}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}

function ScrollContent() {
  return (
    <Scroll html style={{ width: '100%' }}>
      {/* Hero Section (0-100vh) */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-end justify-center pb-32 pointer-events-none">
        <p className="font-heading text-subtitle text-text-secondary tracking-widest">
          Precision in Motion
        </p>
      </div>

      {/* About Section (100vh-200vh) */}
      <div className="absolute top-[100vh] left-0 w-full h-screen px-8 md:px-16 flex items-center">
        <div className="max-w-lg">
          <SectionTitle
            title="Engineering the Future of Manufacturing"
            subtitle="Since 2010, Robex Solutions has been at the forefront of industrial automation. Our precision-engineered systems serve over 15 countries, delivering 99% uptime guarantees across all deployed solutions."
          />
          <div className="mt-6 space-y-3">
            <p className="font-body text-small text-text-secondary leading-relaxed">
              We believe that manufacturing excellence starts with uncompromising precision.
              Every machine we build is designed to push the boundaries of what&apos;s possible
              in industrial automation.
            </p>
            <p className="font-body text-small text-text-secondary leading-relaxed">
              From fiber laser cutting systems to AI-driven vision inspection platforms,
              our product line represents the pinnacle of modern manufacturing technology.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section (200vh-300vh) */}
      <div className="absolute top-[200vh] left-0 w-full h-screen px-8 md:px-16 flex flex-col justify-center">
        <SectionTitle title="A Showcase of Precision" align="center" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* Contact Section (300vh-400vh) */}
      <div className="absolute top-[300vh] left-0 w-full h-screen px-8 md:px-16 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto w-full">
          <SectionTitle
            title="Let's Build the Future Together"
            subtitle="Connect with our engineering sales team to discuss how Robex Solutions can transform your manufacturing capabilities."
            align="center"
          />
          <div className="mt-8">
            <ContactForm />
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </Scroll>
  )
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <ScrollControls pages={4} damping={0.25}>
        <SceneManager />
        <ScrollContent />
      </ScrollControls>
      <R3FErrorBoundary>
        <PostProcessing />
      </R3FErrorBoundary>
    </Canvas>
  )
}
