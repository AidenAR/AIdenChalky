import { useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const isLibrary = location.pathname === '/library'
  const isDashboard = location.pathname === '/dashboard'

  return (
    <div className="fixed left-0 top-0 bottom-0 z-50 flex flex-col">
      {/* Dashboard Tab - spans full height section */}
      <button
        onClick={() => navigate('/dashboard')}
        className={`
          w-9 flex-1 
          flex items-center justify-center
          transition-all duration-200
          border-r-2
          ${isDashboard 
            ? 'bg-amber-100 border-amber-300 shadow-lg' 
            : 'bg-amber-200/90 border-amber-300/50 hover:bg-amber-100'
          }
        `}
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="font-display font-bold text-xs tracking-widest rotate-180 uppercase text-gray-900">
          Dashboard
        </span>
      </button>
      
      {/* Library Tab - spans full height section */}
      <button
        onClick={() => navigate('/library')}
        className={`
          w-9 flex-1
          flex items-center justify-center
          transition-all duration-200
          border-r-2
          ${isLibrary 
            ? 'bg-amber-100 border-amber-300 shadow-lg' 
            : 'bg-amber-200/90 border-amber-300/50 hover:bg-amber-100'
          }
        `}
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="font-display font-bold text-xs tracking-widest rotate-180 uppercase text-gray-900">
          Library
        </span>
      </button>
    </div>
  )
}
