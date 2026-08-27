import { createFileRoute } from "@tanstack/react-router";
import { BookGrid } from "@/components/library/BookGrid";
import { PageHeader } from "@/components/library/PageHeader";
import { myLibrary } from "@/data/books";

export const Route = createFileRoute("/my-library")({
  head: () => ({
    meta: [
      { title: "My Library — Libréa" },
      {
        name: "description",
        content: "The titles you've saved to your personal Libréa shelf, ready to pick up again.",
      },
      { property: "og:title", content: "My Library — Libréa" },
      {
        property: "og:description",
        content: "Your personal shelf of saved and in-progress books.",
      },
    ],
  }),
  component: MyLibraryPage,
});

function MyLibraryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Personal shelf"
        title="My Library"
        description="Everything you've saved, gathered on one warm shelf."
      />
      <BookGrid books={myLibrary} />
    </div>
  );
}
