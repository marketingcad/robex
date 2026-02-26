'use client'

import { motion } from 'framer-motion'
import { useGlobalStore } from '@/stores/useGlobalStore'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const activeProduct = useGlobalStore((s) => s.activeProduct)
  const isActive = activeProduct === product.id

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`p-6 rounded-lg border transition-all duration-300 ${
        isActive
          ? 'border-accent-blue/50 bg-bg-light/80 shadow-lg shadow-accent-blue/10'
          : 'border-border-color/50 bg-bg-dark/60'
      }`}
    >
      <h3 className="font-heading text-subtitle text-text-primary mb-1">
        {product.name}
      </h3>
      <p className="font-body text-small text-accent-blue mb-3">
        {product.tagline}
      </p>
      <p className="font-body text-small text-text-secondary leading-relaxed">
        {product.description}
      </p>
    </motion.div>
  )
}
