import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper-raised mt-20">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-display text-lg font-bold text-ink">
              Tech<span className="text-signal">Pulse</span>
            </span>
            <p className="mt-2 text-sm text-ink-soft max-w-sm">
              חדשות, ביקורות והשוואות מוצרי חשמל וטכנולוגיה — בעברית, בלי
              סיבוכים.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-ink-soft">
            <Link href="/about" className="hover:text-signal transition-colors">
              אודות
            </Link>
            <Link href="/contact" className="hover:text-signal transition-colors">
              צור קשר
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-rule text-xs text-ink-faint">
          © {new Date().getFullYear()} TechPulse. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
