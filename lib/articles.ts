import { Article } from "./types";
import articlesData from "./articles.json";

export function getAllArticles(): Article[] {
  return [...(articlesData as Article[])].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return (articlesData as Article[]).find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getFeaturedArticle(): Article | undefined {
  return getAllArticles().find((a) => a.featured) ?? getAllArticles()[0];
}
