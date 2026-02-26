'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-main.png"
        alt="A Robex Solutions manufacturing floor featuring rows of high-performance CNC machining centers"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/30 to-bg-dark" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight leading-tight"
        >
          Engineering Precision.
          <br />
          <span className="text-accent-blue">Manufacturing Victory.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          High-performance CNC machinery and automation solutions — engineered
          for China&apos;s most demanding manufacturing leaders.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 inline-block px-8 py-4 rounded-lg bg-accent-blue text-bg-dark font-heading font-bold text-lg tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-accent-blue/30"
        >
          Explore Our Solutions
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-text-secondary/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent-blue"
          />
        </div>
      </motion.div>
    </section>
  )
}
