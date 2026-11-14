import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin, Calendar } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

import egypt1 from '../assets/Egypt1.png'
import egypt2 from '../assets/Egypt2.png'
import egypt3 from '../assets/Egypt3.png'
import egypt4 from '../assets/Egypt4.png'
import haick1 from '../assets/Haick1.JPG'
import haick2 from '../assets/Haick2.png'
import djazairia1 from '../assets/Djazairia1.png'
import djazairia2 from '../assets/Djazairia2.png'
import djazairia3 from '../assets/Djazairia3.png'
import djazairia4 from '../assets/Djazairia4.png'
import sec1 from '../assets/SEC1.JPG'
import sec2 from '../assets/SEC2.jpg'
import sec3 from '../assets/SEC3.png'
import ignite1 from '../assets/Ignite1.jpg'
import ignite2 from '../assets/Ignite2.JPG'

const photoMap = {
  egypt1, egypt2, egypt3, egypt4,
  haick1, haick2,
  djazairia1, djazairia2, djazairia3, djazairia4,
  sec1, sec2, sec3,
  ignite1, ignite2,
}

function PhotoLayout({ item }) {
  const photos = item.photos

  if (item.layout === 'stack-vertical') {
    return (
      <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="overflow-hidden w-full" style={{ aspectRatio: '16/10' }}>
            <img
              src={photoMap[photo.assetKey]}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    )
  }

  if (item.layout === 'side-by-side') {
    return (
      <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img
              src={photoMap[photo.assetKey]}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    )
  }

  // Default / grid-2x2 (also used when 3 photos — last spans or fills)
  const isThree = photos.length === 3
  return (
    <div className={`lg:col-span-7 grid gap-3 sm:gap-4 ${isThree ? 'grid-cols-2' : 'grid-cols-2'}`}>
      {photos.map((photo, idx) => (
        <div
          key={idx}
          className={`overflow-hidden ${isThree && idx === 2 ? 'col-span-2' : ''}`}
          style={{ aspectRatio: isThree && idx === 2 ? '21/9' : '1/1' }}
        >
          <img
            src={photoMap[photo.assetKey]}
            alt={photo.caption}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default function BeyondWorkSection() {
  const { beyondWork } = portfolioData
  const [activeIndex, setActiveIndex] = useState(0)
  const items = beyondWork.items
  const activeItem = items[activeIndex]

  const goPrev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % items.length)

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
          <h2 className="font-monthey text-6xl sm:text-7xl md:text-8xl font-normal text-[#FFF8EE] leading-none">
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
              <PhotoLayout item={activeItem} />

              {/* Details */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#491B37]/60 block mb-2">
                    {activeItem.tagline}
                  </span>

                  <h3 className="font-monthey text-2xl sm:text-3xl md:text-4xl font-normal text-[#491B37] leading-tight mb-4">
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

                {/* Nav arrows + counter */}
                <div className="flex items-center justify-between pt-4 border-t border-[#491B37]/15">
                  <span className="font-mono text-xs text-[#491B37]/50">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={goPrev}
                      aria-label="Previous"
                      className="w-10 h-10 border border-[#491B37] flex items-center justify-center hover:bg-[#491B37] hover:text-[#FFF8EE] transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={goNext}
                      aria-label="Next"
                      className="w-10 h-10 border border-[#491B37] flex items-center justify-center hover:bg-[#491B37] hover:text-[#FFF8EE] transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
