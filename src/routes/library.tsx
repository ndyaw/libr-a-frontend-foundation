import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookGrid } from "@/components/library/BookGrid";
import { CategoryPill } from "@/components/library/CategoryPill";
import { PageHeader } from "@/components/library/PageHeader";
import { SearchBar } from "@/components/library/SearchBar";
import { books, categories } from "@/data/books";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Explore the Library — Libréa" },
      {
        name: "description",
        content:
          "Browse Libréa's collection of academic and general-interest titles by category, rating, and year to support your learning journey.",
      },
      { property: "og:title", content: "Explore the Library — Libréa" },
      {
        property: "og:description",
        content: "Discover books to support your learning journey.",
      },
    ],
  }),
  component: LibraryPage,
});

const sorts = [
  { value: "recent", label: "Recently added" },
  { value: "title", label: "Title (A–Z)" },
  { value: "rating", label: "Highest rated" },
  { value: "year", label: "Newest published" },
] as const;

function LibraryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<string>("recent");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = books.filter((b) => {
      const matchesCategory = category === "All" || b.category === category;
      const matchesQuery =
        q === "" ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "year") return b.year - a.year;
      return b.addedAt.localeCompare(a.addedAt);
    });
  }, [query, category, sort]);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Collection"
        title="Explore the Library"
        description="Discover books to support your learning journey."
      />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <SearchBar value={query} onChange={setQuery} className="lg:max-w-md lg:flex-1" />
        <div className="flex items-center gap-3 lg:ml-auto">
          <label htmlFor="sort" className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-11 rounded-md border border-border bg-card px-3 text-sm text-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-ring/25"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <CategoryPill
            key={c}
            label={c}
            active={category === c}
            onClick={() => setCategory(c)}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Showing {visible.length} of {books.length} titles
      </p>

      <BookGrid books={visible} />
    </div>
  );
}
