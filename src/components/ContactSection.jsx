import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, Check, Copy } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import thankYouImg from '../assets/ThankYou.png'

export default function ContactSection() {
  const { personal } = portfolioData
  const [copiedType, setCopiedType] = useState(null)
  const [isSent, setIsSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FFF8EE] text-[#491B37] px-6 sm:px-12 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left — Thank You image, no radius */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="w-full max-w-xs sm:max-w-sm overflow-hidden border border-[#491B37]/10">
            <img
              src={thankYouImg}
              alt="Thank you"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
        </motion.div>

        {/* Right — heading + pills + form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Script heading */}
          <span
            className="font-signature text-4xl sm:text-5xl text-[#491B37] leading-none mb-0 select-none"
            style={{ transform: 'rotate(-2deg)' }}
          >
            Let's connect
          </span>

          <h2 className="font-monthey text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#491B37] leading-none mb-4">
            thank<br />you.
          </h2>

          <p className="text-base text-[#491B37]/80 mb-8">
            Let's create something meaningful together.
          </p>

          {/* Contact pills — no radius */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 w-full max-w-lg mb-8">
            <button
              onClick={() => copyToClipboard(personal.phone, 'phone')}
              className="flex items-center justify-between gap-3 px-5 py-3 border border-[#491B37] text-sm font-medium text-[#491B37] hover:bg-[#491B37] hover:text-[#FFF8EE] transition-colors duration-200 group flex-1 cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#D0E4FF] text-[#491B37] flex items-center justify-center group-hover:bg-[#D0E4FF]/20">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{personal.phone}</span>
              </div>
              {copiedType === 'phone'
                ? <Check className="w-3.5 h-3.5 text-emerald-600 ml-auto" />
                : <Copy className="w-3.5 h-3.5 opacity-50 ml-auto" />}
            </button>

            <button
              onClick={() => copyToClipboard(personal.email, 'email')}
              className="flex items-center justify-between gap-3 px-5 py-3 border border-[#491B37] text-sm font-medium text-[#491B37] hover:bg-[#491B37] hover:text-[#FFF8EE] transition-colors duration-200 group flex-1 cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#D0E4FF] text-[#491B37] flex items-center justify-center group-hover:bg-[#D0E4FF]/20">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{personal.email}</span>
              </div>
              {copiedType === 'email'
                ? <Check className="w-3.5 h-3.5 text-emerald-600 ml-auto" />
                : <Copy className="w-3.5 h-3.5 opacity-50 ml-auto" />}
            </button>
          </div>

          {/* Quick message form — no radius */}
          <div className="w-full max-w-lg bg-white/60 p-6 border border-[#491B37]/15">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#491B37]/80 mb-4">
              Send a direct message
            </h4>
            {isSent ? (
              <div className="p-4 bg-[#D0E4FF] text-[#491B37] text-sm flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you! I'll get back to you promptly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FFF8EE] border border-[#491B37]/20 text-sm focus:outline-none focus:border-[#491B37]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FFF8EE] border border-[#491B37]/20 text-sm focus:outline-none focus:border-[#491B37]"
                  />
                </div>
                <textarea
                  required
                  rows="3"
                  placeholder="Your message or collaboration idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FFF8EE] border border-[#491B37]/20 text-sm focus:outline-none focus:border-[#491B37] resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#491B37] text-[#FFF8EE] text-xs font-semibold uppercase tracking-wider hover:bg-[#61244a] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
