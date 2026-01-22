import type { BookResponse } from '../../api/types'

interface BookCardProps {
  book: BookResponse
  showTitle?: boolean
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export default function BookCard({ book, showTitle = false, size = 'md', onClick }: BookCardProps) {
  const sizeClasses = {
    sm: 'w-16 h-24',
    md: 'w-20 h-28',
    lg: 'w-24 h-36',
  }

  return (
    <div 
      className="flex flex-col items-center gap-2 cursor-pointer group"
      onClick={onClick}
    >
      <div
        className={`
          ${sizeClasses[size]}
          rounded-sm overflow-hidden
          shadow-md
          transition-all duration-200 ease-out
          group-hover:scale-105 group-hover:shadow-lg
          bg-gray-300
        `}
      >
        <img
          src={book.cover_image_url}
          alt={book.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback to a colored placeholder with title
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center p-2 text-center" style="background: linear-gradient(135deg, #D84315 0%, #BF360C 100%)">
                  <span class="text-white text-xs font-semibold leading-tight" style="font-family: 'Fredoka', cursive;">${book.title}</span>
                </div>
              `
            }
          }}
        />
      </div>
      
      {showTitle && (
        <p className="text-center text-xs font-body text-amber-100 max-w-[100px] leading-tight line-clamp-2">
          {book.title}
        </p>
      )}
    </div>
  )
}

// Skeleton loader for BookCard
export function BookCardSkeleton({ showTitle = false, size = 'md' }: { showTitle?: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-16 h-24',
    md: 'w-20 h-28',
    lg: 'w-24 h-36',
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`
          ${sizeClasses[size]}
          rounded-sm
          bg-gradient-to-r from-amber-700/50 via-amber-600/50 to-amber-700/50
          bg-[length:200%_100%]
          animate-shimmer
        `}
      />
      {showTitle && (
        <div className="w-16 h-3 rounded bg-gradient-to-r from-amber-700/50 via-amber-600/50 to-amber-700/50 bg-[length:200%_100%] animate-shimmer" />
      )}
    </div>
  )
}
