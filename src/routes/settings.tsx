import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon } from "lucide-react";
import { EmptyState } from "@/components/library/EmptyState";
import { PageHeader } from "@/components/library/PageHeader";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Libréa" },
      {
        name: "description",
        content: "Reading preferences, notifications, and account settings for your Libréa space.",
      },
      { property: "og:title", content: "Settings — Libréa" },
      {
        property: "og:description",
        content: "Reading preferences and account settings for your Libréa space.",
      },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Preferences"
        title="Settings"
        description="Reading comfort, notifications, and account controls."
      />
      <EmptyState
        icon={SettingsIcon}
        title="Nothing to configure just yet"
        description="Settings become available alongside accounts and the reading experience in a later phase."
      />
    </div>
  );
}
