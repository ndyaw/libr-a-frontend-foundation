import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Library } from "lucide-react";
import { BookDetail } from "@/components/library/BookDetail";
import { BookCard } from "@/components/library/BookCard";
import { EmptyState } from "@/components/library/EmptyState";
import { bookById, books } from "@/data/books";

export const Route = createFileRoute("/book/$id")({
  loader: ({ params }) => {
    const book = bookById(params.id);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Book not found — Libréa" }, { name: "robots", content: "noindex" }],
      };
    }
    const { book } = loaderData;
    const description = `${book.title} by ${book.author} — ${book.category}, ${book.year}. Read it in the Libréa digital library.`;
    return {
      meta: [
        { title: `${book.title} — Libréa` },
        { name: "description", content: description },
        { property: "og:title", content: `${book.title} — Libréa` },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: BookNotFound,
  component: BookDetailPage,
});

function BookNotFound() {
  return (
    <EmptyState
      icon={Library}
      title="This title isn't on the shelf"
      description="The book you're looking for may have been moved or removed from the collection."
      action={
        <Link
          to="/library"
          className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm text-primary-foreground hover:bg-cocoa"
        >
          Back to the Library
        </Link>
      }
    />
  );
}

function BookDetailPage() {
  const { book } = Route.useLoaderData();
  const related = books
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  return (
    <div className="space-y-14">
      <Link
        to="/library"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-terracotta hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Library
      </Link>

      <BookDetail book={book} />

      {related.length > 0 && (
        <section>
          <h2 className="mb-5 font-display text-2xl text-foreground">More in {book.category}</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {related.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
