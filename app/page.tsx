import Link from "next/link";
import { getAllArticles, getFeaturedArticle } from "@/lib/articles";
import { CATEGORY_LABELS } from "@/lib/types";
import ArticleCard from "@/components/ArticleCard";

export default function HomePage() {
  const featured = getFeaturedArticle();
  const rest = getAllArticles().filter((a) => a.slug !== featured?.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      {/* Hero */}
      {featured && (
        <Link href={`/article/${featured.slug}`} className="group block mb-14">
          <div className="grid md:grid-cols-[1fr_minmax(0,2fr)] gap-8 items-start">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-signal-soft to-paper-raised border border-rule flex items-center justify-center">
                <span className="tag-bracket text-signal text-sm">
                  {CATEGORY_LABELS[featured.category]}
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="tag-bracket text-signal text-xs">כתבה ראשית</span>
              <h1 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-ink group-hover:text-signal-deep transition-colors">
                {featured.headline}
              </h1>
              <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-xl">
                {featured.dek}
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm text-ink-faint">
                <span>{featured.heroLabel}</span>
                <span>·</span>
                <span>{featured.readMinutes} דק&apos; קריאה</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Feed + Sidebar */}
      <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-12">
        <section>
          <h2 className="font-display text-sm font-bold text-ink-faint tracking-wide mb-6 pb-3 border-b-2 border-ink">
            הכתבות האחרונות
          </h2>
          <div className="space-y-6">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <aside>
          <div className="sticky top-6">
            <h2 className="font-display text-sm font-bold text-ink-faint tracking-wide mb-6 pb-3 border-b-2 border-ink">
              לפי קטגוריה
            </h2>
            <ul className="space-y-1">
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <li key={key}>
                  <Link
                    href={`/category/${key}`}
                    className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-ink-soft hover:bg-signal-soft hover:text-signal-deep transition-colors"
                  >
                    <span>{label}</span>
                    <span className="text-ink-faint">←</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
