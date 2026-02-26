'use client'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-bg-dark/80 backdrop-blur-sm border-b border-border-color/50">
      <a href="#hero" className="font-heading text-body font-bold text-text-primary tracking-wider">
        ROBEX
      </a>

      <div className="flex gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-body text-small text-text-secondary transition-colors duration-300 hover:text-accent-blue"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
