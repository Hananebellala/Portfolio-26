import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

// Real asset icon images from src/assets
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

export default function LandingHero() {
  return (
    /*
      This component is rendered inside a `position: fixed; inset: 0`
      wrapper in App.jsx — it fills the entire viewport behind the
      scrolling content stack.  No scroll transforms needed here.
    */
    <section
      id="hero"
      className="w-full h-full bg-[#FFF8EE] flex flex-col select-none overflow-hidden"
    >
      {/* Top bar */}
      <div className="flex justify-between items-center px-8 sm:px-12 md:px-16 pt-8 text-xs font-mono tracking-widest text-[#491B37]/50 uppercase">
        <span>Algeria / ESI</span>
        <span>Portfolio 2026</span>
      </div>

      {/* ── Centre: "portfolio" + signature overlay ── */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Giant "portfolio" in ice blue — Playfair Display */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair font-bold text-[#D0E4FF] text-center select-none"
          style={{
            fontSize: 'clamp(5rem, 20vw, 14rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          portfolio
        </motion.h1>

        {/* Signature overlay — Photograph Signature */}
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-signature text-[#491B37] absolute pointer-events-none"
          style={{
            fontSize: 'clamp(2.2rem, 6.5vw, 6rem)',
            transform: 'rotate(-3deg)',
            whiteSpace: 'nowrap',
          }}
        >
          Hanane Bellala
        </motion.span>
      </div>

      {/* ── Bottom: social links matching uploaded reference image ── */}
      {/*
        Layout: [●icon]  Label text     spaced across the bottom
        Each item = dark circle (#491B37) with white icon + text beside it
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 px-8 sm:px-14 pb-10 pt-4"
      >
        {portfolioData.socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.id === 'email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={`${item.platform}: ${item.label}`}
            className="flex items-center gap-3 group"
          >
            {/* Dark circle with white icon */}
            <span
              className="flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',          /* circles are allowed to be circles */
                background: '#491B37',
              }}
            >
              <img
                src={iconSrc[item.icon]}
                alt={item.platform}
                style={{
                  width: '20px',
                  height: '20px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </span>

            {/* Label text */}
            <span
              className="text-xs sm:text-sm font-medium text-[#491B37] tracking-wide group-hover:text-[#61244a] transition-colors duration-200"
            >
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>
    </section>
  )
}
