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
      {/* Introdução */}
      <section className="bg-[#f7f5ef] px-6 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Blog
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
              Nutrição para a vida real.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-600">
              Conteúdos sobre alimentação, saúde e bem-estar para ajudar você a
              fazer escolhas mais conscientes no dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* Artigos */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          {posts.length > 0 ? (
            <>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Conteúdos
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                    Artigos recentes
                  </h2>
                </div>

                <p className="text-sm text-zinc-500">
                  {posts.length} {posts.length === 1 ? "artigo" : "artigos"}
                </p>
              </div>

              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-zinc-200 bg-[#f7f5ef] p-10 text-center md:p-14">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Blog
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                Novos conteúdos em breve.
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-600">
                Ainda não há artigos publicados. Em breve, novos conteúdos
                sobre nutrição, saúde e alimentação estarão disponíveis por
                aqui.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}