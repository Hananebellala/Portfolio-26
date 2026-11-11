import React, { useState, useEffect } from 'react'

/**
 * StickyHamburger — Sticky-to-Fullscreen Reveal
 *
 * Always sits at top-right of the viewport (position: fixed, z-50).
 * Three equal-width lines. No text, no radius, no shadow.
 * Colour adapts: cream (#FFF8EE) lines on the hero (dark bg),
 * plum (#491B37) lines once the content stack has scrolled over.
 */
export default function StickyHamburger({ onOpenMenu }) {
  const [onContent, setOnContent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Once the user scrolls past the full viewport height we're on content
      setOnContent(window.scrollY > window.innerHeight * 0.85)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const lineColor = onContent ? '#491B37' : '#FFF8EE'

  return (
    <button
      onClick={onOpenMenu}
      aria-label="Open navigation menu"
      style={{
        position: 'fixed',
        top: '1.5rem',
        right: '1.75rem',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '10px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: lineColor,
            transition: 'background 0.3s ease',
          }}
        />
      ))}
    </button>
  )
}

