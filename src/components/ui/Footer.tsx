'use client'

import { CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="pt-12 pb-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">
        <a
          href={`mailto:${CONTACT.email}`}
          className="group text-center"
        >
          <div className="font-body text-xs uppercase tracking-widest text-text-secondary mb-1">
            Email
          </div>
          <div className="font-heading text-xl md:text-2xl font-bold text-accent-blue group-hover:text-text-primary transition-colors duration-300">
            {CONTACT.email}
          </div>
        </a>
        <div className="hidden md:block w-px h-10 bg-border-color" />
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
          className="group text-center"
        >
          <div className="font-body text-xs uppercase tracking-widest text-text-secondary mb-1">
            Phone
          </div>
          <div className="font-heading text-xl md:text-2xl font-bold text-accent-blue group-hover:text-text-primary transition-colors duration-300">
            {CONTACT.phone}
          </div>
        </a>
      </div>
      <div className="text-center">
        <p className="font-body text-small text-text-secondary/60">
          &copy; 2026 Robex Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
