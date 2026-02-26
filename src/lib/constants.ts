import type { Product, StatItem } from '@/types'

// ─── Colors ──────────────────────────────────────────────
export const COLORS = {
  bgDark: '#0A0A0A',
  bgLight: '#111111',
  textPrimary: '#E5E5E5',
  textSecondary: '#A3A3A3',
  accentBlue: '#00BFFF',
  accentOrange: '#FFA500',
  border: '#222222',
} as const

// ─── Products (from PRODUCTS_CATALOG.md) ─────────────────
export const PRODUCTS: Product[] = [
  {
    id: 'v500',
    name: 'Robex V-500',
    category: 'Vertical Machining',
    tagline: 'Compact, high-speed precision for agile production environments.',
    description:
      'Direct-drive spindle delivers exceptional speed and surface finish capability. Rigid C-frame construction ensures accuracy and repeatability across the full work envelope.',
    keySpec: '12,000 RPM Direct-Drive Spindle',
    image: '/images/product-cnc.png',
  },
  {
    id: 'v750',
    name: 'Robex V-750',
    category: 'Vertical Machining',
    tagline: 'Heavy-duty power and rigidity for demanding production applications.',
    description:
      'Robust box-way construction and high-torque spindle for heavy roughing in steel, cast iron, and difficult materials while maintaining precision throughout the cycle.',
    keySpec: '22 kW High-Torque Spindle',
    image: '/images/product-laser.png',
  },
  {
    id: 'h630',
    name: 'Robex H-630',
    category: 'Horizontal Machining',
    tagline: 'Continuous, automated production with an integrated pallet changer.',
    description:
      'Standard 2-station automatic pallet changer enables simultaneous machining and loading, virtually eliminating non-productive time.',
    keySpec: '60-Tool High-Capacity ATC',
    image: '/images/product-press.png',
  },
  {
    id: 't350my',
    name: 'Robex T-350MY',
    category: 'CNC Turning',
    tagline: 'Multi-axis turning and milling — complete parts in one setup.',
    description:
      'Combines turning, milling, drilling, and Y-axis capability for complete DONE-IN-ONE part processing, eliminating secondary operations.',
    keySpec: '±50 mm Y-Axis with Live Tooling',
    image: '/images/product-conveyor.png',
  },
  {
    id: 'x500',
    name: 'Robex X-500',
    category: '5-Axis Machining',
    tagline: 'Simultaneous 5-axis machining for complex, high-value components.',
    description:
      'High-speed tilting rotary table enables machining of complex contoured surfaces, undercuts, and compound angles in a single setup.',
    keySpec: '20,000 RPM High-Speed Spindle',
    image: '/images/product-robot-arm.png',
  },
]

// ─── About Section Stats ─────────────────────────────────
export const STATS: StatItem[] = [
  { value: '30+', label: 'Years Experience' },
  { value: '15+', label: 'Industrial Hubs' },
  { value: '500+', label: 'Machines Deployed' },
  { value: '98%', label: 'Client Uptime' },
]

// ─── Contact Info ────────────────────────────────────────
export const CONTACT = {
  email: 'sales@robexsolutions.com',
  phone: '+86 (21) 5555-8888',
  address: 'Shanghai, China',
}

// ─── Particles (for optional 3D background) ──────────────
export const PARTICLES = {
  desktopCount: 500,
  mobileCount: 200,
  size: { min: 0.01, max: 0.03 },
  color: '#A3A3A3',
  spread: 20,
}
