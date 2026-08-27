import { BookOpen, Bookmark, CalendarDays, FileText, Star } from "lucide-react";
import type { Book } from "@/data/books";
import { BookCover } from "./BookCover";
import { CategoryPill } from "./CategoryPill";

export function BookDetail({ book }: { book: Book }) {
  const meta = [
    { icon: Star, label: `${book.rating.toFixed(1)} rating` },
    { icon: CalendarDays, label: `Published ${book.year}` },
    { icon: FileText, label: `${book.pages} pages` },
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
      <div className="mx-auto w-44 sm:w-56 lg:mx-0 lg:w-full">
        <BookCover book={book} />
      </div>

      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-terracotta">
          {book.category}
        </p>
        <h1 className="mt-2 font-display text-3xl leading-tight text-foreground sm:text-4xl">
          {book.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">by {book.author}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-border py-3 text-sm text-muted-foreground">
          {meta.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-gold" strokeWidth={1.6} />
              {label}
            </span>
          ))}
        </div>

        <h2 className="mt-6 font-display text-lg text-foreground">About this book</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {book.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <CategoryPill key={tag} label={tag} as="span" />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-cocoa"
          >
            <BookOpen className="h-4 w-4" strokeWidth={1.7} />
            Read Online
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <Bookmark className="h-4 w-4" strokeWidth={1.7} />
            Add to My Library
          </button>
        </div>
      </div>
    </div>
  );
}
