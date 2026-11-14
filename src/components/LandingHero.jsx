import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

// Real circular assets from src/assets (already containing plum background and icons)
import linkedinIcon from '../assets/Linkedin.png'
import githubIcon   from '../assets/Github.png'
import behanceIcon  from '../assets/Behance.png'
import emailIcon    from '../assets/Email.png'

const iconSrc = {
  linkedin: linkedinIcon,
  github:   githubIcon,
  behance:  behanceIcon,
  mail:     emailIcon,
}

export default function LandingHero({ onScrollNext }) {
  const { scrollY } = useScroll()

  // Scrollytelling: As user scrolls down, the entire landing content translates UP and fades
  const heroY = useTransform(scrollY, [0, 500], [0, -220])
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.96])

  return (
    <motion.section
      id="hero"
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen w-full bg-[#FFF8EE] flex flex-col justify-between items-center px-6 sm:px-10 py-8 md:py-12 select-none overflow-hidden"
    >
      {/* Top bar */}
      <div className="w-full flex justify-between items-center text-xs font-mono tracking-widest text-[#491B37]/60 uppercase pt-2">
        <span>Algeria / ESI</span>
        <span>Portfolio 2026</span>
      </div>

      {/* ── Main Visual: "portfolio" in Monthey + "Hanane Bellala" in Photograph Signature (Medium) — BOTH CENTERED ── */}
      <div className="relative flex items-center justify-center my-auto py-12 w-full max-w-6xl">
        {/* "portfolio" in Monthey font, light ice blue #D0E4FF */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-monthey font-normal text-[#D0E4FF] text-center select-none leading-none"
          style={{
            fontSize: 'clamp(5rem, 18vw, 13.5rem)',
            letterSpacing: '5px',
          }}
        >
          portfolio
        </motion.h1>

        {/* Overlay: "Hanane Bellala" in Photograph Signature, medium size, perfectly centered */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span
            className="font-signature text-[#491B37] text-center whitespace-nowrap select-none"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
              transform: 'rotate(-3deg)',
            }}
          >
            Hanane Bellala
          </span>
        </motion.div>
      </div>

      {/* ── Bottom: Social Icons from assets + exact labels from design ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full flex flex-col items-center gap-6 mt-auto z-10 pb-4"
      >
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 max-w-5xl">
          {portfolioData.socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.id === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={`${item.platform}: ${item.label}`}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Asset circle image (already contains #491B37 plum background & cream icon) */}
              <img
                src={iconSrc[item.icon]}
                alt={item.platform}
                className="w-10 h-10 object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
              />

              {/* Label text in clean font */}
              <span className="font-playfair text-[#491B37] text-sm md:text-base font-medium tracking-wide group-hover:text-[#61244a] transition-colors duration-200">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Scroll indicator prompt */}
        <button
          onClick={onScrollNext}
          aria-label="Scroll down to About section"
          className="flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest text-[#491B37]/70 hover:text-[#491B37] transition-colors duration-200 cursor-pointer pt-2 group"
        >
          <span className="font-mono text-[11px]">Scroll to enter</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-[#491B37]" />
          </motion.div>
        </button>
      </motion.div>
    </motion.section>
  )
}
