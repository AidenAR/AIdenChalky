import type { BookResponse } from '../../api/types'
import BookCard, { BookCardSkeleton } from './BookCard'

const BOOKS_PER_SHELF = 4

// Empty book slot placeholder
function EmptyBookSlot() {
  return (
    <div 
      className="w-20 h-28 rounded-sm"
      style={{
        background: 'rgba(0, 0, 0, 0.25)',
        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)',
      }}
    />
  )
}

interface ShelfRowProps {
  label: string
  books: BookResponse[]
  isLoading?: boolean
  onSeeMore?: () => void
}

function ShelfRow({ label, books, isLoading = false, onSeeMore }: ShelfRowProps) {
  const displayedBooks = books.slice(0, BOOKS_PER_SHELF)
  const emptySlots = Math.max(0, BOOKS_PER_SHELF - displayedBooks.length)

  return (
    <div className="w-full flex flex-col items-center">
      {/* Shelf top - overhangs the body */}
      <div 
        className="h-8 flex items-center justify-center rounded-t"
        style={{
          width: 'calc(100% + 16px)',
          background: 'linear-gradient(180deg, #DEB887 0%, #CD853F 80%, #A0522D 100%)',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span 
          className="px-4 py-0.5 rounded-full font-display font-semibold text-sm shadow-sm border border-amber-600/30"
          style={{
            background: 'linear-gradient(180deg, #F5DEB3 0%, #DEB887 100%)',
            color: '#5D4037',
          }}
        >
          {label}
        </span>
      </div>
      
      {/* Shelf interior with books */}
      <div 
        className="w-full flex items-end justify-center gap-4 px-4 py-4 min-h-[140px]"
        style={{
          background: 'linear-gradient(180deg, #5D4037 0%, #4E342E 100%)',
        }}
      >
        {/* Books container */}
        <div className="flex items-end justify-center gap-4 flex-1">
          {isLoading ? (
            Array.from({ length: BOOKS_PER_SHELF }).map((_, i) => (
              <BookCardSkeleton key={i} size="md" />
            ))
          ) : (
            <>
              {displayedBooks.map((book) => (
                <BookCard key={book.id} book={book} size="md" />
              ))}
              {emptySlots > 0 && Array.from({ length: emptySlots }).map((_, i) => (
                <EmptyBookSlot key={`empty-${i}`} />
              ))}
            </>
          )}
        </div>
        
        {/* See more button */}
        {!isLoading && books.length > BOOKS_PER_SHELF && (
          <button
            onClick={onSeeMore}
            className="
              px-3 py-2.5
              bg-blue-700 hover:bg-blue-800
              text-white text-xs font-display font-semibold
              rounded-md shadow-lg
              transition-all duration-200
              hover:scale-105
              whitespace-nowrap
              self-center
            "
          >
            See more<br/>Books
          </button>
        )}
      </div>
    </div>
  )
}

interface BookcaseProps {
  shelves: {
    label: string
    books: BookResponse[]
    onSeeMore?: () => void
  }[]
  isLoading?: boolean
}

export default function Bookcase({ shelves, isLoading = false }: BookcaseProps) {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center mt-4">
      {/* Bookcase body */}
      <div 
        className="w-full rounded-lg overflow-visible"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* All shelves */}
        {shelves.map((shelf) => (
          <ShelfRow
            key={shelf.label}
            label={shelf.label}
            books={shelf.books}
            isLoading={isLoading}
            onSeeMore={shelf.onSeeMore}
          />
        ))}
        
        {/* Bookcase bottom frame */}
        <div 
          className="h-5 w-full"
          style={{
            background: 'linear-gradient(180deg, #CD853F 0%, #A0522D 100%)',
          }}
        />
      </div>
    </div>
  )
}
