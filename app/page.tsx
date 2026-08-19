import Hero from "@/components/home/Hero";
import FeaturedPost from "@/components/home/FeaturedPost";
import { client } from "@/sanity/lib/client";
import { featuredPostQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const featuredPost = await client.fetch(
    featuredPostQuery,
    {},
    { cache: "no-store" }
  );

  return (
    <main>
      <Hero />

      {featuredPost && <FeaturedPost post={featuredPost} />}
    </main>
  );
}