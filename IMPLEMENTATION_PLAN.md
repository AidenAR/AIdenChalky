# 📚 Chalky Library - Implementation Plan

> A children's book library web application with a playful, whimsical design featuring wooden bookshelves, animated clouds, and a friendly animated mascot character.

---

## 🎯 Project Overview

### What We Built
A React-based frontend that mirrors the Figma design for Chalky's book library. The app displays books organized alphabetically on a unified wooden bookcase, with search functionality, expanded grid views, and a charming animated mascot.

### Tech Stack Rationale
| Technology | Why |
|------------|-----|
| **React 19** | Specified in requirements, ideal for component-based UI |
| **TypeScript** | Type safety for API responses |
| **Tailwind CSS 4** | Rapid styling with consistency |
| **Vite** | Fast development with HMR |
| **MSW** | Intercepts real fetch() for realistic API mocking |
| **TanStack Query** | Caching, loading states, request deduplication |

---

## 🎨 Final Design Implementation

### Visual Elements

| Element | Implementation |
|---------|---------------|
| **Sky** | Bright blue gradient (`#4FC3F7` → `#0288D1`) with radial yellow sun glow in center |
| **Clouds** | White SVG clouds with `animate-float` animation (6s ease-in-out infinite) |
| **Hills** | Three-layer SVG hills with gradient greens, covering ~35-45vh |
| **Bookcase** | Unified wooden frame (`bg-amber-900`) with dark brown interior (`#3E2723`) |
| **Shelves** | Horizontal wooden planks with overhang tops, lighter brown gradient |
| **Labels** | Wheat-to-burlywood gradient labels on shelf edges (A-B, C-D-E, etc.) |
| **Books** | 4 per shelf, shadow placeholders for empty slots |
| **Mascot** | Purple character with glasses, bouncing + waving animations |
| **Sidebar** | Vertical tabs spanning full height (Dashboard/Library) |

### Color Palette

```css
/* Sky */
--sky-top: #4FC3F7;
--sky-bottom: #0288D1;
--sun-glow: rgba(255, 248, 180, 0.5);

/* Grass Hills */
--grass-front: #81C784 → #66BB6A;
--grass-mid: #66BB6A → #43A047;
--grass-back: #4CAF50 → #2E7D32;

/* Bookcase */
--wood-frame: #78350f (amber-900);
--wood-interior: #3E2723;
--shelf-top: #d97706 → #b45309;
--shelf-edge: #92400e;

/* Labels */
--label-top: #F5DEB3 (wheat);
--label-bottom: #DEB887 (burlywood);
--label-text: #5D4037;

/* Mascot */
--mascot-body: #9B8EC7;
--mascot-highlight: #B8A9D9;
--mascot-feet: #8B7EB8;
```

### Animations

| Animation | Duration | Effect |
|-----------|----------|--------|
| `animate-float` | 6s | Clouds floating up/down |
| `animate-bounce-gentle` | 2s | Mascot body bouncing |
| `animate-wave` | 1s | Mascot arm waving |
| `animate-shimmer` | 1.5s | Loading skeleton shimmer |
| Book hover | 200ms | Scale 1.05 + shadow increase |

---

## 📐 Views & Navigation

### State-Driven Single Page (Not Separate Routes)

| View | URL | Components |
|------|-----|------------|
| **Library Home** | `/library` | `Bookcase` with grouped `Bookshelf` components |
| **Expanded View** | `/library?group=A-B` | `BookGrid` with back button |
| **Search Results** | `/library?search=wizard` | `SearchResultsShelf` with back button + search bar |

**Why Query Params?**
- Search happens *inside* the Library scene (same shelf world)
- Prevents re-mounting background animations
- Cleaner URL structure
- Browser history works naturally

---

## 🗂️ Component Architecture

### Layout Components

#### `Background.tsx`
- Fixed sky gradient with yellow sun glow (radial gradient)
- Animated cloud layer with 5 clouds at different positions
- Three-layer SVG grass hills at bottom
- `z-index` layering: sky (-10) → clouds (-5) → content (10) → hills (5)

#### `Sidebar.tsx`
- Vertical navigation strip on left
- Dashboard (placeholder) and Library tabs
- Tabs span full height
- Library text in black

#### `Mascot.tsx`
- SVG-based purple character
- Rounded rectangle body with highlight
- White eyes with pupils and glasses
- Waving arm with hand
- Feet with highlights
- `animate-bounce-gentle` on container
- `animate-wave` on arm elements

### Library Components

#### `Bookcase.tsx`
- Unified wooden frame container
- Maps over shelves with `Bookshelf` component
- Wooden side rails and bottom
- Shadow effects for depth

#### `Bookshelf.tsx`
- Dark brown interior background
- 4 book slots (shows `EmptyBookSlot` for missing books)
- Wooden shelf top with overhang
- Gradient label on shelf edge
- "See more Books" button (blue, rectangular)

#### `BookCard.tsx`
- Book cover image with aspect ratio 2:3
- Hover effect: scale 1.05 + shadow
- Optional title display
- Loading skeleton variant

#### `SearchResultsShelf.tsx`
- Takes up most of screen width/height
- Back button + search bar at top
- 4-column grid of results
- Wooden shelf styling with label
- Centered on page

#### `BookGrid.tsx`
- Expanded view for "See more"
- 4-column responsive grid
- Back button at top
- Shelf-style top with label

#### `SearchBar.tsx`
- Rounded pill shape
- White background with shadow
- Search icon button
- Placeholder text

---

## 🔌 API Implementation (MSW)

### Handlers

```typescript
// src/mocks/handlers.ts
const randomDelay = () => delay(150 + Math.floor(Math.random() * 201))

// GET /api/v1/books/search
- Parses: title, author, title_prefix[], page, rows_per_page, sort_by, sort_order
- Filters, sorts, paginates mock data
- Returns: { books, page, rows_per_page, total_books, sort_by }

// GET /api/v1/books/group  
- Parses: group_by, group_size, page, groups_per_page
- Groups by title_first_letter or author
- Caps items per group
- Paginates group keys
- Returns: { groups: Record<string, Book[]>, page, groups_per_page }
```

### Mock Data
- 25+ books with realistic titles, authors, cover images
- Cover images from Open Library API
- Lexile levels for children's reading

---

## 🎣 Data Fetching (TanStack Query)

### Hooks

```typescript
// useGroupedBooks - fetches grouped books for home view
useQuery({
  queryKey: ['books', 'grouped', params],
  queryFn: ({ signal }) => fetch(..., { signal }),
  staleTime: 60_000
})

// useSearchBooks - fetches search results (debounced)
useQuery({
  queryKey: ['books', 'search', debouncedTerm],
  queryFn: ({ signal }) => fetch(..., { signal }),
  enabled: term.length > 0,
  staleTime: 30_000
})

// useBooksByLetters - fetches books for expanded view
useQuery({
  queryKey: ['books', 'letters', letters],
  queryFn: ({ signal }) => fetch(..., { signal }),
  enabled: letters.length > 0
})
```

### Benefits
- Request cancellation via `signal`
- Cache sharing between views
- Automatic loading/error states
- Request deduplication

---

## 📁 Final Folder Structure

```
src/
├── api/
│   └── types.ts              # BookResponse, SearchResponse, GroupResponse
├── components/
│   ├── layout/
│   │   ├── Background.tsx    # Sky, sun, clouds, hills
│   │   ├── Mascot.tsx        # Animated purple character
│   │   └── Sidebar.tsx       # Vertical nav tabs
│   └── library/
│       ├── BookCard.tsx      # Book cover + hover
│       ├── Bookcase.tsx      # Unified wooden frame
│       ├── BookGrid.tsx      # Expanded 4-col grid
│       ├── Bookshelf.tsx     # Single shelf row
│       ├── SearchBar.tsx     # Search input
│       └── SearchResultsShelf.tsx  # Search results view
├── hooks/
│   ├── useBooks.ts           # TanStack Query hooks
│   └── useDebounce.ts        # 300ms debounce
├── lib/
│   └── shelfConfig.ts        # SHELF_CONFIG array (single source of truth)
├── mocks/
│   ├── browser.ts            # MSW setupWorker
│   ├── handlers.ts           # /search and /group handlers
│   └── data/
│       └── books.ts          # 25+ mock books
├── pages/
│   ├── Dashboard.tsx         # Placeholder
│   └── Library.tsx           # Main page (3 view modes)
├── App.tsx                   # BrowserRouter + Routes
├── main.tsx                  # Entry + MSW init (dev only)
└── index.css                 # Tailwind + custom animations
```

---

## ✅ Requirements Fulfilled

| Requirement | Implementation |
|-------------|----------------|
| React as main framework | ✅ React 19 + TypeScript |
| Responsive design | ✅ Mobile-first, 4 breakpoints |
| Mirror Figma design | ✅ Colors, layout, components matched |
| Only Library implemented | ✅ Dashboard is placeholder |
| Tabs work | ✅ React Router navigation |
| Mock backend | ✅ MSW with 150-350ms delays |
| Handle query params | ✅ Full API contract implemented |
| Caching | ✅ TanStack Query shares cache |

---

## 🎨 Key Design Decisions

### 1. Unified Bookcase vs Separate Shelves
**Decision:** Single wooden bookcase frame containing all shelves.
**Reasoning:** Matches Figma more closely, creates cohesive furniture piece feel.

### 2. Labels on Shelf Edge
**Decision:** Gradient labels positioned on the front wooden edge of each shelf.
**Reasoning:** Matches Figma, feels like physical library labels.

### 3. Yellow Sun Glow
**Decision:** Radial gradient in center of sky for sun effect.
**Reasoning:** Adds warmth and depth to background, matches Figma lighting.

### 4. Animated Mascot
**Decision:** Gentle bounce + arm wave animations.
**Reasoning:** Brings character to life, engaging for children, not distracting.

### 5. 4 Books Per Shelf with Shadow Placeholders
**Decision:** Always show 4 slots, use shadows for empty positions.
**Reasoning:** Consistent layout, indicates room for more books.

### 6. Search Results as Overlay Shelf
**Decision:** Full-width shelf taking most of screen for search results.
**Reasoning:** Clear focus on results, matches Figma expanded view feel.

---

## 🚀 Project Complete

The Chalky Library frontend is fully implemented and matches the Figma design. Key features:

- ✅ Unified wooden bookcase with multiple shelves
- ✅ Alphabetically grouped books (A-B, C-D-E, etc.)
- ✅ Search functionality with debounce
- ✅ Expanded view for each letter group
- ✅ Animated mascot character
- ✅ Beautiful sky background with sun, clouds, hills
- ✅ Responsive design for all screen sizes
- ✅ Mock API with realistic delays
- ✅ TanStack Query for data management
