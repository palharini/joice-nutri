import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

type RelatedPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  coverImage?: any;
  category?: {
    title: string;
    slug: string;
  } | null;
};

type RelatedPostsProps = {
  posts: RelatedPost[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts?.length) {
    return null;
  }

  return (
    <section className="mx-auto mt-16 max-w-5xl border-t border-zinc-200 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
        Você também pode gostar
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post._id}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
          >
            {post.coverImage && (
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-zinc-100"
              >
                <Image
                  src={urlFor(post.coverImage).width(800).height(500).url()}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
            )}

            <div className="p-6">
              {post.category && (
                <p className="mb-3 text-sm font-medium text-zinc-500">
                  {post.category.title}
                </p>
              )}

              <h3 className="text-xl font-semibold leading-snug tracking-tight text-zinc-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition hover:text-zinc-600"
                >
                  {post.title}
                </Link>
              </h3>

              {post.excerpt && (
                <p className="mt-3 line-clamp-3 leading-7 text-zinc-600">
                  {post.excerpt}
                </p>
              )}

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex font-medium text-zinc-900 transition hover:text-zinc-600"
              >
                Ler artigo →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}