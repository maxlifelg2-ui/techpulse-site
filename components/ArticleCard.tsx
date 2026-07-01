import Link from "next/link";
import { Article, CATEGORY_LABELS } from "@/lib/types";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block border-b border-rule pb-6 last:border-b-0"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="tag-bracket text-signal">
          {CATEGORY_LABELS[article.category]}
        </span>
        <span className="text-ink-faint text-xs">·</span>
        <span className="text-xs text-ink-faint">
          {formatDate(article.publishedAt)}
        </span>
      </div>
      <h3 className="font-display text-xl font-bold text-ink leading-snug group-hover:text-signal transition-colors">
        {article.headline}
      </h3>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-2">
        {article.dek}
      </p>
      <div className="mt-3 flex items-center gap-3 text-xs text-ink-faint">
        <span>{article.heroLabel}</span>
        <span>·</span>
        <span>{article.readMinutes} דק&apos; קריאה</span>
      </div>
    </Link>
  );
}
