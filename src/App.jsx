import React, { useState } from 'react'
import FullscreenMenu from './components/FullscreenMenu'
import StickyHamburger from './components/StickyHamburger'
import LandingHero from './components/LandingHero'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import BeyondWorkSection from './components/BeyondWorkSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    /*
      SCROLLYTELLING LAYOUT
      ─────────────────────
      The hero is fixed behind the whole page (z-0).
      A spacer div (100vh) holds space so the first scroll
      moves through the hero.
      Then the content stack (z-10) rides on top and physically
      covers the hero as the user scrolls down — classic curtain reveal.
    */
    <div className="bg-[#FFF8EE] text-[#491B37] selection:bg-[#D0E4FF] selection:text-[#491B37]">

      {/* ── Fullscreen Menu Overlay ── */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* ── Always-visible sticky hamburger (Sticky-to-Fullscreen Reveal) ── */}
      <StickyHamburger onOpenMenu={() => setIsMenuOpen(true)} />

      {/* ── Hero: fixed to viewport, behind everything ── */}
      <div
        style={{ position: 'fixed', inset: 0, zIndex: 0 }}
        aria-hidden="false"
      >
        <LandingHero />
      </div>

      {/* ── Spacer: pushes scroll so user "sees" the hero first ── */}
      <div style={{ height: '100vh' }} aria-hidden="true" />

      {/* ── Content stack: slides over the fixed hero as user scrolls ── */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <AboutSection
          onScrollNext={() => scrollToSection('skills')}
        />
        <SkillsSection />
        <ProjectsSection />
        <BeyondWorkSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
