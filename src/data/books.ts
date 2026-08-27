export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  year: number;
  pages: number;
  description: string;
  tags: string[];
  addedAt: string;
  accent: "mahogany" | "terracotta" | "cocoa" | "gold" | "rose";
};

export const categories = [
  "All",
  "Education",
  "Technology",
  "Computer Science",
  "Design",
  "Psychology",
  "Business",
  "Research",
  "Literature",
] as const;

export const books: Book[] = [
  {
    id: "quiet-architecture-of-learning",
    title: "The Quiet Architecture of Learning",
    author: "Amara Wijaya",
    category: "Education",
    rating: 4.8,
    year: 2021,
    pages: 348,
    description:
      "A patient study of how students actually build understanding — not through cramming, but through repetition, rest, and reflection. Drawing on a decade of classroom research, it reframes learning as something constructed slowly, like a building, one deliberate layer at a time.",
    tags: ["Pedagogy", "Cognition", "Study Habits"],
    addedAt: "2026-08-22",
    accent: "mahogany",
  },
  {
    id: "systems-of-small-machines",
    title: "Systems of Small Machines",
    author: "Halvard Reiss",
    category: "Computer Science",
    rating: 4.6,
    year: 2019,
    pages: 512,
    description:
      "An approachable tour of distributed systems told through the metaphor of a workshop full of small, stubborn machines. Covers consensus, failure, and the quiet discipline of designing software that keeps working when parts of it do not.",
    tags: ["Distributed Systems", "Architecture", "Engineering"],
    addedAt: "2026-08-19",
    accent: "cocoa",
  },
  {
    id: "grammar-of-interfaces",
    title: "A Grammar of Interfaces",
    author: "Ines Marchetti",
    category: "Design",
    rating: 4.9,
    year: 2023,
    pages: 276,
    description:
      "Interfaces are read before they are used. This book treats layout, rhythm, and type as a language with its own syntax, and teaches designers to write sentences a user can finish without thinking.",
    tags: ["Typography", "Interaction", "Visual Systems"],
    addedAt: "2026-08-25",
    accent: "terracotta",
  },
  {
    id: "attention-and-its-discontents",
    title: "Attention and Its Discontents",
    author: "Dr. Rania Farouk",
    category: "Psychology",
    rating: 4.5,
    year: 2020,
    pages: 392,
    description:
      "Why focus feels scarce, and what the research really says about restoring it. A measured, humane account of attention as a renewable resource rather than a moral failing.",
    tags: ["Focus", "Neuroscience", "Wellbeing"],
    addedAt: "2026-08-12",
    accent: "rose",
  },
  {
    id: "notes-on-quiet-capital",
    title: "Notes on Quiet Capital",
    author: "Theo Anand",
    category: "Business",
    rating: 4.3,
    year: 2022,
    pages: 304,
    description:
      "A counter-narrative to growth-at-any-cost thinking, written for founders who would rather build something durable than something loud. Case studies of firms that compounded patiently.",
    tags: ["Strategy", "Entrepreneurship", "Ethics"],
    addedAt: "2026-08-08",
    accent: "gold",
  },
  {
    id: "method-margins",
    title: "Method and Margins",
    author: "Lucia Bernal",
    category: "Research",
    rating: 4.7,
    year: 2018,
    pages: 428,
    description:
      "A field guide to research design for students who inherit messy questions. Sampling, validity, and the honest reporting of what did not work — all written with unusual clarity.",
    tags: ["Methodology", "Academic Writing", "Statistics"],
    addedAt: "2026-07-30",
    accent: "cocoa",
  },
  {
    id: "the-lantern-keeper",
    title: "The Lantern Keeper",
    author: "Sofia Delacroix",
    category: "Literature",
    rating: 4.4,
    year: 2017,
    pages: 268,
    description:
      "A novel about a night librarian in a coastal town who catalogues the letters people leave behind. Quiet, lamplit, and concerned with the ordinary weight of memory.",
    tags: ["Fiction", "Contemporary", "Memory"],
    addedAt: "2026-07-26",
    accent: "mahogany",
  },
  {
    id: "machines-that-read",
    title: "Machines That Read",
    author: "Yuki Tanabe",
    category: "Technology",
    rating: 4.6,
    year: 2024,
    pages: 366,
    description:
      "From optical character recognition to language models, an accessible history of teaching computers to interpret text — and a sober look at what comprehension still means.",
    tags: ["AI", "Language", "History of Tech"],
    addedAt: "2026-08-24",
    accent: "terracotta",
  },
  {
    id: "structures-of-good-code",
    title: "Structures of Good Code",
    author: "Priya Raghunathan",
    category: "Computer Science",
    rating: 4.8,
    year: 2022,
    pages: 452,
    description:
      "Readable code as an act of care. Naming, boundaries, and the small refactors that keep a codebase legible to whoever inherits it three years from now.",
    tags: ["Craft", "Refactoring", "Software Design"],
    addedAt: "2026-08-16",
    accent: "cocoa",
  },
  {
    id: "the-seminar-room",
    title: "The Seminar Room",
    author: "Gregor Halász",
    category: "Education",
    rating: 4.2,
    year: 2016,
    pages: 232,
    description:
      "Twelve essays on discussion-based teaching, argued from inside the room. On silence, disagreement, and the art of asking a question that opens rather than closes.",
    tags: ["Teaching", "Dialogue", "Higher Education"],
    addedAt: "2026-07-18",
    accent: "gold",
  },
  {
    id: "colour-in-print",
    title: "Colour in Print",
    author: "Marguerite Lowe",
    category: "Design",
    rating: 4.5,
    year: 2015,
    pages: 198,
    description:
      "An archive of editorial colour from a century of periodicals, with practical notes on ink, paper stock, and the warmth that screens still struggle to reproduce.",
    tags: ["Editorial", "Colour Theory", "Print"],
    addedAt: "2026-07-11",
    accent: "rose",
  },
  {
    id: "the-patient-mind",
    title: "The Patient Mind",
    author: "Dr. Elias Novak",
    category: "Psychology",
    rating: 4.7,
    year: 2023,
    pages: 340,
    description:
      "On the slow cognition of expertise: how mastery accumulates through boredom, plateaus, and unglamorous practice, and why students abandon it too early.",
    tags: ["Expertise", "Motivation", "Habit"],
    addedAt: "2026-08-21",
    accent: "mahogany",
  },
];

export const bookById = (id: string) => books.find((b) => b.id === id);

export const continueReading = [
  { book: books[0]!, progress: 68, lastRead: "Yesterday" },
  { book: books[2]!, progress: 41, lastRead: "2 days ago" },
  { book: books[8]!, progress: 12, lastRead: "Last week" },
];

export const recommended = [books[3]!, books[7]!, books[5]!, books[11]!];

export const recentlyAdded = [...books]
  .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
  .slice(0, 4);

export const myLibrary = [books[0]!, books[2]!, books[8]!, books[4]!, books[6]!];
