export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  keySpec: string
  image: string
}

export interface SectionRange {
  start: number
  end: number
}

export interface CameraKeyframe {
  position: [number, number, number]
  lookAt: [number, number, number]
}

export interface StatItem {
  value: string
  label: string
}
