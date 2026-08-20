import type { Metadata } from "next";

import PostCard from "@/components/blog/PostCard";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdos sobre nutrição, alimentação, saúde e bem-estar para ajudar você a fazer escolhas mais conscientes no dia a dia.",
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: any;
  publishedAt?: string;
  featured?: boolean;
  category?: {
    title: string;
    slug: string;
  };
  author?: {
    name: string;
    photo?: any;
    role?: string;
  };
};

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Blog
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            Nutrição para a vida real.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Conteúdos sobre alimentação, saúde e bem-estar para ajudar você a
            fazer escolhas mais conscientes no dia a dia.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl bg-zinc-50 p-10 text-center">
            <p className="text-zinc-600">
              Nenhum artigo publicado ainda.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}