import { createFileRoute, Link } from "@tanstack/react-router";
import { BookmarkCheck, BookOpen, Clock, Library } from "lucide-react";
import { BookCard } from "@/components/library/BookCard";
import { BookCover } from "@/components/library/BookCover";
import { ProgressBar } from "@/components/library/ProgressBar";
import { StatCard } from "@/components/library/StatCard";
import { continueReading, recentlyAdded, recommended } from "@/data/books";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Libréa Digital Library" },
      {
        name: "description",
        content:
          "Your Libréa reading dashboard: continue reading, track statistics, and discover recommended books for your studies.",
      },
      { property: "og:title", content: "Dashboard — Libréa Digital Library" },
      {
        property: "og:description",
        content: "Continue your learning journey, one page at a time.",
      },
    ],
  }),
  component: DashboardPage,
});

function SectionHeading({
  title,
  action,
}: {
  title: string;
  action?: { label: string; to: string };
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      {action && (
        <Link
          to={action.to}
          className="text-xs uppercase tracking-[0.16em] text-terracotta hover:text-primary"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="space-y-14">
      <section className="overflow-hidden rounded-xl border hairline-gold shelf px-6 py-10 sm:px-10 sm:py-14">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">Thursday, 27 August</p>
        <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
          Good morning, Nadya.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/75">
          Continue your learning journey, one page at a time.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/library"
            className="inline-flex h-11 items-center rounded-md bg-cream px-6 text-sm font-medium text-espresso transition-colors hover:bg-sand"
          >
            Explore the Library
          </Link>
          <Link
            to="/reading-goals"
            className="inline-flex h-11 items-center rounded-md border border-cream/35 px-6 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
          >
            View reading goals
          </Link>
        </div>
      </section>

      <section>
        <SectionHeading title="Continue Reading" action={{ label: "My Library", to: "/my-library" }} />
        <div className="grid gap-4 md:grid-cols-3">
          {continueReading.map(({ book, progress, lastRead }) => (
            <article
              key={book.id}
              className="flex gap-4 rounded-lg border border-border bg-card p-4 shadow-paper transition-all hover:border-gold/60 hover:shadow-lift"
            >
              <Link to="/book/$id" params={{ id: book.id }} className="w-20 shrink-0">
                <BookCover book={book} compact />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <Link to="/book/$id" params={{ id: book.id }}>
                  <h3 className="line-clamp-2 font-display text-base leading-snug text-foreground hover:text-primary">
                    {book.title}
                  </h3>
                </Link>
                <p className="mt-1 text-xs text-muted-foreground">{book.author}</p>
                <p className="mt-0.5 text-[0.7rem] text-muted-foreground/80">
                  Last read {lastRead.toLowerCase()}
                </p>
                <ProgressBar value={progress} label="Progress" className="mt-3" />
                <Link
                  to="/book/$id"
                  params={{ id: book.id }}
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground transition-colors hover:bg-cocoa"
                >
                  Continue Reading
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Reading Statistics" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Library} value="12" label="Books Read" />
          <StatCard icon={BookOpen} value="3" label="Currently Reading" />
          <StatCard icon={BookmarkCheck} value="8" label="Saved Books" />
          <StatCard icon={Clock} value="6h 24m" label="Reading Time" />
        </div>
      </section>

      <section>
        <SectionHeading title="Recommended For You" action={{ label: "Browse all", to: "/library" }} />
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {recommended.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Recently Added" />
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {recentlyAdded.map((book) => (
            <BookCard key={book.id} book={book} footnote={`Added ${book.addedAt}`} />
          ))}
        </div>
      </section>
    </div>
  );
}
