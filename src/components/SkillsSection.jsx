import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

// Real framework icons from src/assets
import angularIcon  from '../assets/Angular.png'
import djangoIcon   from '../assets/django.png'
import flutterIcon  from '../assets/flutter.png'

// Inline React logo SVG (no React.png in assets)
function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  )
}

// Real tools icons from src/assets
import odooIcon     from '../assets/Odoo.png'
import postgresIcon from '../assets/postgres.png'
import arcgisIcon   from '../assets/arcgis.png'
import figmaIcon    from '../assets/Figma.png'
import gitIcon      from '../assets/git.png'
import linuxIcon    from '../assets/linux.png'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFF8EE] text-[#491B37] px-6 sm:px-12 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span
              className="font-signature text-4xl sm:text-5xl text-[#491B37] block leading-none mb-[-8px]"
            >
              My
            </span>
            <h2 className="font-monthey text-6xl sm:text-7xl md:text-8xl font-bold text-[#491B37] leading-none">
              skills
            </h2>
          </div>

          <div className="md:text-right">
            <p className="font-playfair italic text-lg sm:text-xl text-[#491B37]/80 leading-snug">
              A creative mind.<br />A technical foundation.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#491B37]/20 mb-8" />

        {/* ── 2×2 Card Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#491B37]/10 border border-[#491B37]/10"
        >
          {/* ── Card 01: Technical Skills (dark plum) ── */}
          <div className="bg-[#491B37] text-[#FFF8EE] p-8 md:p-10">
            <div className="flex items-start justify-between mb-6">
              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-[#FFF8EE]">
                Technical Skills
              </h3>
              <span className="font-mono text-xs text-[#FFF8EE]/50 mt-1">01</span>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm">
              {/* Column 1 */}
              <div>
                <p className="font-bold text-[#FFF8EE] mb-2">Systems &amp; strategy</p>
                <ul className="space-y-1 text-[#FFF8EE]/80 font-light">
                  <li>Information systems architecture</li>
                  <li>Enterprise architecture · BPM</li>
                  <li>ERP systems</li>
                  <li>Quality management</li>
                  <li>LLMs &amp; Automation</li>
                  <li>Technical Support</li>
                </ul>
              </div>
              {/* Column 2 */}
              <div>
                <p className="font-bold text-[#FFF8EE] mb-2">Products &amp; data</p>
                <ul className="space-y-1 text-[#FFF8EE]/80 font-light">
                  <li>Full-stack development</li>
                  <li>UI/UX</li>
                  <li>IoT systems</li>
                  <li>Database modeling</li>
                  <li>Data analysis</li>
                  <li>GIS &amp; spatial analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Card 02: Programming Languages (ice blue) ── */}
          <div className="bg-[#D0E4FF] text-[#491B37] p-8 md:p-10">
            <div className="flex items-start justify-between mb-6">
              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-[#491B37]">
                Programming<br />Languages
              </h3>
              <span className="font-mono text-xs text-[#491B37]/50 mt-1">02</span>
            </div>

            {/* Featured: Python */}
            <div className="mb-5">
              <p className="font-playfair font-bold text-6xl sm:text-7xl text-[#491B37] leading-none">
                Python
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#491B37]/60 mb-2">
                Modeling &amp; Methods
              </p>
              <p className="text-sm text-[#491B37]/90 leading-relaxed">
                UML · MERISE · BPMN<br />
                ArchiMate · TOGAF principles
              </p>
            </div>
          </div>

          {/* ── Card 03: Frameworks (cream / white) ── */}
          <div className="bg-[#FFF8EE] text-[#491B37] p-8 md:p-10 border-t border-[#491B37]/10">
            <div className="flex items-start justify-between mb-6">
              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-[#491B37]">
                Frameworks
              </h3>
              <span className="font-mono text-xs text-[#491B37]/50 mt-1">03</span>
            </div>

            <div className="space-y-4">
              {/* Row 1: Angular + React */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <img src={angularIcon} alt="Angular" className="w-6 h-6 object-contain" />
                  <div>
                    <p className="font-bold text-sm">Angular</p>
                    <p className="text-xs text-[#491B37]/60">Web interfaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ReactLogo />
                  <div>
                    <p className="font-bold text-sm">React</p>
                    <p className="text-xs text-[#491B37]/60">Web interfaces</p>
                  </div>
                </div>
              </div>

              {/* Django */}
              <div className="flex items-center gap-3">
                <img src={djangoIcon} alt="Django" className="w-6 h-6 object-contain" />
                <div>
                  <p className="font-bold text-sm">Django</p>
                  <p className="text-xs text-[#491B37]/60">Back-end &amp; REST APIs</p>
                </div>
              </div>

              {/* Flutter */}
              <div className="flex items-center gap-3">
                <img src={flutterIcon} alt="Flutter" className="w-6 h-6 object-contain" />
                <div>
                  <p className="font-bold text-sm">Flutter</p>
                  <p className="text-xs text-[#491B37]/60">Cross-platform mobile</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 04: Tools & Technologies (cream / white) ── */}
          <div className="bg-[#FFF8EE] text-[#491B37] p-8 md:p-10 border-t border-[#491B37]/10">
            <div className="flex items-start justify-between mb-6">
              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-[#491B37]">
                Tools &amp; Technologies
              </h3>
              <span className="font-mono text-xs text-[#491B37]/50 mt-1">04</span>
            </div>

            {/* 3-col icon grid */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-5 mb-6">
              {[
                { icon: odooIcon,     label: 'Odoo' },
                { icon: postgresIcon, label: 'PostgreSQL' },
                { icon: arcgisIcon,   label: 'ArcGIS' },
                { icon: figmaIcon,    label: 'Figma' },
                { icon: gitIcon,      label: 'Git' },
                { icon: linuxIcon,    label: 'Linux' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <img src={icon} alt={label} className="w-6 h-6 object-contain" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Divider + extra text */}
            <div className="border-t border-[#491B37]/15 pt-4">
              <p className="text-xs text-[#491B37]/70 font-light">
                Network simulation: Cisco Packet Tracer · Mininet
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-px bg-[#D0E4FF] border border-[#491B37]/10 px-8 md:px-10 py-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
        >
          <span className="font-signature text-2xl sm:text-3xl text-[#491B37]">
            Beyond the technical
          </span>
          <p className="text-sm text-[#491B37]/90">
            Agile project leadership &nbsp;+&nbsp; Design team management<br />
            Communication strategy &nbsp;+&nbsp; Community building
          </p>
        </motion.div>

      </div>
    </section>
  )
}
