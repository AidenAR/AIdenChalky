# 📚 Chalky Library

A children's book library web application built with React, featuring wooden bookshelves, animated clouds, and a friendly animated mascot character.

![Chalky Library](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1-blue)

<img width="1920" height="1080" alt="Screenshot 2026-01-21 at 8 34 24 PM" src="https://github.com/user-attachments/assets/39ddfce9-eb82-4814-b4df-b21089c411f0" />


<img width="1920" height="1080" alt="Screenshot 2026-01-21 at 8 34 32 PM" src="https://github.com/user-attachments/assets/3975a4c2-706e-4b32-b7b2-b31b8a181bbd" />

<img width="1920" height="1080" alt="Screenshot 2026-01-21 at 8 34 42 PM (2)" src="https://github.com/user-attachments/assets/207df20a-70a7-44d7-aec9-ecf284658839" />

## Features

- **UI** - Sky gradient with yellow sun glow, floating animated clouds, rolling green hills, and a unified wooden bookcase
- **Animated Mascot** - Cute purple "Chalky" character with gentle bouncing and waving arm animations
- **Book Organization** - Books grouped alphabetically on wooden shelves (A-B, C-D-E, F-G-H, etc.)
- **Search Functionality** - Real-time debounced search with dedicated search results shelf
- **Expanded View** - Click "See more Books" to see all books in each category
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Mock API** - Uses MSW (Mock Service Worker) for realistic API simulation with 150-350ms delays

## 🎨 Design Highlights

| Element | Description |
|---------|-------------|
| **Sky** | Bright blue gradient with subtle yellow sun glow in center |
| **Clouds** | White fluffy clouds with floating animation |
| **Hills** | Three-layer rolling green hills with depth |
| **Bookcase** | Unified wooden bookcase with multiple shelves |
| **Shelf Labels** | Light woody brown/yellowish labels (wheat to burlywood gradient) |
| **Books** | 4 books per shelf with shadow placeholders for empty slots |
| **Mascot** | Purple character with glasses, bouncing animation, and waving arm |
| **Sidebar** | Vertical navigation tabs (Dashboard/Library) |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| TypeScript | Type Safety |
| Tailwind CSS 4 | Styling |
| Vite | Build Tool |
| React Router 7 | Navigation |
| TanStack Query | Data Fetching & Caching |
| MSW 2 | API Mocking |
| Lucide React | Icons |

### React Router 7
Handles client-side navigation and URL management:
- Switching between **Dashboard** and **Library** tabs
- URL query parameters for view state:
  - `/library` → grouped shelves view
  - `/library?search=wizard` → search results
  - `/library?group=A-B` → expanded view
- Browser back/forward buttons work naturally
- No page reloads when navigating

### TanStack Query
Handles data fetching, caching, and API state:
- Fetches books from `/api/v1/books/search` and `/api/v1/books/group`
- **Automatic caching** — revisiting a shelf uses cached data
- **Loading states** — `isLoading` for showing skeleton loaders
- **Request cancellation** — typing fast cancels old requests
- **Request deduplication** — prevents duplicate API calls

## 📁 Project Structure

```
src/
├── api/
│   └── types.ts              # API response types
├── components/
│   ├── layout/
│   │   ├── Background.tsx    # Sky gradient, sun glow, clouds, grass hills
│   │   ├── Mascot.tsx        # Animated Chalky character
│   │   └── Sidebar.tsx       # Navigation tabs
│   └── library/
│       ├── BookCard.tsx      # Individual book with hover effects
│       ├── Bookcase.tsx      # Unified wooden bookcase container
│       ├── BookGrid.tsx      # Expanded grid view
│       ├── Bookshelf.tsx     # Single shelf with books
│       ├── SearchBar.tsx     # Search input
│       └── SearchResultsShelf.tsx  # Search results display
├── hooks/
│   ├── useBooks.ts           # TanStack Query hooks
│   └── useDebounce.ts        # Debounce utility
├── lib/
│   └── shelfConfig.ts        # Shelf groupings (A-B, C-D-E, etc.)
├── mocks/
│   ├── browser.ts            # MSW browser setup
│   ├── handlers.ts           # API mock handlers
│   └── data/books.ts         # Mock book data (25+ books)
├── pages/
│   ├── Dashboard.tsx         # Dashboard placeholder
│   └── Library.tsx           # Main library (grouped, expanded, search views)
├── App.tsx                   # Routes
├── main.tsx                  # Entry point + MSW init
└── index.css                 # Global styles + animations
```

## 🎯 Views

| View | URL | Description |
|------|-----|-------------|
| **Library Home** | `/library` | Main bookcase with grouped shelves |
| **Expanded View** | `/library?group=A-B` | Full grid of books for a letter group |
| **Search Results** | `/library?search=wizard` | Books matching search query |

## 📚 Book Data

The app uses mock book data for development:

- **32 children's books** stored in `src/mocks/data/books.ts`
- Each book includes: `id`, `title`, `author`, `description`, `cover_image_url`, `lexile_level`
- **Cover images** sourced from the [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers):
  ```
  https://covers.openlibrary.org/b/id/{COVER_ID}-M.jpg
  ```
- **MSW (Mock Service Worker)** intercepts API calls and serves mock data with realistic 150-350ms delays
- To connect a real backend, simply remove MSW — the same `fetch()` calls will work with a real API

## 🔍 How Search Works

The search functionality filters books by **title** using partial, case-insensitive matching:

| Search Term | Matches |
|-------------|---------|
| "little" | "The **Little** Prince", "**Little** Women" |
| "charlie" | "**Charlie** and the Chocolate Factory" |
| "the" | All books with "the" in the title |

### Search Flow
```
User types → Debounce (300ms) → Update URL → TanStack Query fetches → Results displayed
```

1. **User types** in the search bar
2. **Debounce** waits 300ms after typing stops (prevents excessive API calls)
3. **URL updates** to `/library?search=your-term`
4. **TanStack Query** fetches from `/api/v1/books/search?title=your-term`
5. **Results** display on a dedicated search results shelf

### Supported Search Fields
| Field | Match Type | Example |
|-------|------------|---------|
| **Title** | Partial, case-insensitive | "wizard" finds books with "wizard" in title |
| **Author** | Partial, case-insensitive | "dahl" finds books by "Roald Dahl" |
| **Title Prefix** | Starts with letter(s) | "A" finds books starting with "A" |

## 🎯 API Endpoints (Mocked)

### GET /api/v1/books/search
Search books by title, author, or prefix.

Query params:
- `title` - Search term for title
- `author` - Search term for author
- `title_prefix` - Array of letter prefixes
- `page` - Page number (default: 0)
- `rows_per_page` - Results per page (default: 40)
- `sort_by` - Sort field (default: 'title')
- `sort_order` - 'asc' or 'desc'

### GET /api/v1/books/group
Get books grouped by first letter or author.

Query params:
- `group_by` - 'title_first_letter' or 'author'
- `group_size` - Max books per group
- `page` - Page of groups
- `groups_per_page` - Groups per page

## 🎬 Animations

| Animation | Element | Description |
|-----------|---------|-------------|
| `animate-float` | Clouds | Gentle up/down floating motion |
| `animate-bounce-gentle` | Mascot | Subtle bouncing effect |
| `animate-wave` | Mascot arm | Waving motion |
| `animate-shimmer` | Loading skeletons | Shimmer effect while loading |
| Hover effects | Books | Scale + shadow on hover |

## 📱 Responsive Breakpoints

| Breakpoint | Screen | Book Columns |
|------------|--------|--------------|
| < 640px | Mobile | 1-2 |
| 640-768px | Tablet Portrait | 2-3 |
| 768-1024px | Tablet Landscape | 3 |
| > 1024px | Desktop | 4 |
