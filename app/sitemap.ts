import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

type SitemapPost = {
  slug: string;
  publishedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: SitemapPost[] = await client.fetch(postsQuery);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt
      ? new Date(post.publishedAt)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...postPages];
}