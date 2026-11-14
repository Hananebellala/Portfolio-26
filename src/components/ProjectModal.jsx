import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle, Tag } from 'lucide-react'
import { GithubIcon } from './common/Icons'

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => { if (e.key === 'Escape') onClose() }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#491B37]/70"
          />

          {/* Modal — no radius, no shadow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-[#FFF8EE] overflow-hidden z-10 my-auto flex flex-col max-h-[90vh] border border-[#491B37]/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#491B37]/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#491B37]/60">
                  {project.category}
                </span>
                <h3 className="font-monthey text-2xl sm:text-3xl font-normal text-[#491B37]">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 text-[#491B37] hover:bg-[#491B37]/10 transition-colors cursor-pointer focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Image — no radius */}
              <div className="w-full overflow-hidden border border-[#491B37]/10" style={{ aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>

              <div>
                <h4 className="font-monthey text-lg font-normal text-[#491B37] mb-2">{project.subtitle}</h4>
                <p className="text-sm sm:text-base text-[#491B37]/85 leading-relaxed">{project.description}</p>
              </div>

              {/* Highlights */}
              {project.highlights && (
                <div className="bg-white/60 p-5 border border-[#491B37]/10 space-y-2.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#491B37]">Key Highlights:</h5>
                  <ul className="space-y-2 text-sm text-[#491B37]/90">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#491B37] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#491B37]/80 mb-2.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-semibold bg-[#D0E4FF] text-[#491B37] border border-[#491B37]/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 sm:p-8 border-t border-[#491B37]/10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#491B37]/30 text-xs font-semibold text-[#491B37] hover:bg-[#491B37] hover:text-[#FFF8EE] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#491B37] text-[#FFF8EE] text-xs font-semibold hover:bg-[#61244a] transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
