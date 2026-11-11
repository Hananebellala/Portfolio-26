import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin, Calendar } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

// Real photos from src/assets
import egypt1 from '../assets/Egypt1.png'
import egypt2 from '../assets/Egypt2.png'
import egypt3 from '../assets/Egypt3.png'
import egypt4 from '../assets/Egypt4.png'
import thankYouImg from '../assets/ThankYou.png'

const egyptPhotos = { egypt1, egypt2, egypt3, egypt4 }

export default function BeyondWorkSection() {
  const { beyondWork } = portfolioData
  const activeItem = beyondWork.items[0]

  return (
    <section
      id="beyond"
      className="relative w-full bg-[#491B37] text-[#FFF8EE] px-6 sm:px-12 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="font-signature text-4xl sm:text-5xl text-[#D0E4FF] block leading-none mb-[-8px]">
            beyond
          </span>
          <h2 className="font-monthey text-6xl sm:text-7xl md:text-8xl font-bold text-[#FFF8EE] leading-none">
            work
          </h2>
          <p className="mt-4 text-sm text-[#FFF8EE]/70 tracking-wide font-light">
            {beyondWork.subtitle}
          </p>
        </div>

        {/* Feature Card — no radius, ice blue bg */}
        <div className="bg-[#D0E4FF] text-[#491B37] p-6 sm:p-10 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* 2×2 Photo Grid — no radius */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
                {activeItem.photos.map((photo, idx) => (
                  <div key={idx} className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <img
                      src={egyptPhotos[photo.assetKey]}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#491B37]/60 block mb-2">
                    Global Impact &amp; Community
                  </span>

                  <h3 className="font-monthey text-2xl sm:text-3xl md:text-4xl font-bold text-[#491B37] leading-tight mb-4">
                    {activeItem.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#491B37]/80 mb-6">
                    <span className="flex items-center gap-1 border border-[#491B37]/20 px-3 py-1">
                      <MapPin className="w-3 h-3" />
                      {activeItem.location}
                    </span>
                    <span className="flex items-center gap-1 border border-[#491B37]/20 px-3 py-1">
                      <Calendar className="w-3 h-3" />
                      {activeItem.period}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#491B37]/90 leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                {/* Nav arrows */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#491B37]/15">
                  <button aria-label="Previous" className="w-10 h-10 border border-[#491B37] flex items-center justify-center hover:bg-[#491B37] hover:text-[#FFF8EE] transition-colors cursor-pointer">
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button aria-label="Next" className="w-10 h-10 border border-[#491B37] flex items-center justify-center hover:bg-[#491B37] hover:text-[#FFF8EE] transition-colors cursor-pointer">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
