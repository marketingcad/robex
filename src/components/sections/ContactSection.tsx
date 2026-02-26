'use client'

import { motion } from 'framer-motion'
import ContactForm from '../ui/ContactForm'
import Footer from '../ui/Footer'
import BeamsBackground from '../ui/BeamsBackground'

export default function ContactSection() {
  return (
    <section id="contact">
      <BeamsBackground className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
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

          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>

          <div className="mt-16">
            <Footer />
          </div>
        </div>
      </BeamsBackground>
    </section>
  )
}
