import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  postBySlugQuery,
  relatedPostsQuery,
} from "@/sanity/lib/queries";

import PostContent from "@/components/blog/PostContent";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import RelatedPosts from "@/components/blog/RelatedPosts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(postBySlugQuery, {
    slug,
  });

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  const description =
    post.seo?.description ||
    post.excerpt ||
    "Conteúdo sobre nutrição, alimentação, saúde e bem-estar.";

  return {
    title: post.seo?.title || post.title,
    description,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await client.fetch(postBySlugQuery, {
    slug,
  });

  if (!post) {
    notFound();
  }

  const relatedPosts = post.category?._id
    ? await client.fetch(relatedPostsQuery, {
        slug: post.slug,
        categoryId: post.category._id,
      })
    : [];

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage)
        .width(1400)
        .height(875)
        .fit("crop")
        .url()
    : null;

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <Breadcrumbs
          category={post.category}
          title={post.title}
        />

        {/* Cabeçalho */}
        <header className="mx-auto max-w-4xl">
          {post.category && (
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {post.category.title}
            </p>
          )}

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl md:leading-[1.05]">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600 md:text-2xl md:leading-9">
              {post.excerpt}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
            {post.author && <span>Por {post.author.name}</span>}

            {post.author && post.publishedAt && (
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
        </header>

        {/* Imagem de capa */}
        {coverImageUrl && (
          <figure className="relative mt-12 aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 md:mt-16">
            <Image
              src={coverImageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </figure>
        )}

        {/* Conteúdo */}
        {post.content && (
          <div className="mx-auto mt-14 max-w-3xl border-t border-zinc-200 pt-10 md:mt-20 md:pt-14">
            <PostContent value={post.content} />
          </div>
        )}

        {/* Artigos relacionados */}
        <RelatedPosts posts={relatedPosts} />
      </article>
    </main>
  );
}