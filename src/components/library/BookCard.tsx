import { Link } from "@tanstack/react-router";
import { Bookmark, Star } from "lucide-react";
import type { Book } from "@/data/books";
import { BookCover } from "./BookCover";
import { ProgressBar } from "./ProgressBar";
import { cn } from "@/lib/utils";

export function BookCard({
  book,
  progress,
  footnote,
  className,
}: {
  book: Book;
  progress?: number;
  footnote?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-paper transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lift",
        className,
      )}
    >
      <Link
        to="/book/$id"
        params={{ id: book.id }}
        className="block p-3 pb-0"
        aria-label={`Open ${book.title}`}
      >
        <BookCover book={book} compact />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <div className="flex items-center justify-between gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-terracotta">
          <span className="truncate">{book.category}</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Star className="h-3 w-3 fill-gold text-gold" />
            {book.rating.toFixed(1)}
          </span>
        </div>

        <Link to="/book/$id" params={{ id: book.id }}>
          <h3 className="line-clamp-2 font-display text-base leading-snug text-foreground group-hover:text-primary">
            {book.title}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground">
          {book.author} · {book.year}
        </p>

        {progress !== undefined && <ProgressBar value={progress} label="Progress" />}
        {footnote && <p className="text-xs text-muted-foreground">{footnote}</p>}

        <div className="mt-auto flex items-center gap-2 pt-3">
          <Link
            to="/book/$id"
            params={{ id: book.id }}
            className="inline-flex h-9 flex-1 items-center justify-center rounded-md bg-primary text-xs font-medium tracking-wide text-primary-foreground transition-colors hover:bg-cocoa"
          >
            {progress !== undefined ? "Continue Reading" : "Read"}
          </Link>
          <button
            type="button"
            aria-label={`Save ${book.title}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <Bookmark className="h-4 w-4" strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </article>
  );
}
