import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchBar({ value, onChange, placeholder = 'Write the name of the book' }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full px-6 py-3.5 pr-14
          bg-white
          border-2 border-gray-200
          rounded-full
          shadow-md
          font-body text-gray-700 text-sm
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400
          transition-all duration-200
        "
      />
      <button 
        className="
          absolute right-1.5 top-1/2 -translate-y-1/2
          p-2 rounded
          bg-gray-100 hover:bg-gray-200
          text-gray-500
          transition-colors duration-200
        "
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
      </button>
    </div>
  )
}
