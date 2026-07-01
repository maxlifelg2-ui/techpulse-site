import Link from "next/link";
import { CATEGORY_LABELS } from "@/lib/types";

const NAV_CATEGORIES: Array<keyof typeof CATEGORY_LABELS> = [
  "televisions",
  "soundbars",
  "vacuum_cleaners",
  "washing_machines",
  "deals",
];

export default function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper-raised">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
              Tech<span className="text-signal">Pulse</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat}`}
                className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-signal transition-colors"
              >
                {CATEGORY_LABELS[cat]}
              </Link>
            ))}
          </nav>

          <Link
            href="/about"
            className="hidden sm:inline-flex items-center rounded-full border border-ink/15 px-4 py-1.5 text-xs font-semibold text-ink-soft hover:border-signal hover:text-signal transition-colors"
          >
            אודות
          </Link>
        </div>
      </div>
    </header>
  );
}
