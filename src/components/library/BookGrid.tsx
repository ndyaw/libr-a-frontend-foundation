import { Library } from "lucide-react";
import type { Book } from "@/data/books";
import { BookCard } from "./BookCard";
import { EmptyState } from "./EmptyState";
import { cn } from "@/lib/utils";

export function BookGrid({
  books,
  columns = 4,
  className,
}: {
  books: Book[];
  columns?: 3 | 4;
  className?: string;
}) {
  if (books.length === 0) {
    return (
      <EmptyState
        icon={Library}
        title="No books found"
        description="Try a different search term or clear the active category filter."
      />
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3",
        columns === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3",
        className,
      )}
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
