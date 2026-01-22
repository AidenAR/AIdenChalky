import type { BookResponse } from '../../api/types'
import BookCard, { BookCardSkeleton } from './BookCard'

interface SearchResultsShelfProps {
  books: BookResponse[]
  isLoading?: boolean
}

export default function SearchResultsShelf({ books, isLoading = false }: SearchResultsShelfProps) {
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
        <span 
          className="px-5 py-1 rounded-full font-display font-semibold text-sm shadow-sm border border-amber-600/30"
          style={{
            background: 'linear-gradient(180deg, #F5DEB3 0%, #DEB887 100%)',
            color: '#5D4037',
          }}
        >
          Search results
        </span>
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
          
          {/* Dark brown interior */}
          <div 
            className="flex-1 px-6 pt-8 pb-6 min-h-[55vh]"
            style={{
              background: 'linear-gradient(180deg, #5D4037 0%, #4E342E 100%)',
            }}
          >
            {/* Books area - grid with max 4 per row */}
            <div className="w-full">
              {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <BookCardSkeleton key={i} size="lg" />
                  ))}
                </div>
              ) : books.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                  {books.map((book) => (
                    <BookCard key={book.id} book={book} size="lg" />
                  ))}
                </div>
              ) : (
                <p className="text-amber-100/70 font-body text-center py-8">
                  No books found
                </p>
              )}
            </div>
          </div>
          
          {/* Right wooden frame */}
          <div 
            className="w-4"
            style={{
              background: 'linear-gradient(90deg, #8B4513 0%, #CD853F 100%)',
            }}
          />
        </div>
        
        {/* Shelf front edge */}
        <div 
          className="h-5 w-full"
          style={{
            background: 'linear-gradient(180deg, #DEB887 0%, #CD853F 50%, #A0522D 100%)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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
