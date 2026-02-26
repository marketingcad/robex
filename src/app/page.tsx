'use client'

import { Component, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/ui/Navbar'
import LoadingScreen from '@/components/ui/LoadingScreen'
import { useDeviceDetect } from '@/hooks/useDeviceDetect'

const Scene = dynamic(() => import('@/components/r3f/Scene'), { ssr: false })

class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false, error: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-bg-dark text-text-secondary font-body text-small">
          <p>3D scene failed to load. Please refresh the page.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default function Home() {
  useDeviceDetect()

  return (
    <main className="w-screen h-screen">
      <Navbar />
      <SceneErrorBoundary>
        <Scene />
      </SceneErrorBoundary>
      <LoadingScreen />
    </main>
  )
}
