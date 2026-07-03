import Link from "next/link";
import { Article, CATEGORY_LABELS } from "@/lib/types";

const CATEGORY_GRADIENTS: Record<string, string> = {
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

const CATEGORY_ICONS: Record<string, string> = {
  televisions: "TV", vacuum_cleaners: "BOT", soundbars: "SND",
  washing_machines: "WSH", deals: "DEAL", events: "NEW",
  audio: "AUD", smart_home: "HOME", general_tech: "TECH",
  refrigerators: "REF", dishwashers: "DSH",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "short",
  }).format(new Date(iso));
}

export default function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  const gradient = CATEGORY_GRADIENTS[article.category] ?? "from-zinc-900 to-zinc-700";
  const icon = CATEGORY_ICONS[article.category] ?? "TK";
  const label = CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS] ?? article.category;

  if (compact) {
    return (
      <Link href={`/article/${article.slug}`} className="group flex items-center gap-3 py-3 border-b border-rule">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white/60 font-bold" style={{fontSize:"8px"}}>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-ink group-hover:text-signal transition-colors line-clamp-2 leading-snug">
            {article.headline}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.slug}`} className="group block border border-rule rounded-xl overflow-hidden hover:border-signal/30 transition-colors bg-paper-raised">
      {/* Thumbnail */}
      <div className={`w-full aspect-[16/9] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2 relative`}>
        <span className="text-white/20 font-bold tracking-widest uppercase" style={{fontSize:"11px"}}>{icon}</span>
        <span className="text-white/40 text-xs font-medium">{label}</span>
        {article.featured && (
          <span className="absolute top-2 right-2 bg-signal text-white text-xs font-bold px-2 py-0.5 rounded-full">
            ראשי
          </span>
        )}
      </div>
      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-signal font-bold" style={{fontSize:"9px", letterSpacing:"0.08em", textTransform:"uppercase"}}>
            [{label}]
          </span>
          <span className="text-ink-faint" style={{fontSize:"10px"}}>{formatDate(article.publishedAt)}</span>
        </div>
        <h3 className="font-display font-bold text-ink leading-snug group-hover:text-signal transition-colors line-clamp-2 mb-2" style={{fontSize:"14px"}}>
          {article.headline}
        </h3>
        <p className="text-ink-faint line-clamp-2 leading-relaxed" style={{fontSize:"12px"}}>
          {article.dek}
        </p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-rule">
          <span className="text-xs text-ink-faint">TechPulse · {article.readMinutes} דק'</span>
          <span className="text-xs font-semibold text-signal group-hover:gap-2 transition-all">קרא ←</span>
        </div>
      </div>
    </Link>
  );
}
