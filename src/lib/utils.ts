import { getCollection } from "astro:content";

const persianDate = new Intl.DateTimeFormat("fa-IR", { dateStyle: "long" });

export const formatDate = (date: Date): string => persianDate.format(date);

/** All articles, newest first. */
export async function getSortedArticles(limit?: number) {
  const articles = await getCollection("articles");
  articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return limit ? articles.slice(0, limit) : articles;
}
