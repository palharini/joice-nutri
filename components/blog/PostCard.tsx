import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

type PostCardProps = {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
    coverImage?: any;
    publishedAt?: string;
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
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {post.coverImage ? (
        <Link
          href={`/blog/${post.slug}`}
          className="relative block aspect-[16/10] overflow-hidden bg-zinc-100"
          aria-label={`Ler artigo: ${post.title}`}
        >
          <Image
            src={urlFor(post.coverImage)
              .width(800)
              .height(500)
              .fit("crop")
              .url()}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-zinc-100">
          <span className="text-sm text-zinc-400">Sem imagem de capa</span>
        </div>
      )}

      <div className="p-6 md:p-7">
        {post.category && (
          <p className="text-sm font-medium text-zinc-500">
            {post.category.title}
          </p>
        )}

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
          <Link
            href={`/blog/${post.slug}`}
            className="transition duration-200 hover:text-zinc-600"
          >
            {post.title}
          </Link>
        </h2>

        {post.excerpt && (
          <p className="mt-4 line-clamp-3 text-base leading-7 text-zinc-600">
            {post.excerpt}
          </p>
        )}

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition duration-200 hover:text-zinc-600"
        >
          Ler artigo →
        </Link>
      </div>
    </article>
  );
}