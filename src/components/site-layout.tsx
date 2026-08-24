import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "How I work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-primary">
              Susan Wakarindi
            </span>
            <span className="hidden text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Executive VA · Operations · Marketing · AI Systems
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
            >
              Book a call
            </Link>
          </nav>

          <button
            className="shrink-0 text-primary lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

        </div>

        {open && (
          <nav className="border-t border-border px-6 py-4 lg:hidden">

            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 bg-primary text-[var(--beige)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-[var(--beige)]">
              Don't just work harder. Build better systems.
            </p>
            <p className="mt-3 max-w-md text-sm text-[var(--beige)]/75">
              Executive support, operations, marketing coordination and AI-powered systems
              for founders and growing businesses — remote, worldwide (EAT / UTC+3).
            </p>
            <p className="accent-serif mt-4 text-[var(--gold)]">
              Work Smarter. Operate Better. Grow Further.
            </p>
          </div>
          <div className="text-sm text-[var(--beige)]/75">
            <a
              href="mailto:hello@susanwakarindi.com"
              className="block font-medium text-[var(--gold)] transition-opacity hover:opacity-80"
            >
              hello@susanwakarindi.com
            </a>
            <p className="mt-2">© {new Date().getFullYear()} Susan Wakarindi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
