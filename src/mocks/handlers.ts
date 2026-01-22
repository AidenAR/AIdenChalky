import { http, HttpResponse, delay } from 'msw'
import { mockBooks } from './data/books'
import type { BookResponse } from '../api/types'

// Deterministic delay helper (150-350ms)
const randomDelay = () => delay(150 + Math.floor(Math.random() * 201))

export const handlers = [
  // GET /api/v1/books/search
  http.get('/api/v1/books/search', async ({ request }) => {
    const url = new URL(request.url)
    const title = url.searchParams.get('title') || ''
    const titlePrefix = url.searchParams.getAll('title_prefix')
    const author = url.searchParams.get('author') || ''
    const page = parseInt(url.searchParams.get('page') || '0')
    const rowsPerPage = parseInt(url.searchParams.get('rows_per_page') || '40')
    const sortBy = url.searchParams.get('sort_by') || 'title'
    const sortOrder = url.searchParams.get('sort_order') || 'asc'

    await randomDelay()

    let filtered = mockBooks.filter(book => {
      const matchesTitle = !title || book.title.toLowerCase().includes(title.toLowerCase())
      const matchesAuthor = !author || book.author.toLowerCase().includes(author.toLowerCase())
      const matchesPrefix = titlePrefix.length === 0 ||
        titlePrefix.some(p => book.title.toUpperCase().startsWith(p.toUpperCase()))
      return matchesTitle && matchesAuthor && matchesPrefix
    })

    // Sort
    filtered = [...filtered].sort((a, b) => {
      const aVal = a[sortBy as keyof BookResponse] || ''
      const bVal = b[sortBy as keyof BookResponse] || ''
      return sortOrder === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal))
    })

    const start = page * rowsPerPage
    const paginatedBooks = filtered.slice(start, start + rowsPerPage)

    return HttpResponse.json({
      books: paginatedBooks,
      page,
      rows_per_page: rowsPerPage,
      total_books: filtered.length,
      sort_by: sortBy
    })
  }),

  // GET /api/v1/books/group
  http.get('/api/v1/books/group', async ({ request }) => {
    const url = new URL(request.url)
    const groupBy = url.searchParams.get('group_by') || 'title_first_letter'
    const groupSize = parseInt(url.searchParams.get('group_size') || '50')
    const page = parseInt(url.searchParams.get('page') || '1')
    const groupsPerPage = parseInt(url.searchParams.get('groups_per_page') || '26')

    await randomDelay()

    // Group books by strategy
    const groups: Record<string, BookResponse[]> = {}

    mockBooks.forEach(book => {
      const key = groupBy === 'author'
        ? book.author.split(' ').pop() || 'Unknown'  // Last name
        : book.title.charAt(0).toUpperCase()          // First letter

      if (!groups[key]) groups[key] = []
      if (groups[key].length < groupSize) {  // Cap items per group
        groups[key].push(book)
      }
    })

    // Paginate group keys
    const sortedKeys = Object.keys(groups).sort()
    const startIdx = (page - 1) * groupsPerPage
    const paginatedKeys = sortedKeys.slice(startIdx, startIdx + groupsPerPage)

    const paginatedGroups: Record<string, BookResponse[]> = {}
    paginatedKeys.forEach(key => {
      paginatedGroups[key] = groups[key]
    })

    return HttpResponse.json({
      groups: paginatedGroups,
      page,
      groups_per_page: groupsPerPage
    })
  })
]
