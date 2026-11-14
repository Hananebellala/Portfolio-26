import React from 'react'
import StickyNavbar from './components/StickyNavbar'
import LandingHero from './components/LandingHero'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import BeyondWorkSection from './components/BeyondWorkSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[#FFF8EE] text-[#491B37] relative selection:bg-[#D0E4FF] selection:text-[#491B37] overflow-x-hidden">
      <CustomCursor />

      {/* ── Sticky-to-Fullscreen Reveal Navigation ── */}
      <StickyNavbar onNavigate={scrollToSection} />

      {/* ── 1. Landing Hero (Scrollytelling: ascends up and disappears as user scrolls) ── */}
      <LandingHero onScrollNext={() => scrollToSection('about')} />

      {/* ── Main Content Stack ── */}
      <main id="main-content" className="relative z-10">
        {/* 2. About Me Section (Deep Plum #491B37) */}
        <AboutSection onScrollNext={() => scrollToSection('skills')} />

        {/* 3. My Skills Section (Cream #FFF8EE) */}
        <SkillsSection />

        {/* 4. My Projects Section (Cream #FFF8EE) */}
        <ProjectsSection />

        {/* 5. Beyond Work Section (Deep Plum #491B37) */}
        <BeyondWorkSection />

        {/* 6. Thank You / Contact Section (Cream #FFF8EE) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
