'use client'

import clsx from 'clsx'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeHref, setActiveHref] = useState('')

  const isActive = (href: string) => activeHref === href

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3">
      <a
        href="#hero"
        onClick={() => setActiveHref('')}
        className="font-heading text-body font-bold text-text-primary tracking-wider"
      >
        ROBEX
      </a>

      <div className="flex items-center justify-center">
        <div className="flex items-center overflow-hidden rounded-xl bg-bg-light/60 backdrop-blur-sm border border-border-color/50">
          {NAV_ITEMS.map((item, index) => {
            const active = isActive(item.href)
            const prevActive = index > 0 && isActive(NAV_ITEMS[index - 1].href)
            const nextActive =
              index < NAV_ITEMS.length - 1 &&
              isActive(NAV_ITEMS[index + 1].href)
            const isFirst = index === 0
            const isLast = index === NAV_ITEMS.length - 1

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={clsx(
                  'flex items-center justify-center px-5 py-2 text-sm font-body transition-all duration-300',
                  active
                    ? 'mx-1.5 rounded-xl bg-accent-blue text-bg-dark font-semibold'
                    : clsx(
                        'bg-bg-dark text-text-secondary hover:text-text-primary',
                        (prevActive || isFirst) && 'rounded-l-xl',
                        (nextActive || isLast) && 'rounded-r-xl'
                      )
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>

      {/* Spacer to balance the ROBEX brand on the left */}
      <div className="w-[52px]" />
    </nav>
  )
}
