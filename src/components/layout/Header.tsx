import { Bell, Menu, Search } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Header({ onOpenNav }: { onOpenNav: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onOpenNav}
        aria-label="Open navigation"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
      >
        <Menu className="h-4 w-4" />
      </button>

      <span className="text-primary lg:hidden">
        <Logo />
      </span>

      <div className="relative ml-auto hidden w-full max-w-sm md:block">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          aria-label="Quick search"
          placeholder="Search the shelves…"
          className="h-10 w-full rounded-md border border-border bg-card pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-ring/25"
        />
      </div>

      <div className="ml-auto flex items-center gap-3 md:ml-4">
        <button
          type="button"
          aria-label="Notifications"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-terracotta hover:text-terracotta"
        >
          <Bell className="h-4 w-4" strokeWidth={1.7} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-terracotta" />
        </button>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground">
            N
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm text-foreground">Nadya Prameswari</span>
            <span className="block text-xs text-muted-foreground">Informatics · Year 3</span>
          </span>
        </div>
      </div>
    </header>
  );
}
