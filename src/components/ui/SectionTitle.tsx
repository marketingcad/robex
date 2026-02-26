'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({ title, subtitle, align = 'left' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-heading text-title text-text-primary mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="font-body text-body text-text-secondary max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
