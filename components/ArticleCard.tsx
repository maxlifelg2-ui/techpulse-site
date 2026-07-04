import Link from "next/link";
import { Article, CATEGORY_LABELS } from "@/lib/types";

const GRADIENTS: Record<string, string> = {
  televisions: "from-blue-950 to-blue-800",
  vacuum_cleaners: "from-emerald-950 to-emerald-800",
  soundbars: "from-purple-950 to-purple-800",
  washing_machines: "from-cyan-950 to-cyan-800",
  refrigerators: "from-sky-950 to-sky-800",
  dishwashers: "from-teal-950 to-teal-800",
  deals: "from-orange-950 to-orange-800",
  events: "from-zinc-900 to-zinc-700",
  audio: "from-violet-950 to-violet-800",
  smart_home: "from-green-950 to-green-800",
  general_tech: "from-slate-900 to-slate-700",
};

function fmt(iso: string) {
  return new Intl.DateTimeFormat("he-IL", { day: "numeric", month: "short" }).format(new Date(iso));
}

export default function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  const label = CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS] ?? article.category;
  const gradient = GRADIENTS[article.category] ?? "from-zinc-900 to-zinc-700";

  if (compact) {
    return (
      <Link href={`/article/${article.slug}`} className="group flex items-center gap-3 py-3 border-b border-rule">
        <div className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${!article.imageUrl ? `bg-gradient-to-br ${gradient}` : ""}`}>
          {article.imageUrl ? (
            <img src={article.imageUrl} alt={article.headline} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <span className="text-white/40 font-bold text-xs">{label.slice(0,4)}</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-signal font-bold uppercase tracking-wide" style={{fontSize:"9px"}}>[{label}]</span>
          <h3 className="text-sm font-medium text-ink group-hover:text-signal transition-colors line-clamp-2 leading-snug mt-0.5">
            {article.headline}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.slug}`} className="group block border border-rule rounded-xl overflow-hidden hover:border-signal/30 transition-colors bg-paper-raised">
      <div className="w-full aspect-[16/9] overflow-hidden">
        {article.imageUrl ? (
          <img src={article.imageUrl} alt={article.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-white/20 font-black tracking-widest uppercase text-sm">{label}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-signal font-bold uppercase tracking-wide" style={{fontSize:"9px"}}>[{label}]</span>
          <span className="text-ink-faint" style={{fontSize:"10px"}}>{fmt(article.publishedAt)}</span>
        </div>
        <h3 className="font-display font-bold text-ink leading-snug group-hover:text-signal transition-colors line-clamp-2 mb-2" style={{fontSize:"14px"}}>
          {article.headline}
        </h3>
        <p className="text-ink-faint line-clamp-2 leading-relaxed" style={{fontSize:"12px"}}>{article.dek}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-rule">
          <span className="text-xs text-ink-faint">TechPulse · {article.readMinutes} דק'</span>
          <span className="text-xs font-semibold text-signal">קרא ←</span>
        </div>
      </div>
    </Link>
  );
}
