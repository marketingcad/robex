export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  primitiveType: 'octahedron' | 'dodecahedron' | 'sphere' | 'icosahedron'
  position: [number, number, number]
  color: string
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
  position: [number, number, number]
}
