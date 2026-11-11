import React, { useState, useEffect } from 'react'

export default function Navbar({ onOpenMenu }) {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4
      setShowNavbar(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      style={{
        opacity: showNavbar ? 1 : 0,
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between">
        {/* Name logo */}
        <div className="pointer-events-auto">
          <a
            href="#hero"
            aria-label="Back to top"
            className="font-signature text-2xl sm:text-3xl text-[#FFF8EE] transition-colors duration-200"
          >
            Hanane Bellala
          </a>
        </div>

        {/* Hamburger — 3 equal lines, no shadow, no radius */}
        <div className="pointer-events-auto ml-auto">
          <button
            onClick={onOpenMenu}
            aria-label="Open fullscreen navigation menu"
            className="group flex flex-col gap-[6px] p-3 cursor-pointer focus:outline-none"
          >
            <span
              className="block w-6 h-[2px] bg-[#FFF8EE] transition-all duration-200"
            />
            <span
              className="block w-6 h-[2px] bg-[#FFF8EE] transition-all duration-200"
            />
            <span
              className="block w-6 h-[2px] bg-[#FFF8EE] transition-all duration-200"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
