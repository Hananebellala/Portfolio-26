import React from 'react'
import { Heart } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const { personal } = portfolioData
  return (
    <footer className="w-full bg-[#FFF8EE] border-t border-[#491B37]/15 py-5 px-6 sm:px-12 md:px-16 lg:px-24 text-xs font-mono text-[#491B37]/70">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-monthey font-normal text-sm text-[#491B37]">{personal.name}</span>
        <div className="flex items-center gap-1.5">
          <span>Designed &amp; Developed with</span>
          <Heart className="w-3.5 h-3.5 text-[#491B37] fill-[#491B37]" />
          <span>· © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
