import type { Product, SectionRange, CameraKeyframe, StatItem } from '@/types'

// ─── Colors ──────────────────────────────────────────────
export const COLORS = {
  bgDark: '#0A0A0A',
  bgLight: '#111111',
  textPrimary: '#E5E5E5',
  textSecondary: '#A3A3A3',
  accentBlue: '#00BFFF',
  accentOrange: '#FFA500',
  border: '#222222',
  chrome: '#C0C0C0',
  darkMatte: '#222222',
} as const

// ─── Section Ranges (scroll offset 0.0 - 1.0) ──────────
export const SECTIONS: Record<string, SectionRange> = {
  hero: { start: 0.0, end: 0.25 },
  about: { start: 0.25, end: 0.5 },
  products: { start: 0.5, end: 0.75 },
  contact: { start: 0.75, end: 1.0 },
}

export const SECTION_NAMES = ['hero', 'about', 'products', 'contact'] as const

// ─── Camera Keyframes ────────────────────────────────────
export const CAMERA_KEYFRAMES: CameraKeyframe[] = [
  { position: [0, 0, 5], lookAt: [0, 0, 0] },       // Hero start
  { position: [0, 0, 2.5], lookAt: [0, 0, 0] },     // Hero end
  { position: [-3, 0, 2], lookAt: [-3, 0, 0] },     // About
  { position: [0, 4, 4], lookAt: [0, 0, 0] },       // Products
  { position: [0, -2, 6], lookAt: [0, 0, -2] },     // Contact
]

// ─── Lighting ────────────────────────────────────────────
export const LIGHTING = {
  key: { position: [5, 5, 5] as [number, number, number], intensity: 1.5, color: '#ffffff' },
  fill: { position: [-5, 0, 5] as [number, number, number], intensity: 0.5, color: '#ffffff' },
  rim: { position: [0, 5, -5] as [number, number, number], intensity: 2.0, color: '#00BFFF' },
  ambient: { intensity: 0.2, color: '#ffffff' },
}

// ─── Materials ───────────────────────────────────────────
export const MATERIALS = {
  chrome: { metalness: 1.0, roughness: 0.15, color: '#C0C0C0', envMapIntensity: 0.8 },
  darkMatte: { metalness: 0.1, roughness: 0.8, color: '#222222' },
  emissiveBlue: { emissive: '#00BFFF', emissiveIntensity: 3.0, color: '#00BFFF' },
  emissiveOrange: { emissive: '#FFA500', emissiveIntensity: 3.0, color: '#FFA500' },
}

// ─── Products ────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: 'rx8',
    name: 'RX-8 Series Laser Cutter',
    tagline: 'Sub-micron precision across all materials.',
    description:
      'High-powered fiber laser system with intelligent beam path optimization, capable of cutting steel, aluminum, and composites with sub-micron accuracy.',
    primitiveType: 'octahedron',
    position: [-2, 0, -2],
    color: COLORS.accentBlue,
  },
  {
    id: 'ap5',
    name: 'AP-5 Automated Press',
    tagline: '500-ton force. Zero defects.',
    description:
      'Fully automated hydraulic press with adaptive force control and real-time quality monitoring. Produces zero-defect parts at industry-leading cycle times.',
    primitiveType: 'dodecahedron',
    position: [2, 0, -2],
    color: COLORS.accentBlue,
  },
  {
    id: 'carm',
    name: 'C-ARM 7-Axis Welder',
    tagline: 'Unlimited reach. Unmatched flexibility.',
    description:
      'Seven-axis robotic welding system with AI-driven seam tracking. Handles complex joint geometries with consistent, high-quality welds.',
    primitiveType: 'sphere',
    position: [-2, 0, 2],
    color: COLORS.accentBlue,
  },
  {
    id: 'vsort',
    name: 'V-SORT Vision System',
    tagline: 'See everything. Miss nothing.',
    description:
      'Multi-spectral vision inspection platform powered by deep learning. Detects surface defects, dimensional deviations, and assembly errors in real-time.',
    primitiveType: 'icosahedron',
    position: [2, 0, 2],
    color: COLORS.accentBlue,
  },
]

// ─── About Section Stats ─────────────────────────────────
export const STATS: StatItem[] = [
  { value: '2010', label: 'Year Founded', position: [-4.5, 1.5, 0] },
  { value: '15+', label: 'Countries Served', position: [-3, 1.5, 0] },
  { value: '99%', label: 'Uptime Guarantee', position: [-1.5, 1.5, 0] },
]

// ─── Contact Info ────────────────────────────────────────
export const CONTACT = {
  email: 'sales@robex.solutions.cn',
  phone: '+86 (21) 5555-8888',
  address: '123 Industrial Park, Pudong, Shanghai, China',
}

// ─── Particles ───────────────────────────────────────────
export const PARTICLES = {
  desktopCount: 500,
  mobileCount: 200,
  size: { min: 0.01, max: 0.03 },
  color: '#A3A3A3',
  spread: 20,
}

// ─── Post-Processing ─────────────────────────────────────
export const POST_PROCESSING = {
  bloom: { intensity: 0.5, luminanceThreshold: 0.6, luminanceSmoothing: 0.2 },
  chromaticAberration: { offset: [0.001, 0.001] as [number, number] },
  vignette: { offset: 0.1, darkness: 1.1 },
}
