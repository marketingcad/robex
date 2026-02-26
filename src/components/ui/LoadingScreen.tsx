'use client'

import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGlobalStore } from '@/stores/useGlobalStore'

export default function LoadingScreen() {
  const { progress, active } = useProgress()
  const setIsLoading = useGlobalStore((s) => s.setIsLoading)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (progress === 100 && !active) {
      const timer = setTimeout(() => {
        setShow(false)
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [progress, active, setIsLoading])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-dark"
        >
          <h1 className="font-heading text-title text-text-primary mb-8 tracking-wider">
            ROBEX SOLUTIONS
          </h1>

          <div className="w-64 h-1 bg-border-color rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent-blue rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="mt-4 text-small text-text-secondary font-body">
            {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
