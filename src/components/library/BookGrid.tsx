import type { BookResponse } from '../../api/types'
import BookCard, { BookCardSkeleton } from './BookCard'

interface BookGridProps {
  books: BookResponse[]
  isLoading?: boolean
  label?: string
}

export default function BookGrid({ books, isLoading = false, label }: BookGridProps) {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center">
      {/* Shelf top - overhangs the body */}
      <div 
        className="h-10 flex items-center justify-center rounded-t"
        style={{
          width: 'calc(100% + 16px)',
          background: 'linear-gradient(180deg, #DEB887 0%, #CD853F 80%, #A0522D 100%)',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        {label && (
          <span 
            className="px-5 py-1 rounded-full font-display font-bold text-base shadow-sm border border-amber-600/30"
            style={{
              background: 'linear-gradient(180deg, #F5DEB3 0%, #DEB887 100%)',
              color: '#5D4037',
            }}
          >
            {label}
          </span>
        )}
      </div>
      
      {/* Main shelf body */}
      <div 
        className="w-full rounded-b-lg overflow-hidden"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Main area */}
        <div className="flex">
          {/* Left wooden frame */}
          <div 
            className="w-4"
            style={{
              background: 'linear-gradient(90deg, #CD853F 0%, #8B4513 100%)',
            }}
          />
          
          {/* Dark interior */}
          <div 
            className="flex-1 p-6 pt-8 min-h-[60vh]"
            style={{
              background: 'linear-gradient(180deg, #5D4037 0%, #4E342E 100%)',
            }}
          >
            {isLoading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <BookCardSkeleton key={i} showTitle size="lg" />
                ))}
              </div>
            ) : books.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} showTitle size="lg" />
                ))}
              </div>
            ) : (
              <p className="text-amber-100/70 font-body text-center py-8">
                No books found
              </p>
            )}
          </div>
          
          {/* Right wooden frame */}
          <div 
            className="w-4"
            style={{
              background: 'linear-gradient(90deg, #8B4513 0%, #CD853F 100%)',
            }}
          />
        </div>
        
        {/* Shelf bottom edge */}
        <div 
          className="h-5 w-full"
          style={{
            background: 'linear-gradient(180deg, #DEB887 0%, #CD853F 50%, #A0522D 100%)',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
          }}
        />
        
        {/* Wooden frame - bottom */}
        <div 
          className="h-4 w-full"
          style={{
            background: 'linear-gradient(180deg, #8B4513 0%, #5D4037 100%)',
          }}
        />
      </div>
    </div>
  )
}
