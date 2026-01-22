import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Background from '../components/layout/Background'
import Sidebar from '../components/layout/Sidebar'
import Mascot from '../components/layout/Mascot'
import SearchBar from '../components/library/SearchBar'
import Bookcase from '../components/library/Bookcase'
import BookGrid from '../components/library/BookGrid'
import SearchResultsShelf from '../components/library/SearchResultsShelf'
import { useGroupedBooks, useSearchBooks, useBooksByLetters } from '../hooks/useBooks'
import { SHELF_CONFIG, getShelfBooks, getShelfByLabel } from '../lib/shelfConfig'

type ViewMode = 'grouped' | 'expanded' | 'search'

export default function Library() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  // Get state from URL
  const searchQuery = searchParams.get('search') || ''
  const expandedGroup = searchParams.get('group') || ''
  
  // Local search input state
  const [searchInput, setSearchInput] = useState(searchQuery)
  
  // Determine view mode
  const viewMode: ViewMode = useMemo(() => {
    if (searchQuery) return 'search'
    if (expandedGroup) return 'expanded'
    return 'grouped'
  }, [searchQuery, expandedGroup])
  
  // Fetch data based on view mode
  const { data: groupedData, isLoading: isLoadingGrouped } = useGroupedBooks({
    group_by: 'title_first_letter',
    group_size: 50
  })
  
  const { data: searchData, isLoading: isLoadingSearch } = useSearchBooks(searchQuery)
  
  const expandedShelf = getShelfByLabel(expandedGroup)
  const { data: expandedData, isLoading: isLoadingExpanded } = useBooksByLetters(
    expandedShelf ? [...expandedShelf.letters] : []
  )
  
  // Handle search
  const handleSearchChange = (value: string) => {
    setSearchInput(value)
    
    if (value) {
      setSearchParams({ search: value })
    } else {
      setSearchParams({})
    }
  }
  
  // Handle back button
  const handleBack = () => {
    setSearchInput('')
    setSearchParams({})
  }
  
  // Handle see more click
  const handleSeeMore = (label: string) => {
    setSearchParams({ group: label })
  }

  // Prepare shelves data for bookcase
  const shelvesData = useMemo(() => {
    return SHELF_CONFIG.map((shelf) => ({
      label: shelf.label,
      books: groupedData ? getShelfBooks(shelf.letters, groupedData.groups) : [],
      onSeeMore: () => handleSeeMore(shelf.label)
    }))
  }, [groupedData])

  return (
    <Background>
      <Sidebar />
      
      {/* Content based on view mode */}
      {viewMode === 'grouped' && (
        <div className="min-h-screen p-6 pl-16 flex flex-col items-center">
          {/* Top spacer */}
          <div className="h-7 w-full flex-shrink-0" />
          
          {/* Search bar - left aligned with shelf */}
          <div className="w-full max-w-4xl">
            <SearchBar 
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Visible spacer between search and shelf */}
          <div className="h-8 w-full" />
          
          {/* Bookcase - centered */}
          <Bookcase
            shelves={shelvesData}
            isLoading={isLoadingGrouped}
          />
        </div>
      )}
      
      {viewMode === 'expanded' && expandedShelf && (
        <div className="min-h-screen p-6 pl-16 flex flex-col items-center">
          {/* Top spacer */}
          <div className="h-8 w-full flex-shrink-0" />
          
          {/* Back button */}
          <div className="w-full max-w-5xl">
            <button
              onClick={handleBack}
              className="
                flex items-center gap-1.5 px-5 py-2
                bg-blue-700 hover:bg-blue-800
                rounded shadow-md
                font-display font-semibold text-sm
                transition-all duration-200
              "
            >
              <ArrowLeft className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-300">Back</span>
            </button>
          </div>
          
          {/* Spacer */}
          <div className="h-6 w-full" />
          
          <BookGrid 
            books={expandedData?.books || []}
            isLoading={isLoadingExpanded}
            label={expandedShelf.label}
          />
        </div>
      )}
      
      {viewMode === 'search' && (
        <div className="min-h-screen p-6 pl-16 flex flex-col items-center">
          {/* Top spacer */}
          <div className="h-8 w-full flex-shrink-0" />
          
          {/* Back button */}
          <div className="w-full max-w-5xl">
            <button
              onClick={handleBack}
              className="
                flex items-center gap-1.5 px-5 py-2
                bg-blue-700 hover:bg-blue-800
                rounded shadow-md
                font-display font-semibold text-sm
                transition-all duration-200
              "
            >
              <ArrowLeft className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-300">Back</span>
            </button>
          </div>
          
          {/* Spacer between back and search */}
          <div className="h-6 w-full" />
          
          {/* Search bar - below back button */}
          <div className="w-full max-w-5xl">
            <SearchBar 
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Spacer */}
          <div className="h-6 w-full" />
          
          {/* Search results shelf - centered, takes most of screen */}
          <SearchResultsShelf
            books={searchData?.books || []}
            isLoading={isLoadingSearch}
          />
        </div>
      )}
      
      {/* Mascot - positioned near the shelf */}
      <Mascot 
        className="fixed bottom-8 left-32 z-20" 
        size="md"
      />
    </Background>
  )
}
