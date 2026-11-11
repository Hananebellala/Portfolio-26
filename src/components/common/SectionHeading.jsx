import React from 'react'

export default function SectionHeading({
  scriptText,
  titleText,
  subtitle,
  variant = 'plum', // 'plum' or 'cream'
  align = 'left', // 'left', 'center', 'right'
  className = '',
}) {
  const isLightText = variant === 'cream'

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={`flex flex-col ${alignmentClasses} ${className}`}>
      {scriptText && (
        <span
          className={`font-signature text-3xl md:text-5xl lg:text-6xl -mb-3 md:-mb-5 select-none transition-all duration-300 ${
            isLightText ? 'text-[#D0E4FF]' : 'text-[#491B37]'
          }`}
          style={{ transform: 'rotate(-2deg)' }}
        >
          {scriptText}
        </span>
      )}

      {titleText && (
        <h2
          className={`font-monthey text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] ${
            isLightText ? 'text-[#FFF8EE]' : 'text-[#491B37]'
          }`}
        >
          {titleText}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-3 text-sm md:text-base font-normal max-w-xl whitespace-pre-line leading-relaxed ${
            isLightText ? 'text-[#FFF8EE]/80' : 'text-[#491B37]/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

