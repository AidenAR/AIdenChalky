import { useQuery } from '@tanstack/react-query'
import type { SearchResponse, GroupResponse, SearchParams, GroupParams } from '../api/types'
import { useDebounce } from './useDebounce'

// Fetch books with search
export function useSearchBooks(searchTerm: string, params?: Omit<SearchParams, 'title'>) {
  const debouncedSearch = useDebounce(searchTerm, 300)

  return useQuery<SearchResponse>({
    queryKey: ['books', 'search', debouncedSearch, params],
    queryFn: async ({ signal }) => {
      const searchParams = new URLSearchParams()
      
      if (debouncedSearch) searchParams.set('title', debouncedSearch)
      if (params?.page !== undefined) searchParams.set('page', String(params.page))
      if (params?.rows_per_page) searchParams.set('rows_per_page', String(params.rows_per_page))
      if (params?.author) searchParams.set('author', params.author)
      if (params?.sort_by) searchParams.set('sort_by', params.sort_by)
      if (params?.sort_order) searchParams.set('sort_order', params.sort_order)
      if (params?.title_prefix) {
        params.title_prefix.forEach(p => searchParams.append('title_prefix', p))
      }

      const res = await fetch(`/api/v1/books/search?${searchParams.toString()}`, { signal })
      if (!res.ok) throw new Error('Failed to fetch books')
      return res.json()
    },
    enabled: debouncedSearch.length > 0,
    staleTime: 30_000,
  })
}

// Fetch books grouped
export function useGroupedBooks(params?: GroupParams) {
  return useQuery<GroupResponse>({
    queryKey: ['books', 'group', params],
    queryFn: async ({ signal }) => {
      const searchParams = new URLSearchParams()
      
      if (params?.group_by) searchParams.set('group_by', params.group_by)
      if (params?.group_size) searchParams.set('group_size', String(params.group_size))
      if (params?.page) searchParams.set('page', String(params.page))
      if (params?.groups_per_page) searchParams.set('groups_per_page', String(params.groups_per_page))

      const res = await fetch(`/api/v1/books/group?${searchParams.toString()}`, { signal })
      if (!res.ok) throw new Error('Failed to fetch grouped books')
      return res.json()
    },
    staleTime: 30_000,
  })
}

// Fetch books by letter prefixes (for expanded view)
export function useBooksByLetters(letters: string[]) {
  return useQuery<SearchResponse>({
    queryKey: ['books', 'letters', letters],
    queryFn: async ({ signal }) => {
      const searchParams = new URLSearchParams()
      letters.forEach(letter => searchParams.append('title_prefix', letter))
      searchParams.set('rows_per_page', '100')

      const res = await fetch(`/api/v1/books/search?${searchParams.toString()}`, { signal })
      if (!res.ok) throw new Error('Failed to fetch books by letters')
      return res.json()
    },
    enabled: letters.length > 0,
    staleTime: 30_000,
  })
}
