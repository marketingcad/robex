'use client'

import { useEffect } from 'react'
import { useGlobalStore } from '@/stores/useGlobalStore'

export function useDeviceDetect() {
  const setIsMobile = useGlobalStore((s) => s.setIsMobile)
  const setPrefersReducedMotion = useGlobalStore((s) => s.setPrefersReducedMotion)

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        window.innerWidth < 768
      setIsMobile(mobile)
    }

    const checkMotion = () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setPrefersReducedMotion(reduced)
    }

    checkMobile()
    checkMotion()

    window.addEventListener('resize', checkMobile)
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionQuery.addEventListener('change', checkMotion)

    return () => {
      window.removeEventListener('resize', checkMobile)
      motionQuery.removeEventListener('change', checkMotion)
    }
  }, [setIsMobile, setPrefersReducedMotion])
}
