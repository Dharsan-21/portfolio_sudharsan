import { supabase } from "../../lib/supabase";
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  PiEnvelopeSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiMapPin,
} from 'react-icons/pi'
import { contact, site } from '../../data/portfolio'
import { fadeUp, inViewOptions, stagger } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'

const linkIconMap = {
  email: PiEnvelopeSimple,
  linkedin: PiLinkedinLogo,
  github: PiGithubLogo,
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, inViewOptions)
  const reducedMotion = useReducedMotion()

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (e) => {
    setFormState((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  const handleSubmit = async () => {
    if (
      !formState.name ||
      !formState.email ||
      !formState.message
    ) {
      alert("Please fill all fields")
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
      ])

    setLoading(false)

if (error) {
  console.error("Supabase Error:", error)
  alert(
    `Error: ${error.message}\n\nCode: ${error.code || "N/A"}`
  )
  return
}

    setSubmitted(true)

    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  const inputClass =
    'w-full rounded-md border border-border bg-bg-surface px-4 py-3 text-text-body placeholder:text-text-faint transition-colors focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30'

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={inView || reducedMotion ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={reducedMotion ? undefined : fadeUp}>
            <SectionLabel>{contact.label}</SectionLabel>

            <h2 className="font-display text-3xl text-text-primary md:text-section text-balance">
              {contact.headline}
            </h2>

            <p className="mt-4 max-w-xl text-body-lg text-text-muted">
              {contact.subheadline}
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">

            <motion.div variants={reducedMotion ? undefined : fadeUp}>

              {submitted ? (
                <p className="rounded-lg border border-border bg-bg-surface p-6 text-text-body">
                  {contact.form.successMessage}
                </p>
              ) : (
                <div className="space-y-5">

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm text-text-muted"
                    >
                      {contact.form.nameLabel}
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange("name")}
                      placeholder={contact.form.namePlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm text-text-muted"
                    >
                      {contact.form.emailLabel}
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange("email")}
                      placeholder={contact.form.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm text-text-muted"
                    >
                      {contact.form.messageLabel}
                    </label>

                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange("message")}
                      placeholder={contact.form.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : contact.form.submitLabel}
                  </Button>

                </div>
              )}

            </motion.div>

            <motion.div
              variants={reducedMotion ? undefined : fadeUp}
              className="space-y-8"
            >

              <div className="space-y-6">
                {contact.links.map((link) => {
                  const Icon = linkIconMap[link.type]

                  return (
                    <a
                      key={link.type}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4"
                    >
                      <Icon
                        size={22}
                        className="mt-0.5 text-text-muted group-hover:text-accent-blue"
                      />

                      <div>
                        <p className="text-sm text-text-faint">
                          {link.label}
                        </p>

                        <p className="text-text-body">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="flex items-start gap-4 border-t border-border-subtle pt-8">
                <PiMapPin
                  size={22}
                  className="mt-0.5 text-text-muted"
                />

                <div>
                  <p className="text-sm text-text-faint">
                    {site.locationLabel}
                  </p>

                  <p className="text-text-body">
                    {site.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                </span>

                <span className="text-sm text-text-muted">
                  {site.availability}
                </span>
              </div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}