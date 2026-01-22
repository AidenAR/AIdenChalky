import type { BookResponse } from '../../api/types'

// Mock book data with realistic children's books
export const mockBooks: BookResponse[] = [
  // A
  {
    id: 1,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    description: "A young girl falls down a rabbit hole into a fantastical world.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479576-M.jpg",
    lexile_level: "860L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    title: "Anne of Green Gables",
    author: "L.M. Montgomery",
    description: "An orphan girl finds a home on Prince Edward Island.",
    cover_image_url: "https://covers.openlibrary.org/b/id/12648655-M.jpg",
    lexile_level: "990L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 3,
    title: "Andersen's Fairy Tales",
    author: "Hans Christian Andersen",
    description: "Classic fairy tales including The Little Mermaid and The Ugly Duckling.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8231991-M.jpg",
    lexile_level: "780L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // B
  {
    id: 4,
    title: "Black Beauty",
    author: "Anna Sewell",
    description: "The autobiography of a horse in 19th century England.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8091016-M.jpg",
    lexile_level: "920L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 5,
    title: "By the Shores of Silver Lake",
    author: "Laura Ingalls Wilder",
    description: "The Ingalls family moves to Dakota Territory.",
    cover_image_url: "https://covers.openlibrary.org/b/id/12648244-M.jpg",
    lexile_level: "750L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // C
  {
    id: 6,
    title: "Charlotte's Web",
    author: "E.B. White",
    description: "A pig named Wilbur befriends a spider named Charlotte.",
    cover_image_url: "https://covers.openlibrary.org/b/id/9274156-M.jpg",
    lexile_level: "680L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 7,
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    description: "Charlie wins a golden ticket to visit Willy Wonka's chocolate factory.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8497546-M.jpg",
    lexile_level: "810L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // D
  {
    id: 8,
    title: "Danny the Champion of the World",
    author: "Roald Dahl",
    description: "A boy and his father go on a poaching adventure.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8775562-M.jpg",
    lexile_level: "770L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // E
  {
    id: 9,
    title: "Eloise",
    author: "Kay Thompson",
    description: "A young girl lives at the Plaza Hotel in New York City.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479867-M.jpg",
    lexile_level: "520L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // F
  {
    id: 10,
    title: "Frog and Toad Are Friends",
    author: "Arnold Lobel",
    description: "Stories about the friendship between Frog and Toad.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479870-M.jpg",
    lexile_level: "400L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // G
  {
    id: 11,
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    description: "A bunny says goodnight to everything in the great green room.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479873-M.jpg",
    lexile_level: "360L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // H
  {
    id: 12,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "A boy discovers he's a wizard and attends Hogwarts.",
    cover_image_url: "https://covers.openlibrary.org/b/id/10521270-M.jpg",
    lexile_level: "880L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 13,
    title: "Heidi",
    author: "Johanna Spyri",
    description: "An orphan girl lives with her grandfather in the Swiss Alps.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8231995-M.jpg",
    lexile_level: "730L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // I
  {
    id: 14,
    title: "Island of the Blue Dolphins",
    author: "Scott O'Dell",
    description: "A girl survives alone on an island for years.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479876-M.jpg",
    lexile_level: "1000L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // J
  {
    id: 15,
    title: "James and the Giant Peach",
    author: "Roald Dahl",
    description: "A boy travels across the ocean in a giant peach.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479879-M.jpg",
    lexile_level: "870L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // K
  {
    id: 16,
    title: "Kidnapped",
    author: "Robert Louis Stevenson",
    description: "A young man is kidnapped and has adventures in Scotland.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479882-M.jpg",
    lexile_level: "1040L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // L
  {
    id: 17,
    title: "Little Women",
    author: "Louisa May Alcott",
    description: "Four sisters grow up during the Civil War.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479885-M.jpg",
    lexile_level: "1100L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // M
  {
    id: 18,
    title: "Matilda",
    author: "Roald Dahl",
    description: "A genius girl with telekinetic powers stands up to her mean headmistress.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479888-M.jpg",
    lexile_level: "840L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // N
  {
    id: 19,
    title: "Number the Stars",
    author: "Lois Lowry",
    description: "A Danish girl helps her Jewish friend escape the Nazis.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479891-M.jpg",
    lexile_level: "670L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // O
  {
    id: 20,
    title: "Oliver Twist",
    author: "Charles Dickens",
    description: "An orphan boy escapes a workhouse and falls in with thieves.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479894-M.jpg",
    lexile_level: "1080L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // P
  {
    id: 21,
    title: "Peter Pan",
    author: "J.M. Barrie",
    description: "Children fly to Neverland with a boy who never grows up.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479897-M.jpg",
    lexile_level: "920L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 22,
    title: "Pippi Longstocking",
    author: "Astrid Lindgren",
    description: "A super-strong girl lives alone with a monkey and a horse.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479900-M.jpg",
    lexile_level: "870L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // R
  {
    id: 23,
    title: "Ramona the Pest",
    author: "Beverly Cleary",
    description: "Ramona starts kindergarten and causes trouble.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479903-M.jpg",
    lexile_level: "850L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // S
  {
    id: 24,
    title: "Stuart Little",
    author: "E.B. White",
    description: "A mouse born to a human family has adventures in New York.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479906-M.jpg",
    lexile_level: "920L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 25,
    title: "Spend It!",
    author: "Cinders McLeod",
    description: "A fun introduction to money and spending for kids.",
    cover_image_url: "https://covers.openlibrary.org/b/id/12648300-M.jpg",
    lexile_level: "450L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // T
  {
    id: 26,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    description: "A pilot meets a young prince from another planet.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479909-M.jpg",
    lexile_level: "710L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 27,
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    description: "A girl discovers a hidden garden and transforms lives.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479912-M.jpg",
    lexile_level: "970L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 28,
    title: "The Magician's Elephant",
    author: "Kate DiCamillo",
    description: "A boy searches for his sister with the help of an elephant.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479915-M.jpg",
    lexile_level: "660L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 29,
    title: "The Princess in Black Takes a Vacation",
    author: "Shannon Hale",
    description: "The Princess in Black goes on vacation but trouble follows.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479918-M.jpg",
    lexile_level: "510L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 30,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A lawyer defends a Black man in the segregated South.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479921-M.jpg",
    lexile_level: "870L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  // W
  {
    id: 31,
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    description: "Max sails to where the wild things live.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479924-M.jpg",
    lexile_level: "740L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 32,
    title: "Winnie-the-Pooh",
    author: "A.A. Milne",
    description: "A bear and his friends have adventures in the Hundred Acre Wood.",
    cover_image_url: "https://covers.openlibrary.org/b/id/8479927-M.jpg",
    lexile_level: "790L",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z"
  },
]
