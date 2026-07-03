import Link from "next/link";
import { getAllArticles, getFeaturedArticle } from "@/lib/articles";
import { CATEGORY_LABELS, Category } from "@/lib/types";
import ArticleCard from "@/components/ArticleCard";

const DEALS_STRIP = [
  { brand: "Dreame L20 Ultra", category: "שואבי אבק", note: "מחיר שפל" },
  { brand: "Samsung OLED 55\"", category: "טלוויזיות", note: "מלאי מוגבל" },
  { brand: "LG Soundbar S95QR", category: "סאונדבארים", note: "השוואה חדשה" },
  { brand: "Bose QC45", category: "אודיו", note: "חם השבוע" },
];

const NAV_CATEGORIES: Array<{ key: string; label: string }> = [
  { key: "all", label: "הכל" },
  { key: "televisions", label: "טלוויזיות" },
  { key: "vacuum_cleaners", label: "שואבי אבק" },
  { key: "soundbars", label: "סאונדבארים" },
  { key: "deals", label: "מבצעים" },
  { key: "audio", label: "אודיו" },
  { key: "events", label: "חדש" },
];

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}

export default function HomePage() {
  const featured = getFeaturedArticle();
  const all = getAllArticles();
  const rest = all.filter((a) => a.slug !== featured?.slug).slice(0, 8);
  const deals = all.filter((a) => a.category === "deals").slice(0, 3);
  const topStories = rest.slice(0, 4);
  const moreStories = rest.slice(4);

  return (
    <div>
      {/* Deals Strip */}
      <div className="bg-ink text-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-0 h-10">
            <span
              className="text-signal text-xs font-bold tracking-widest uppercase pl-4 border-l border-white/20 ml-4 flex-shrink-0"
              style={{ direction: "ltr" }}
            >
              🔥 HOT
            </span>
            <div className="flex items-center gap-6 overflow-hidden">
              {DEALS_STRIP.map((item, i) => (
                <div key={i} className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-white/50">{item.category}</span>
                  <span className="text-xs font-medium text-white">
                    {item.brand}
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-signal/20 text-signal font-medium">
                    {item.note}
                  </span>
                  {i < DEALS_STRIP.length - 1 && (
                    <span className="text-white/20 mr-2">·</span>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/club"
              className="mr-auto flex-shrink-0 text-xs text-signal font-semibold hover:text-signal/80 transition-colors"
            >
              Club TechPulse →
            </Link>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-rule bg-paper-raised sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {NAV_CATEGORIES.map(({ key, label }) => (
              <Link
                key={key}
                href={key === "all" ? "/" : `/category/${key}`}
                className="flex-shrink-0 px-4 py-3 text-sm font-medium text-ink-soft hover:text-ink border-b-2 border-transparent hover:border-signal transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">

        {/* Hero — Featured Story */}
        {featured && (
          <div className="mb-10 pb-10 border-b border-rule">
            <Link
              href={`/article/${featured.slug}`}
              className="group grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 items-center"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag-bracket text-signal text-xs">
                    {CATEGORY_LABELS[featured.category as Category] ?? featured.category}
                  </span>
                  <span className="text-ink-faint text-xs">
                    {formatDate(featured.publishedAt)}
                  </span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight text-ink group-hover:text-signal transition-colors mb-4">
                  {featured.headline}
                </h1>
                <p className="text-base text-ink-soft leading-relaxed mb-5 max-w-lg">
                  {featured.dek}
                </p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-signal group-hover:gap-3 transition-all">
                    קרא עכשיו
                    <span>←</span>
                  </span>
                  <span className="text-xs text-ink-faint">
                    {featured.readMinutes} דק' קריאה
                  </span>
                </div>
              </div>
              <div className="order-first md:order-last">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-signal-soft via-paper-raised to-paper border border-rule flex flex-col items-center justify-center gap-3">
                  <span className="text-4xl">
                    {featured.category === "televisions" ? "📺" :
                     featured.category === "vacuum_cleaners" ? "🤖" :
                     featured.category === "soundbars" ? "🔊" :
                     featured.category === "deals" ? "💰" :
                     featured.category === "audio" ? "🎧" : "⚡"}
                  </span>
                  <span className="tag-bracket text-signal text-xs">
                    {CATEGORY_LABELS[featured.category as Category] ?? featured.category}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Main Grid: Top Stories + Sidebar */}
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-12">

          {/* Left: Article Feed */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-ink">
              <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase">
                הכתבות האחרונות
              </h2>
              <span className="text-xs text-ink-faint">{all.length} כתבות</span>
            </div>

            {/* Top 4 stories — larger cards */}
            <div className="space-y-0 mb-8">
              {topStories.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/article/${article.slug}`}
                  className="group flex gap-4 py-5 border-b border-rule hover:bg-paper-raised -mx-3 px-3 rounded-lg transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-paper-raised border border-rule flex items-center justify-center flex-shrink-0 text-2xl">
                    {article.category === "televisions" ? "📺" :
                     article.category === "vacuum_cleaners" ? "🤖" :
                     article.category === "soundbars" ? "🔊" :
                     article.category === "deals" ? "💰" :
                     article.category === "audio" ? "🎧" :
                     article.category === "washing_machines" ? "🫧" : "⚡"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="tag-bracket text-signal" style={{fontSize:"9px"}}>
                        {CATEGORY_LABELS[article.category as Category] ?? article.category}
                      </span>
                      <span className="text-ink-faint" style={{fontSize:"10px"}}>
                        {formatDate(article.publishedAt)}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-ink leading-snug group-hover:text-signal transition-colors line-clamp-2" style={{fontSize:"15px"}}>
                      {article.headline}
                    </h3>
                    <p className="text-ink-faint mt-1 line-clamp-1" style={{fontSize:"12px"}}>
                      {article.dek}
                    </p>
                  </div>
                  <span className="text-ink-faint self-center flex-shrink-0 text-xs">
                    {article.readMinutes} דק'
                  </span>
                </Link>
              ))}
            </div>

            {/* More stories — compact */}
            {moreStories.length > 0 && (
              <>
                <div className="flex items-center mb-4 pb-2 border-b border-rule">
                  <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase">
                    עוד כתבות
                  </h2>
                </div>
                <div className="space-y-0">
                  {moreStories.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/article/${article.slug}`}
                      className="group flex items-center justify-between py-3 border-b border-rule hover:text-signal transition-colors"
                    >
                      <div className="flex-1 min-w-0 pl-2">
                        <span className="text-xs text-ink-faint">
                          {CATEGORY_LABELS[article.category as Category] ?? article.category} ·{" "}
                        </span>
                        <span className="text-sm font-medium text-ink group-hover:text-signal transition-colors">
                          {article.headline}
                        </span>
                      </div>
                      <span className="text-xs text-ink-faint flex-shrink-0 mr-3">
                        {formatDate(article.publishedAt)}
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-8">

            {/* Club CTA — top of sidebar */}
            <div className="bg-ink text-white rounded-2xl p-5">
              <div className="text-xs text-signal font-bold tracking-widest uppercase mb-2">
                Club TechPulse
              </div>
              <h3 className="font-display font-extrabold text-lg leading-tight mb-2">
                דילים שלא תמצא בשום מקום אחר
              </h3>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                ישירות מהיבואן. בחינם. בלי ספאם.
              </p>
              <Link
                href="/club"
                className="block w-full text-center py-2.5 bg-signal text-white text-sm font-bold rounded-xl hover:bg-signal-deep transition-colors"
              >
                הצטרף עכשיו →
              </Link>
            </div>

            {/* Category Navigation */}
            <div>
              <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase mb-4 pb-2 border-b-2 border-ink">
                לפי קטגוריה
              </h2>
              <ul className="space-y-0">
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
                  const count = all.filter((a) => a.category === key).length;
                  if (!count) return null;
                  return (
                    <li key={key}>
                      <Link
                        href={`/category/${key}`}
                        className="flex items-center justify-between py-2.5 border-b border-rule text-sm text-ink-soft hover:text-signal transition-colors"
                      >
                        <span>{label}</span>
                        <span className="text-xs text-ink-faint">{count}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Latest Deals */}
            {deals.length > 0 && (
              <div>
                <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase mb-4 pb-2 border-b-2 border-ink">
                  מבצעים אחרונים
                </h2>
                <div className="space-y-3">
                  {deals.map((deal) => (
                    <Link
                      key={deal.slug}
                      href={`/article/${deal.slug}`}
                      className="group block p-3 rounded-xl border border-rule hover:border-signal-soft hover:bg-signal-soft transition-colors"
                    >
                      <div className="text-xs text-signal font-medium mb-1">
                        💰 מבצע
                      </div>
                      <div className="text-sm font-medium text-ink group-hover:text-signal-deep transition-colors line-clamp-2">
                        {deal.headline}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>
        </div>
      </div>
    </div>
  );
}
