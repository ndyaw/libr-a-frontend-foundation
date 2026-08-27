import { cn } from "@/lib/utils";

export function BookMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
    >
      <path
        d="M16 9.2C13.6 7.1 10.6 6.2 6.5 6.4A1.5 1.5 0 0 0 5 7.9v15.3c0 .9.7 1.5 1.6 1.5 3.7-.2 6.6.6 8.7 2.5.4.4 1 .4 1.4 0 2.1-1.9 5-2.7 8.7-2.5.9 0 1.6-.6 1.6-1.5V7.9a1.5 1.5 0 0 0-1.5-1.5c-4.1-.2-7.1.7-9.5 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 9.4v17.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BookMark />
      {showWordmark && (
        <span className="font-display text-2xl leading-none tracking-tight lowercase">
          libr<span className="italic">é</span>a
        </span>
      )}
    </span>
  );
}
