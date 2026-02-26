'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PRODUCTS } from '@/lib/constants'

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-bg-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            A Portfolio Built on Precision
          </h2>
          <div className="mt-3 w-16 h-1 bg-accent-orange mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center font-body text-base text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Every machine in the Robex Solutions portfolio is the product of rigorous
          engineering and a deep understanding of real-world manufacturing demands.
          Explore our featured solutions.
        </motion.p>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative rounded-xl overflow-hidden border border-border-color/50 bg-bg-dark hover:border-accent-blue/40 transition-all duration-300"
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.tagline}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-body font-medium bg-accent-blue/20 text-accent-blue border border-accent-blue/30">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-text-primary mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-3 leading-relaxed">
                  {product.tagline}
                </p>
                <div className="flex items-center gap-2 text-accent-orange">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-body text-xs font-medium">{product.keySpec}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-base text-text-secondary mb-4">
            Ready to configure your solution?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-accent-orange text-bg-dark font-heading font-bold text-base tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-accent-orange/20"
          >
            Request a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
