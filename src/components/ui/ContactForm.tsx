'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { trackFormSubmission } from '@/lib/analytics'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: FormData) {
    const errs: Record<string, string> = {}
    if (!form.get('name')) errs.name = 'Full name is required'
    if (!form.get('company')) errs.company = 'Company name is required'
    const email = form.get('email') as string
    if (!email) {
      errs.email = 'Work email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email'
    }
    if (!form.get('message')) errs.message = 'Message is required'
    return errs
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const errs = validate(form)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setSubmitted(true)
    trackFormSubmission()
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-lg border border-accent-blue/30 bg-bg-light/60 text-center"
      >
        <h3 className="font-heading text-subtitle text-text-primary mb-2">
          Thank You
        </h3>
        <p className="font-body text-body text-text-secondary">
          Our engineering sales team will be in touch shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field name="name" label="Full Name" error={errors.name} />
        <Field name="company" label="Company Name" error={errors.company} />
        <Field name="email" label="Work Email" type="email" error={errors.email} />
        <Field name="message" label="Message" multiline error={errors.message} />

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-accent-orange text-bg-dark font-heading font-bold text-body tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-accent-orange/20"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  )
}

function Field({
  name,
  label,
  type = 'text',
  multiline = false,
  error,
}: {
  name: string
  label: string
  type?: string
  multiline?: boolean
  error?: string
}) {
  const baseClass =
    'w-full px-4 py-3 rounded-lg bg-bg-light border border-border-color text-text-primary font-body text-body placeholder-text-secondary/50 focus:outline-none focus:border-accent-blue transition-colors'

  return (
    <div>
      <label htmlFor={name} className="block font-body text-small text-text-secondary mb-1">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          className={`${baseClass} resize-none`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={baseClass}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      )}
      {error && <p className="mt-1 text-small text-red-400">{error}</p>}
    </div>
  )
}
