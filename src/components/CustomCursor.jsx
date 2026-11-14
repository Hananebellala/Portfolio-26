import { useEffect } from 'react'

const DARK_SECTION_IDS = new Set(['about', 'beyond'])

// Bold arrow pointer SVGs — larger than the default system cursor
const plumCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M6 2 L6 26 L12.5 19.5 L17 28 L20.5 26.5 L16 18 L24 18 Z' fill='%23491B37' stroke='%23FFF8EE' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E") 4 2, auto`
const creamCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M6 2 L6 26 L12.5 19.5 L17 28 L20.5 26.5 L16 18 L24 18 Z' fill='%23FFF8EE' stroke='%23491B37' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E") 4 2, auto`

function isDarkBackground(el) {
  let node = el
  while (node && node !== document.body) {
    if (node.id && DARK_SECTION_IDS.has(node.id)) return true
    if (node.id === 'hero' || node.id === 'skills' || node.id === 'projects' || node.id === 'contact') {
      return false
    }
    node = node.parentElement
  }
  return false
}

export default function CustomCursor() {
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    const applyCursor = (onDark) => {
      document.documentElement.style.cursor = onDark ? creamCursor : plumCursor
    }

    // Default: cream page → plum cursor
    applyCursor(false)

    const onMove = (e) => {
      const target = document.elementFromPoint(e.clientX, e.clientY)
      if (!target) return
      applyCursor(isDarkBackground(target))
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    const onChange = () => {
      if (!mq.matches) {
        document.documentElement.style.cursor = ''
      }
    }
    mq.addEventListener('change', onChange)

    return () => {
      window.removeEventListener('mousemove', onMove)
      mq.removeEventListener('change', onChange)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return null
}
