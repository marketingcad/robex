'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'

const ModelViewer = dynamic(() => import('../ui/ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] rounded-xl bg-bg-light/20 animate-pulse" />
  ),
})

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            A Manufacturers&apos; Solution
          </h2>
          <div className="mt-3 w-16 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        {/* Split layout: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative pl-6 mb-8 border-l-4 border-accent-blue"
            >
              <p className="font-heading text-xl md:text-2xl text-text-primary leading-relaxed font-medium">
                Robex Solutions was built on a single, defining conviction: that the
                manufacturers who power China&apos;s industrial economy deserve more than
                a machine.{' '}
                <motion.span
                  initial={{ backgroundSize: '0% 100%' }}
                  whileInView={{ backgroundSize: '100% 100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-accent-blue/20 to-accent-blue/10 bg-no-repeat bg-left-bottom"
                  style={{ backgroundPosition: '0 85%', paddingBottom: '2px' }}
                >
                  They deserve a partner.
                </motion.span>
              </p>
            </motion.blockquote>
            <p className="font-body text-base text-text-secondary/80 leading-relaxed mb-6">
              Founded by veteran engineers and industrial specialists, we deliver
              high-performance CNC machinery backed by deep application expertise
              and responsive support that transforms a supplier relationship into
              a genuine competitive advantage.
            </p>
            <p className="font-body text-base text-text-secondary/80 leading-relaxed">
              We listen before we recommend. We engineer before we deliver. And we
              support long after the machine is running. This commitment to partnership
              defines every interaction and every decision we make.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/about-factory.png"
              alt="Robex Solutions factory floor with CNC machines and blue LED lighting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent" />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-accent-blue">
                {stat.value}
              </div>
              <div className="mt-2 font-body text-sm text-text-secondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 3D Model showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <ModelViewer />
        </motion.div>

        {/* Value propositions */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Uncompromising Precision',
              desc: 'Sub-micron tolerances across extended production runs, delivering consistent part quality.',
            },
            {
              title: 'Built for Uptime',
              desc: 'Designed for 24/7 operation with rapid-response local service across industrial hubs.',
            },
            {
              title: 'Lifecycle Partnership',
              desc: 'From application engineering and installation to training and preventative maintenance.',
            },
            {
              title: 'China-Focused Expertise',
              desc: 'Operations, service, and product strategy calibrated to the Chinese manufacturing market.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-6 rounded-xl border border-border-color/50 bg-bg-light/30 hover:border-accent-blue/30 transition-colors duration-300"
            >
              <h3 className="font-heading text-base font-bold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
