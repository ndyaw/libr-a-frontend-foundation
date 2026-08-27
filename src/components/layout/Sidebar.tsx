import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookMarked,
  BookOpen,
  History,
  LayoutDashboard,
  LogOut,
  Settings,
  Target,
  User,
  X,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const mainNav = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Library", to: "/library", icon: BookOpen },
  { label: "My Library", to: "/my-library", icon: BookMarked },
  { label: "Reading History", to: "/reading-history", icon: History },
  { label: "Reading Goals", to: "/reading-goals", icon: Target },
] as const;

const bottomNav = [
  { label: "Profile", to: "/profile", icon: User },
  { label: "Settings", to: "/settings", icon: Settings },
] as const;

function NavLink({
  to,
  label,
  icon: Icon,
  active,
  onNavigate,
}: {
  to: string;
  label: string;
  icon: typeof BookOpen;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={cn(
        "group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-sidebar-primary transition-opacity",
          active ? "opacity-100" : "opacity-0",
        )}
      />
      <Icon className="h-4.5 w-4.5 shrink-0" strokeWidth={1.6} />
      <span className="truncate">{label}</span>
    </Link>
  );
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <nav
      aria-label="Main navigation"
      className="flex h-full flex-col bg-sidebar text-sidebar-foreground"
    >
      <div className="flex items-center justify-between px-5 py-6">
        <Link to="/dashboard" onClick={onNavigate} className="text-sidebar-primary">
          <Logo />
        </Link>
        {onNavigate && (
          <button
            type="button"
            onClick={onNavigate}
            aria-label="Close navigation"
            className="rounded-md p-1.5 text-sidebar-foreground/70 hover:bg-sidebar-accent lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <p className="px-5 pb-2 text-[0.6rem] uppercase tracking-[0.24em] text-sidebar-foreground/45">
        Browse
      </p>
      <div className="flex flex-1 flex-col gap-1 px-3">
        {mainNav.map((item) => (
          <NavLink key={item.to} {...item} active={isActive(item.to)} onNavigate={onNavigate} />
        ))}
      </div>

      <div className="mt-6 space-y-1 border-t border-sidebar-border px-3 py-4">
        {bottomNav.map((item) => (
          <NavLink key={item.to} {...item} active={isActive(item.to)} onNavigate={onNavigate} />
        ))}
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
        >
          <LogOut className="h-4.5 w-4.5" strokeWidth={1.6} />
          Logout
        </button>
      </div>
    </nav>
  );
}
