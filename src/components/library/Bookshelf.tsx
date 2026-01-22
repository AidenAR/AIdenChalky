import type { BookResponse } from '../../api/types'
import BookCard, { BookCardSkeleton } from './BookCard'

interface BookshelfProps {
  label: string
  books: BookResponse[]
  isLoading?: boolean
  maxBooks?: number
  onSeeMore?: () => void
  showSeeMore?: boolean
}

export default function Bookshelf({ 
  label, 
  books, 
  isLoading = false,
  maxBooks = 5,
  onSeeMore,
  showSeeMore = true
}: BookshelfProps) {
  const displayedBooks = books.slice(0, maxBooks)

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Label badge */}
      <div className="flex justify-center mb-2">
        <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-amber-900 font-display font-semibold shadow-sm border border-amber-200">
          {label}
        </span>
      </div>
      
      {/* Bookshelf */}
      <div 
        className="relative rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #8B4513 0%, #6D4C41 100%)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Shelf top edge */}
        <div 
          className="h-3 w-full"
          style={{
            background: 'linear-gradient(180deg, #A0522D 0%, #8B4513 100%)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        />
        
        {/* Books area */}
        <div className="flex items-end justify-center gap-3 px-4 py-4 min-h-[140px]">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 4 }).map((_, i) => (
              <BookCardSkeleton key={i} size="md" />
            ))
          ) : displayedBooks.length > 0 ? (
            // Books
            displayedBooks.map((book) => (
              <BookCard key={book.id} book={book} size="md" />
            ))
          ) : (
            // Empty state
            <p className="text-amber-100/70 font-body text-sm py-8">
              No books in this section
            </p>
          )}
          
          {/* See more button */}
          {showSeeMore && !isLoading && books.length > 0 && (
            <button
              onClick={onSeeMore}
              className="
                ml-2 px-3 py-2 
                bg-amber-100/90 hover:bg-amber-50 
                text-amber-900 text-xs font-display font-semibold
                rounded-lg shadow-md
                transition-all duration-200
                hover:scale-105
                whitespace-nowrap
              "
            >
              See more<br/>Books
            </button>
          )}
        </div>
        
        {/* Shelf bottom edge */}
        <div 
          className="h-4 w-full"
          style={{
            background: 'linear-gradient(180deg, #5D4037 0%, #4E342E 100%)',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        />
      </div>
    </div>
  )
}
