import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Water-falling stagger: each letter/item drops with a fluid ease
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 18,
      stiffness: 120,
      mass: 1.2,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

export default function FullscreenMenu({ isOpen, onClose, onNavigate }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => { if (e.key === 'Escape') onClose() }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const menuItems = [
    { label: 'About me',     targetId: 'about' },
    { label: 'My skills',    targetId: 'skills' },
    { label: 'My projects',  targetId: 'projects' },
    { label: 'Beyond work',  targetId: 'beyond' },
  ]

  const handleItemClick = (targetId) => {
    onClose()
    setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="fullscreen-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-50 bg-[#FFF8EE] flex flex-col"
        >
          {/* Close button — top right, no radius */}
          <div className="flex justify-end p-6 sm:p-10">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-[#491B37] cursor-pointer focus:outline-none"
              style={{ fontSize: '2rem', lineHeight: 1, fontWeight: 300 }}
            >
              ✕
            </button>
          </div>

          {/* Nav links — water-falling stagger */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10"
          >
            {menuItems.map((item) => (
              <motion.button
                key={item.targetId}
                variants={itemVariants}
                onClick={() => handleItemClick(item.targetId)}
                className="font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#491B37] cursor-pointer focus:outline-none bg-transparent border-0 p-0 leading-none"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
