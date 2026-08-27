import { cn } from "@/lib/utils";

export function CategoryPill({
  label,
  active = false,
  onClick,
  as = "button",
  className,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  as?: "button" | "span";
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs tracking-wide transition-colors",
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-card text-muted-foreground hover:border-terracotta hover:text-terracotta",
    className,
  );

  if (as === "span") return <span className={classes}>{label}</span>;

  return (
    <button type="button" onClick={onClick} className={classes} aria-pressed={active}>
      {label}
    </button>
  );
}
