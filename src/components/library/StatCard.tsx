import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  icon: Icon,
  value,
  label,
  className,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-lg border border-border bg-card p-5 shadow-paper transition-colors hover:border-gold/60",
        className,
      )}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
        <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
      </span>
      <p className="mt-4 font-display text-3xl text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
