// API Response Types

export interface BookResponse {
  id: number
  title: string
  author: string
  description: string
  cover_image_url: string
  lexile_level: string
  created_at: string
  updated_at: string
}

export interface SearchResponse {
  books: BookResponse[]
  page: number
  rows_per_page: number
  total_books: number
  sort_by: string
}

export interface GroupResponse {
  groups: Record<string, BookResponse[]>
  page: number
  groups_per_page: number
}

// Search params
export interface SearchParams {
  page?: number
  rows_per_page?: number
  title?: string
  title_prefix?: string[]
  author?: string
  sort_by?: string
  sort_order?: 'asc' | 'desc'
}

// Group params
export interface GroupParams {
  group_by?: 'title_first_letter' | 'author'
  group_size?: number
  page?: number
  groups_per_page?: number
}
