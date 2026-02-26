'use client'

import { motion } from 'framer-motion'
import TypewriterTitle from '../ui/TypewriterTitle'

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.cdn.filesafe.space/62kZ0CQqMotRWvdIjMZS/media/69a06997040fbb453a6a9288.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/30 to-bg-dark" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <TypewriterTitle
          sequences={[
            { text: 'Engineering Precision.', deleteAfter: true, pauseAfter: 2000 },
            { text: 'Manufacturing Victory.', deleteAfter: true, pauseAfter: 2000 },
          ]}
          typingSpeed={60}
          deleteSpeed={35}
          autoLoop
          loopDelay={800}
          startDelay={500}
        />
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
