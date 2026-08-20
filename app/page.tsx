import Hero from "@/components/home/Hero";
import FeaturedPost from "@/components/home/FeaturedPost";
import RecentPosts from "@/components/home/RecentPosts";
import NutritionCare from "@/components/home/NutritionCare";

import { client } from "@/sanity/lib/client";
import {
  featuredPostQuery,
  postsQuery,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [featuredPost, posts] = await Promise.all([
    client.fetch(
      featuredPostQuery,
      {},
      { cache: "no-store" }
    ),
    client.fetch(
      postsQuery,
      {},
      { cache: "no-store" }
    ),
  ]);

  const recentPosts = posts
    .filter(
      (post: { _id: string }) =>
        post._id !== featuredPost?._id
    )
    .slice(0, 3);

  return (
    <main>
      <Hero />

      {featuredPost && (
        <FeaturedPost post={featuredPost} />
      )}

      <RecentPosts posts={recentPosts} />

      <NutritionCare />
    </main>
  );
}