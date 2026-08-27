import { cn } from "@/lib/utils";
import type { Book } from "@/data/books";

const accentClass: Record<Book["accent"], string> = {
  mahogany: "from-primary to-cocoa",
  cocoa: "from-cocoa to-espresso",
  terracotta: "from-terracotta to-primary",
  gold: "from-gold to-terracotta",
  rose: "from-rose-brown to-terracotta",
};

/**
 * Editorial cloth-bound cover rendered from design tokens.
 */
export function BookCover({
  book,
  className,
  compact = false,
}: {
  book: Book;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden rounded-sm bg-gradient-to-br shadow-book",
        accentClass[book.accent],
        className,
      )}
    >
      <div className="absolute inset-y-0 left-0 w-[7%] bg-espresso/35" />
      <div className="absolute inset-y-0 left-[7%] w-px bg-cream/25" />
      <div
        className={cn(
          "absolute inset-y-3 left-[12%] right-3 flex flex-col justify-between border-y border-cream/25 py-3",
          compact && "inset-y-2 py-2",
        )}
      >
        <p
          className={cn(
            "font-display leading-tight text-cream",
            compact ? "text-[0.7rem]" : "text-sm sm:text-base",
          )}
        >
          {book.title}
        </p>
        <div className="space-y-1">
          <div className="h-px w-8 bg-gold/70" />
          <p
            className={cn(
              "uppercase tracking-[0.18em] text-cream/70",
              compact ? "text-[0.5rem]" : "text-[0.6rem]",
            )}
          >
            {book.author}
          </p>
        </div>
      </div>
    </div>
  );
}
