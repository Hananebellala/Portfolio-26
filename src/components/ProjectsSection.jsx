import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

// Real project images from src/assets
import project1 from '../assets/Projects1.png'
import project2 from '../assets/Projects2.png'
import project3 from '../assets/Projects3.png'
import project4 from '../assets/Projects4.png'

const projectImages = [project1, project2, project3, project4]

export default function ProjectsSection() {
  const { projects } = portfolioData
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section
      id="projects"
      className="relative w-full bg-[#FFF8EE] text-[#491B37] overflow-hidden"
    >
      {/* ── Full-width 4-column image strip (no gaps between) ── */}
      <div className="w-full grid grid-cols-4">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setActiveProject(project)}
            className="relative cursor-pointer overflow-hidden group"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={projectImages[idx]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay — no radius */}
            <div className="absolute inset-0 bg-[#491B37]/0 group-hover:bg-[#491B37]/60 transition-all duration-300 flex items-center justify-center">
              <span className="text-[#FFF8EE] text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Section heading + description below the strip ── */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 pt-16 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="font-signature text-4xl sm:text-5xl text-[#491B37] block leading-none mb-[-8px]"
            >
              My
            </span>
            <h2 className="font-monthey text-6xl sm:text-7xl md:text-8xl font-bold text-[#491B37] leading-none">
              projects
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xs"
          >
            <p className="font-playfair text-base sm:text-lg text-[#491B37]/80 leading-relaxed">
              A milestone projects that introduced me to IT &amp; Design
            </p>
          </motion.div>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
