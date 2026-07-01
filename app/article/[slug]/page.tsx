import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { CATEGORY_LABELS } from "@/lib/types";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-10">
      <Link
        href={`/category/${article.category}`}
        className="tag-bracket text-signal text-xs hover:text-signal-deep"
      >
        {CATEGORY_LABELS[article.category]}
      </Link>

      <h1 className="font-display mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-ink">
        {article.headline}
      </h1>

      <p className="mt-4 text-lg text-ink-soft leading-relaxed">
        {article.dek}
      </p>

      <div className="mt-6 flex items-center gap-3 text-sm text-ink-faint pb-6 border-b border-rule">
        <span>{formatDate(article.publishedAt)}</span>
        <span>·</span>
        <span>{article.heroLabel}</span>
        <span>·</span>
        <span>{article.readMinutes} דק&apos; קריאה</span>
      </div>

      <div
        className="prose-techpulse mt-8 text-[1.05rem] leading-[1.85] text-ink"
        dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
      />

      <div className="mt-12 pt-8 border-t border-rule">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-signal hover:text-signal-deep"
        >
          ← חזרה לעמוד הראשי
        </Link>
      </div>
    </article>
  );
}
