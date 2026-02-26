'use client'

import { useGlobalStore } from '@/stores/useGlobalStore'

const NAV_ITEMS = [
  { label: 'About', section: 1 },
  { label: 'Products', section: 2 },
  { label: 'Contact', section: 3 },
]

interface NavbarProps {
  onNavigate?: (section: number) => void
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const currentSection = useGlobalStore((s) => s.currentSection)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-bg-dark/80 backdrop-blur-sm border-b border-border-color/50">
      <div className="font-heading text-body font-bold text-text-primary tracking-wider">
        ROBEX
      </div>

      <div className="flex gap-8">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate?.(item.section)}
            className={`font-body text-small transition-colors duration-300 hover:text-accent-blue ${
              currentSection === item.section
                ? 'text-accent-blue'
                : 'text-text-secondary'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
