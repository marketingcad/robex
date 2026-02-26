'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/ui/Navbar'
import LoadingScreen from '@/components/ui/LoadingScreen'
import { useDeviceDetect } from '@/hooks/useDeviceDetect'

const Scene = dynamic(() => import('@/components/r3f/Scene'), { ssr: false })

export default function Home() {
  useDeviceDetect()

  return (
    <main className="w-screen h-screen">
      <Navbar />
      <Scene />
      <LoadingScreen />
    </main>
  )
}
