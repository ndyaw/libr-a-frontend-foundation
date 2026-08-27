import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import { EmptyState } from "@/components/library/EmptyState";
import { PageHeader } from "@/components/library/PageHeader";

export const Route = createFileRoute("/reading-history")({
  head: () => ({
    meta: [
      { title: "Reading History — Libréa" },
      {
        name: "description",
        content: "A timeline of everything you've read on Libréa, coming in a later phase.",
      },
      { property: "og:title", content: "Reading History — Libréa" },
      { property: "og:description", content: "A timeline of everything you've read on Libréa." },
    ],
  }),
  component: ReadingHistoryPage,
});

function ReadingHistoryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Timeline"
        title="Reading History"
        description="Every session, chapter, and finished title will be recorded here."
      />
      <EmptyState
        icon={History}
        title="Your history is still being written"
        description="Reading history tracking arrives in a later phase of Libréa. For now, keep reading — the shelf remembers."
      />
    </div>
  );
}
