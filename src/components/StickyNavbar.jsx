import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyNavbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOverDarkSection, setIsOverDarkSection] = useState(false)
  const [showTrigger, setShowTrigger] = useState(false)

  // Track which section the sticky button is hovering over; hide on landing hero
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero')
      const aboutEl = document.getElementById('about')
      const beyondEl = document.getElementById('beyond')

      // Hide the three-bar trigger while the landing hero is still in view
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom
        setShowTrigger(heroBottom <= 80)
      } else {
        setShowTrigger(true)
      }

      const checkDark = (el) => {
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 60 && rect.bottom >= 40
      }

      const isDark = checkDark(aboutEl) || checkDark(beyondEl)
      setIsOverDarkSection(isDark)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when fullscreen reveal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { label: 'About me', targetId: 'about' },
    { label: 'My skills', targetId: 'skills' },
    { label: 'My projects', targetId: 'projects' },
    { label: 'Beyond work', targetId: 'beyond' },
  ]

  const handleItemClick = (targetId) => {
    setIsOpen(false)
    setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 450)
  }

  // Hamburger line color adapts to the background section
  const lineColor = isOverDarkSection ? '#FFF8EE' : '#491B37'

  return (
    <>
      {/* ── STICKY TRIGGER BUTTON (Pinned to top-right) ── */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open fullscreen navigation"
        className="fixed top-6 right-6 sm:top-8 sm:right-10 z-40 flex flex-col gap-[6px] p-2 bg-transparent border-0 cursor-pointer focus:outline-none transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{
          // Hidden on landing hero; also hidden while the reveal overlay is open
          opacity: isOpen || !showTrigger ? 0 : 1,
          pointerEvents: isOpen || !showTrigger ? 'none' : 'auto',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}
      >
        <span
          className="block w-6 h-[2px] transition-colors duration-300"
          style={{ background: lineColor }}
        />
        <span
          className="block w-6 h-[2px] transition-colors duration-300"
          style={{ background: lineColor }}
        />
        <span
          className="block w-6 h-[2px] transition-colors duration-300"
          style={{ background: lineColor }}
        />
      </button>

      {/* ── STICKY-TO-FULLSCREEN REVEAL OVERLAY ── */}
      {/* Expanding circular reveal emanating from the sticky button position */}
      <div
        className="fixed inset-0 z-50 bg-[#FFF8EE] flex flex-col justify-between p-6 sm:p-12 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          clipPath: isOpen
            ? 'circle(160% at calc(100% - 2.5rem) 2.5rem)'
            : 'circle(0% at calc(100% - 2.5rem) 2.5rem)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* Top bar with Close button '✕' aligned with sticky button location */}
        <div className="flex justify-end w-full max-w-7xl mx-auto">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="text-[#491B37] text-4xl sm:text-5xl font-light cursor-pointer hover:opacity-75 focus:outline-none leading-none p-2 border-0 bg-transparent transition-transform duration-200 active:scale-95"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links — Centered in Photograph Signature matching Image 2 */}
        <div className="flex-1 flex flex-col items-center justify-center my-auto">
          <nav className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10">
            {menuItems.map((item, idx) => (
              <button
                key={item.targetId}
                onClick={() => handleItemClick(item.targetId)}
                className="font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#491B37] hover:text-[#61244a] cursor-pointer focus:outline-none bg-transparent border-0 p-0 leading-none transition-all duration-300 hover:scale-105"
                style={{
                  transitionDelay: isOpen ? `${idx * 60 + 150}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
                  transitionProperty: 'opacity, transform',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Minimal footer note in reveal */}
        <div className="text-center text-xs tracking-widest uppercase font-mono opacity-40 text-[#491B37] pb-2">
          Hanane Bellala • Portfolio Navigation
        </div>
      </div>
    </>
  )
}

