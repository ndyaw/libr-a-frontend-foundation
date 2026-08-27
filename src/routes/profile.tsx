import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { EmptyState } from "@/components/library/EmptyState";
import { PageHeader } from "@/components/library/PageHeader";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Libréa" },
      {
        name: "description",
        content: "Your Libréa reader profile: faculty, reading interests, and shelf activity.",
      },
      { property: "og:title", content: "Profile — Libréa" },
      { property: "og:description", content: "Your Libréa reader profile and shelf activity." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Reader"
        title="Profile"
        description="Nadya Prameswari · Informatics, Year 3"
      />
      <EmptyState
        icon={User}
        title="Profile editing isn't available yet"
        description="Once accounts are enabled, you'll be able to update your details, avatar, and reading interests here."
      />
    </div>
  );
}
