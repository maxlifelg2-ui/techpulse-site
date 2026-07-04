import Link from "next/link";
import { getAllArticles, getFeaturedArticle } from "@/lib/articles";
import { CATEGORY_LABELS, Category } from "@/lib/types";
import ArticleCard from "@/components/ArticleCard";

const DEALS_STRIP = [
  { brand: "Dreame L20 Ultra", category: "שואבי אבק", note: "מחיר שפל" },
  { brand: "Samsung OLED 55\"", category: "טלוויזיות", note: "מלאי מוגבל" },
  { brand: "LG S95QR", category: "סאונדבארים", note: "השוואה חדשה" },
  { brand: "Bose QC45", category: "אודיו", note: "חם השבוע" },
];

const NAV_CATS = [
  { key: "all", label: "הכל" },
  { key: "televisions", label: "טלוויזיות" },
  { key: "vacuum_cleaners", label: "שואבי אבק" },
  { key: "soundbars", label: "סאונדבארים" },
  { key: "deals", label: "מבצעים" },
  { key: "audio", label: "אודיו" },
  { key: "events", label: "חדש" },
];

const GRADIENTS: Record<string, string> = {
  televisions: "from-blue-950 to-blue-800",
  vacuum_cleaners: "from-emerald-950 to-emerald-800",
  soundbars: "from-purple-950 to-purple-800",
  deals: "from-orange-950 to-orange-800",
  events: "from-zinc-900 to-zinc-700",
  audio: "from-violet-950 to-violet-800",
  general_tech: "from-slate-900 to-slate-700",
  washing_machines: "from-cyan-950 to-cyan-800",
};

function fmt(iso: string) {
  return new Intl.DateTimeFormat("he-IL", { day: "numeric", month: "short" }).format(new Date(iso));
}

export default function HomePage() {
  const featured = getFeaturedArticle();
  const all = getAllArticles();
  const rest = all.filter((a) => a.slug !== featured?.slug);
  const grid = rest.slice(0, 6);
  const compact = rest.slice(6, 16);
  const featuredGrad = GRADIENTS[featured?.category ?? ""] ?? "from-zinc-900 to-zinc-700";
  const featuredLabel = CATEGORY_LABELS[featured?.category as Category] ?? featured?.category ?? "";

  return (
    <div>
      {/* Deals Strip */}
      <div className="bg-ink overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-4 h-10">
            <span className="text-signal text-xs font-bold tracking-widest uppercase flex-shrink-0">🔥 HOT</span>
            <div className="flex items-center gap-5 overflow-hidden flex-1">
              {DEALS_STRIP.map((item, i) => (
                <div key={i} className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-white/40">{item.category}</span>
                  <span className="text-xs font-medium text-white">{item.brand}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-signal/20 text-signal font-medium">{item.note}</span>
                </div>
              ))}
            </div>
            <Link href="/club" className="flex-shrink-0 text-xs text-signal font-semibold hover:opacity-80 transition-opacity">
              Club TechPulse →
            </Link>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-rule bg-paper-raised sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-6xl px-5 flex overflow-x-auto">
          {NAV_CATS.map(({ key, label }) => (
            <Link key={key} href={key === "all" ? "/" : `/category/${key}`}
              className="flex-shrink-0 px-5 py-3 text-sm font-medium text-ink-soft hover:text-ink border-b-2 border-transparent hover:border-signal transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* Hero + Top Right Stories */}
        {featured && (
          <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-6 mb-10 pb-10 border-b border-rule">
            {/* Hero Card — Large */}
            <Link href={`/article/${featured.slug}`} className="group block rounded-2xl overflow-hidden border border-rule hover:border-signal/30 transition-colors bg-paper-raised">
              <div className={`w-full aspect-[16/9] relative overflow-hidden rounded-t-2xl ${!featured.imageUrl ? `bg-gradient-to-br ${featuredGrad}` : ""}`}>
                {featured.imageUrl ? (
                  <img src={featured.imageUrl} alt={featured.headline} className="w-full h-full object-cover" loading="eager" />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-white/15 font-black tracking-widest uppercase text-2xl">{featuredLabel}</span>
                )}
                <span className="absolute top-3 right-3 bg-signal text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                  כתבה ראשית
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-signal font-bold" style={{fontSize:"9px", letterSpacing:"0.08em", textTransform:"uppercase"}}>[{featuredLabel}]</span>
                  <span className="text-ink-faint text-xs">{fmt(featured.publishedAt)}</span>
                </div>
                <h1 className="font-display text-2xl font-extrabold leading-tight text-ink group-hover:text-signal transition-colors mb-3">
                  {featured.headline}
                </h1>
                <p className="text-sm text-ink-soft leading-relaxed mb-4 line-clamp-2">{featured.dek}</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-signal">קרא עכשיו ←</span>
                  <span className="text-xs text-ink-faint">TechPulse · {featured.readMinutes} דק'</span>
                </div>
              </div>
            </Link>

            {/* Right: compact latest */}
            <div className="flex flex-col">
              <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase mb-3 pb-2 border-b-2 border-ink">
                הכי טרי
              </h2>
              <div className="flex-1">
                {rest.slice(0, 5).map((article) => (
                  <Link key={article.slug} href={`/article/${article.slug}`}
                    className="group flex gap-3 py-3 border-b border-rule hover:bg-paper-raised -mx-2 px-2 rounded-lg transition-colors">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${GRADIENTS[article.category] ?? "from-zinc-900 to-zinc-700"} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white/40 font-bold" style={{fontSize:"8px"}}>
                        {(CATEGORY_LABELS[article.category as Category] ?? "TK").slice(0,3).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-signal" style={{fontSize:"9px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase"}}>
                        [{CATEGORY_LABELS[article.category as Category] ?? article.category}]
                      </span>
                      <h3 className="text-sm font-medium text-ink group-hover:text-signal transition-colors line-clamp-2 leading-snug mt-0.5">
                        {article.headline}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Grid + Sidebar */}
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10">

          {/* Article Grid */}
          <div>
            <div className="flex items-center justify-between mb-5 pb-2 border-b-2 border-ink">
              <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase">הכתבות האחרונות</h2>
              <span className="text-xs text-ink-faint">{all.length} כתבות</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {grid.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            {compact.length > 0 && (
              <>
                <div className="mb-4 pb-2 border-b border-rule">
                  <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase">עוד כתבות</h2>
                </div>
                <div>
                  {compact.map((article) => (
                    <ArticleCard key={article.slug} article={article} compact />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Club CTA */}
            <div className="bg-ink text-white rounded-2xl p-5">
              <div className="text-xs text-signal font-bold tracking-widest uppercase mb-2">Club TechPulse</div>
              <h3 className="font-display font-extrabold text-lg leading-tight mb-2">דילים שלא תמצא בשום מקום אחר</h3>
              <p className="text-white/60 text-xs leading-relaxed mb-4">ישירות מהיבואן. בחינם. בלי ספאם.</p>
              <Link href="/club" className="block w-full text-center py-2.5 bg-signal text-white text-sm font-bold rounded-xl hover:bg-signal-deep transition-colors">
                הצטרף עכשיו →
              </Link>
            </div>

            {/* Categories */}
            <div>
              <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase mb-4 pb-2 border-b-2 border-ink">לפי קטגוריה</h2>
              <ul>
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
                  const count = all.filter((a) => a.category === key).length;
                  if (!count) return null;
                  return (
                    <li key={key}>
                      <Link href={`/category/${key}`}
                        className="flex items-center justify-between py-2.5 border-b border-rule text-sm text-ink-soft hover:text-signal transition-colors">
                        <span>{label}</span>
                        <span className="text-xs text-ink-faint bg-paper-raised px-2 py-0.5 rounded-full">{count}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Recent compact */}
            <div>
              <h2 className="font-display text-xs font-bold text-ink-faint tracking-widest uppercase mb-4 pb-2 border-b-2 border-ink">פורסם לאחרונה</h2>
              {rest.slice(0, 4).map((article) => (
                <Link key={article.slug} href={`/article/${article.slug}`}
                  className="group flex gap-3 py-2.5 border-b border-rule hover:text-signal transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex-shrink-0 bg-gradient-to-br ${GRADIENTS[article.category] ?? "from-zinc-900 to-zinc-700"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-ink group-hover:text-signal transition-colors line-clamp-2 leading-snug">{article.headline}</p>
                    <span className="text-xs text-ink-faint">{fmt(article.publishedAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
