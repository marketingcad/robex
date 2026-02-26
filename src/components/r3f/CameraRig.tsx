'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { useGlobalStore } from '@/stores/useGlobalStore'
import { CAMERA_KEYFRAMES } from '@/lib/constants'
import { trackScrollDepth } from '@/lib/analytics'

const tempPos = new THREE.Vector3()
const tempLookAt = new THREE.Vector3()
const currentLookAt = new THREE.Vector3()

function lerpKeyframes(
  offset: number,
  keyframes: typeof CAMERA_KEYFRAMES,
  outPos: THREE.Vector3,
  outLookAt: THREE.Vector3
) {
  // Map scroll offset (0-1) to keyframe indices
  // 0.0-0.25 = Hero (keyframe 0→1), 0.25-0.5 = About (1→2),
  // 0.5-0.75 = Products (2→3), 0.75-1.0 = Contact (3→4)
  const totalSegments = keyframes.length - 1
  const scaledOffset = offset * totalSegments
  const index = Math.min(Math.floor(scaledOffset), totalSegments - 1)
  const t = scaledOffset - index

  // Smooth step for more cinematic easing
  const smoothT = t * t * (3 - 2 * t)

  const from = keyframes[index]
  const to = keyframes[index + 1]

  outPos.set(
    THREE.MathUtils.lerp(from.position[0], to.position[0], smoothT),
    THREE.MathUtils.lerp(from.position[1], to.position[1], smoothT),
    THREE.MathUtils.lerp(from.position[2], to.position[2], smoothT)
  )

  outLookAt.set(
    THREE.MathUtils.lerp(from.lookAt[0], to.lookAt[0], smoothT),
    THREE.MathUtils.lerp(from.lookAt[1], to.lookAt[1], smoothT),
    THREE.MathUtils.lerp(from.lookAt[2], to.lookAt[2], smoothT)
  )
}

export default function CameraRig() {
  const scroll = useScroll()
  const { camera } = useThree()
  const setScrollProgress = useGlobalStore((s) => s.setScrollProgress)
  const setCurrentSection = useGlobalStore((s) => s.setCurrentSection)
  const initialized = useRef(false)
  const trackedDepths = useRef(new Set<number>())

  useFrame((_, delta) => {
    const offset = scroll.offset

    // Update Zustand store
    setScrollProgress(offset)
    const sectionIndex = Math.min(Math.floor(offset * 4), 3)
    setCurrentSection(sectionIndex)

    // Track scroll depth analytics (fire once per threshold)
    for (const threshold of [25, 50, 75, 100]) {
      if (offset * 100 >= threshold && !trackedDepths.current.has(threshold)) {
        trackedDepths.current.add(threshold)
        trackScrollDepth(threshold)
      }
    }

    // Calculate target camera position and lookAt
    lerpKeyframes(offset, CAMERA_KEYFRAMES, tempPos, tempLookAt)

    // Damp the camera toward the target for smooth movement
    const dampFactor = initialized.current ? 4 : 100
    camera.position.x = THREE.MathUtils.damp(camera.position.x, tempPos.x, dampFactor, delta)
    camera.position.y = THREE.MathUtils.damp(camera.position.y, tempPos.y, dampFactor, delta)
    camera.position.z = THREE.MathUtils.damp(camera.position.z, tempPos.z, dampFactor, delta)

    // Damp the lookAt target
    currentLookAt.x = THREE.MathUtils.damp(currentLookAt.x, tempLookAt.x, dampFactor, delta)
    currentLookAt.y = THREE.MathUtils.damp(currentLookAt.y, tempLookAt.y, dampFactor, delta)
    currentLookAt.z = THREE.MathUtils.damp(currentLookAt.z, tempLookAt.z, dampFactor, delta)

    camera.lookAt(currentLookAt)

    if (!initialized.current) initialized.current = true
  })

  return null
}
