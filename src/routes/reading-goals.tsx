import { createFileRoute } from "@tanstack/react-router";
import { Target } from "lucide-react";
import { EmptyState } from "@/components/library/EmptyState";
import { PageHeader } from "@/components/library/PageHeader";
import { ProgressBar } from "@/components/library/ProgressBar";

export const Route = createFileRoute("/reading-goals")({
  head: () => ({
    meta: [
      { title: "Reading Goals — Libréa" },
      {
        name: "description",
        content: "Set semester reading targets and watch your progress build page by page.",
      },
      { property: "og:title", content: "Reading Goals — Libréa" },
      {
        property: "og:description",
        content: "Set semester reading targets and watch your progress build.",
      },
    ],
  }),
  component: ReadingGoalsPage,
});

function ReadingGoalsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Semester targets"
        title="Reading Goals"
        description="A gentle pace, kept honestly."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6 shadow-paper">
          <p className="font-display text-xl text-foreground">Semester goal</p>
          <p className="mt-1 text-sm text-muted-foreground">12 of 20 books completed</p>
          <ProgressBar value={60} className="mt-5" />
        </div>
        <div className="rounded-lg border border-border bg-card p-6 shadow-paper">
          <p className="font-display text-xl text-foreground">Weekly reading time</p>
          <p className="mt-1 text-sm text-muted-foreground">6h 24m of 10h this week</p>
          <ProgressBar value={64} className="mt-5" />
        </div>
      </div>
      <EmptyState
        icon={Target}
        title="Custom goals arrive soon"
        description="Creating and editing your own goals becomes available once accounts are enabled in a later phase."
      />
    </div>
  );
}
