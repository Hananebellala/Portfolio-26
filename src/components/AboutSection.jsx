import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import aboutImg from '../assets/About_Image.png'

export default function AboutSection({ onScrollNext }) {
  const { about, personal } = portfolioData

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#491B37] text-[#FFF8EE] px-6 sm:px-12 md:px-16 lg:px-24 pt-16 pb-16 md:pt-20 md:pb-20 flex flex-col overflow-hidden"
    >
      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center flex-1 my-auto">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <span className="font-monthey text-6xl sm:text-7xl md:text-8xl font-normal text-[#FFF8EE] leading-none">
            {about.greeting}
          </span>
          <h2 className="font-monthey text-5xl sm:text-6xl md:text-7xl font-normal text-[#FFF8EE] mb-8 leading-tight">
            {about.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#FFF8EE]/90 font-light leading-relaxed max-w-2xl mb-10">
            {about.bio}
          </p>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#FFF8EE] text-[#FFF8EE] font-medium text-sm tracking-wide hover:bg-[#FFF8EE] hover:text-[#491B37] transition-colors duration-200 group"
          >
            <span>{about.resumeCta}</span>
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Right — real photo, no radius */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-sm sm:max-w-md overflow-hidden border border-[#FFF8EE]/20">
            <img
              src={aboutImg}
              alt="Hanane Bellala"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Down arrow */}
      <div className="w-full flex justify-center pt-10">
        <button
          onClick={onScrollNext}
          aria-label="Scroll down"
          className="cursor-pointer focus:outline-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6 text-[#FFF8EE]/70" strokeWidth={1.5} />
          </motion.div>
        </button>
      </div>
    </section>
  )
}
