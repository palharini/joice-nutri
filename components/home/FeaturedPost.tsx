import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

type FeaturedPostProps = {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    coverImage?: unknown;
    publishedAt?: string | null;
    category?: {
      title: string;
      slug: string;
    } | null;
    author?: {
      name: string;
    } | null;
  };
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage)
        .width(1200)
        .height(900)
        .fit("crop")
        .url()
    : null;

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Em destaque
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Conteúdo para você
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <article className="grid overflow-hidden rounded-[2rem] border border-zinc-200 bg-[#f7f5ef] md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            {post.category && (
              <p className="text-sm font-medium text-zinc-500">
                {post.category.title}
              </p>
            )}

            <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
              {post.title}
            </h3>

            {post.excerpt && (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                {post.excerpt}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500">
              {post.author?.name && <span>Por {post.author.name}</span>}

              {post.author?.name && post.publishedAt && (
                <span aria-hidden="true">•</span>
              )}

              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              )}
            </div>

            <div className="mt-8">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Ler artigo
              </Link>
            </div>
          </div>

          {coverImageUrl && (
            <Link
              href={`/blog/${post.slug}`}
              className="relative min-h-[320px] overflow-hidden bg-zinc-200 md:min-h-full"
              aria-label={`Ler artigo: ${post.title}`}
            >
              <Image
                src={coverImageUrl}
                alt={post.title}
                fill
                className="object-cover transition duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </Link>
          )}
        </article>
      </div>
    </section>
  );
}