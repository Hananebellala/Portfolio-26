import React, { useState } from 'react'
import { Image as ImageIcon, Sparkles } from 'lucide-react'

export default function ImageHolder({
  src,
  alt = 'Portfolio Image',
  holderName = 'image-asset.jpg',
  className = '',
  aspectRatio = '',
  rounded = 'rounded-2xl',
  variant = 'light', // 'light' or 'dark'
  overlay = false,
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const isDark = variant === 'dark'

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${aspectRatio} ${className} ${
        isDark ? 'bg-[#371328]/60 border border-[#FFF8EE]/15' : 'bg-[#FFF8EE]/60 border border-[#491B37]/10'
      } flex items-center justify-center transition-all duration-300 group`}
    >
      {src && !hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } group-hover:scale-105`}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#491B37]/80 via-transparent to-transparent pointer-events-none" />
          )}
        </>
      ) : (
        // Beautiful fallback placeholder holder when image is missing or loading
        <div
          className={`w-full h-full p-4 flex flex-col items-center justify-center text-center select-none ${
            isDark ? 'text-[#FFF8EE]/80' : 'text-[#491B37]/80'
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${
              isDark ? 'bg-[#FFF8EE]/10 text-[#D0E4FF]' : 'bg-[#491B37]/10 text-[#491B37]'
            }`}
          >
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>

          <div className="text-xs uppercase tracking-wider font-semibold opacity-80 mb-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D0E4FF]" />
            Image Placeholder
          </div>

          <code
            className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium max-w-[90%] truncate ${
              isDark ? 'bg-black/30 text-[#D0E4FF] border border-[#FFF8EE]/10' : 'bg-white/80 text-[#491B37] border border-[#491B37]/15'
            }`}
            title={`public/assets/${holderName}`}
          >
            {holderName}
          </code>

          <p className="text-[11px] opacity-60 mt-2 max-w-[85%] leading-tight">
            Drop into <span className="font-mono font-semibold">/public/assets/</span>
          </p>
        </div>
      )}
    </div>
  )
}

