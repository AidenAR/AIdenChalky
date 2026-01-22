interface MascotProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Mascot({ className = '', size = 'md' }: MascotProps) {
  const sizeClasses = {
    sm: 'w-12 h-24',
    md: 'w-16 h-32',
    lg: 'w-24 h-48',
  }

  return (
    <div className={`${sizeClasses[size]} ${className} animate-bounce-gentle`}>
      <svg viewBox="0 0 50 110" className="w-full h-full drop-shadow-lg">
        {/* Body - taller, thinner rounded rectangle */}
        <rect 
          x="8" y="20" 
          width="34" height="65" 
          rx="10" ry="10"
          fill="#9B8EC7"
        />
        
        {/* Body highlight/shading */}
        <rect 
          x="12" y="25" 
          width="26" height="55" 
          rx="8" ry="8"
          fill="#B8A9D9"
          opacity="0.5"
        />
        
        {/* Left eye - white with pupil */}
        <ellipse cx="18" cy="42" rx="6" ry="7" fill="white" />
        <ellipse cx="19" cy="43" rx="3" ry="3.5" fill="#333" />
        <circle cx="20" cy="41" r="1.2" fill="white" />
        
        {/* Right eye - white with pupil */}
        <ellipse cx="32" cy="42" rx="6" ry="7" fill="white" />
        <ellipse cx="33" cy="43" rx="3" ry="3.5" fill="#333" />
        <circle cx="34" cy="41" r="1.2" fill="white" />
        
        {/* Glasses frame */}
        <ellipse cx="18" cy="42" rx="8" ry="9" fill="none" stroke="#555" strokeWidth="1.2" />
        <ellipse cx="32" cy="42" rx="8" ry="9" fill="none" stroke="#555" strokeWidth="1.2" />
        <path d="M 10 42 L 6 40" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 40 42 L 44 40" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Smile */}
        <path
          d="M 18 58 Q 25 64 32 58"
          stroke="#555"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Left arm - down */}
        <ellipse 
          cx="4" cy="50" 
          rx="5" ry="9" 
          fill="#9B8EC7"
        />
        
        {/* Right arm - waving up with animation */}
        <ellipse 
          cx="46" cy="32" 
          rx="5" ry="9" 
          fill="#9B8EC7"
          transform="rotate(-25 46 32)"
          className="animate-wave origin-bottom"
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
        />
        
        {/* Hand on waving arm */}
        <circle 
          cx="48" cy="24" r="3.5" fill="#B8A9D9"
          className="animate-wave"
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
        />
        
        {/* Left foot */}
        <ellipse cx="18" cy="90" rx="9" ry="5" fill="#8B7EB8" />
        
        {/* Right foot */}
        <ellipse cx="32" cy="90" rx="9" ry="5" fill="#8B7EB8" />
        
        {/* Feet highlights */}
        <ellipse cx="18" cy="89" rx="6" ry="3" fill="#9B8EC7" opacity="0.6" />
        <ellipse cx="32" cy="89" rx="6" ry="3" fill="#9B8EC7" opacity="0.6" />
      </svg>
    </div>
  )
}
