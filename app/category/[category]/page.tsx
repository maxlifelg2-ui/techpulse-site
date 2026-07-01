import { notFound } from "next/navigation";
import { getArticlesByCategory } from "@/lib/articles";
import { CATEGORY_LABELS, Category } from "@/lib/types";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = CATEGORY_LABELS[category as Category];

  if (!label) notFound();

  const items = getArticlesByCategory(category);

  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <span className="tag-bracket text-signal text-xs">קטגוריה</span>
      <h1 className="font-display mt-3 text-3xl font-extrabold text-ink">
        {label}
      </h1>
      <p className="mt-2 text-ink-soft">
        {items.length} כתבות בקטגוריית {label}
      </p>

      <div className="mt-10 space-y-6">
        {items.length > 0 ? (
          items.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))
        ) : (
          <p className="text-ink-faint">אין עדיין כתבות בקטגוריה זו.</p>
        )}
      </div>
    </div>
  );
}
