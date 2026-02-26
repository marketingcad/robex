'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactForm from '../ui/ContactForm'
import Footer from '../ui/Footer'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/contact-bg.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bg-dark/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Build Your Competitive Edge
          </h2>
          <div className="mt-3 w-16 h-1 bg-accent-blue mx-auto rounded-full" />
          <p className="mt-6 font-body text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Your production challenges are unique, and so is the solution we will
            build for you. Connect with our engineering team to discuss your specific
            manufacturing requirements.
          </p>
        </motion.div>

        <ContactForm />

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </section>
  )
}
