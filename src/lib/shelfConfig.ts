import type { BookResponse } from '../api/types'

// SINGLE SOURCE OF TRUTH for shelf groupings
export const SHELF_CONFIG = [
  { label: 'A-B', letters: ['A', 'B'] },
  { label: 'C-D-E', letters: ['C', 'D', 'E'] },
  { label: 'F-G-H', letters: ['F', 'G', 'H'] },
  { label: 'I-J-K', letters: ['I', 'J', 'K'] },
  { label: 'L-M-N', letters: ['L', 'M', 'N'] },
  { label: 'O-P-Q', letters: ['O', 'P', 'Q'] },
  { label: 'R-S-T', letters: ['R', 'S', 'T'] },
  { label: 'U-V-W', letters: ['U', 'V', 'W'] },
  { label: 'X-Y-Z', letters: ['X', 'Y', 'Z'] },
] as const

export type ShelfLabel = typeof SHELF_CONFIG[number]['label']

// Merge books from multiple letters into one shelf
export const getShelfBooks = (
  letters: readonly string[],
  allGroups: Record<string, BookResponse[]>
): BookResponse[] => {
  return letters.flatMap(letter => allGroups[letter] || [])
}

// Get config by label (for expanded view)
export const getShelfByLabel = (label: string) => {
  return SHELF_CONFIG.find(s => s.label === label)
}

// Get letters from a label
export const getLettersFromLabel = (label: string): string[] => {
  const shelf = getShelfByLabel(label)
  return shelf ? [...shelf.letters] : []
}
