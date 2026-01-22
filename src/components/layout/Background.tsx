import React from 'react'

interface BackgroundProps {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Sky gradient with yellow sun glow */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255, 248, 180, 0.5) 0%, rgba(255, 245, 157, 0.3) 30%, transparent 60%),
            linear-gradient(180deg, #4FC3F7 0%, #29B6F6 25%, #03A9F4 50%, #039BE5 75%, #0288D1 100%)
          `
        }}
      />
      
      {/* Clouds */}
      <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
        <Cloud className="absolute top-[5%] left-[10%] w-32 opacity-95" delay={0} />
        <Cloud className="absolute top-[15%] right-[10%] w-48 opacity-90" delay={2} />
        <Cloud className="absolute top-[8%] left-[40%] w-36 opacity-85" delay={1} />
        <Cloud className="absolute top-[25%] right-[25%] w-40 opacity-80" delay={3} />
        <Cloud className="absolute top-[18%] left-[5%] w-28 opacity-75" delay={1.5} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Grass hills at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-5 pointer-events-none">
        {/* Back hill - darker green */}
        <svg 
          className="absolute bottom-0 w-full" 
          viewBox="0 0 1440 400" 
          preserveAspectRatio="none"
          style={{ height: '45vh' }}
        >
          <defs>
            <linearGradient id="grassBack" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="100%" stopColor="#2E7D32" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,180 
               Q120,120 240,160 
               T480,140 
               T720,180 
               T960,120 
               T1200,160 
               T1440,140 
               L1440,400 Z"
            fill="url(#grassBack)"
          />
        </svg>
        
        {/* Middle hill */}
        <svg 
          className="absolute bottom-0 w-full" 
          viewBox="0 0 1440 400" 
          preserveAspectRatio="none"
          style={{ height: '40vh' }}
        >
          <defs>
            <linearGradient id="grassMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#66BB6A" />
              <stop offset="100%" stopColor="#43A047" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,200 
               Q180,140 360,180 
               T720,160 
               T1080,200 
               T1440,160 
               L1440,400 Z"
            fill="url(#grassMid)"
          />
        </svg>
        
        {/* Front hill - brightest green */}
        <svg 
          className="absolute bottom-0 w-full" 
          viewBox="0 0 1440 400" 
          preserveAspectRatio="none"
          style={{ height: '35vh' }}
        >
          <defs>
            <linearGradient id="grassFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#81C784" />
              <stop offset="100%" stopColor="#66BB6A" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,220 
               Q100,180 200,200 
               T400,180 
               T600,220 
               T800,180 
               T1000,200 
               T1200,180 
               T1440,200 
               L1440,400 Z"
            fill="url(#grassFront)"
          />
        </svg>
      </div>
    </div>
  )
}

interface CloudProps {
  className?: string
  delay?: number
}

function Cloud({ className = '', delay = 0 }: CloudProps) {
  return (
    <div 
      className={`${className} animate-float`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg viewBox="0 0 100 50" fill="white" className="drop-shadow-sm">
        <ellipse cx="25" cy="35" rx="20" ry="15" />
        <ellipse cx="50" cy="30" rx="25" ry="20" />
        <ellipse cx="75" cy="35" rx="20" ry="15" />
        <ellipse cx="40" cy="20" rx="18" ry="15" />
        <ellipse cx="60" cy="20" rx="18" ry="15" />
      </svg>
    </div>
  )
}
