import Link from "next/link";

type FeaturedPostProps = {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
    category?: {
      title: string;
      slug: string;
    };
    author?: {
      name: string;
    };
  };
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Em destaque
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            Conteúdo para você
          </h2>
        </div>

        <article className="overflow-hidden rounded-3xl bg-[#f7f5ef]">
          <div className="p-8 md:p-12">
            {post.category && (
              <p className="text-sm font-medium text-zinc-500">
                {post.category.title}
              </p>
            )}

            <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              {post.title}
            </h3>

            {post.excerpt && (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                {post.excerpt}
              </p>
            )}

            <div className="mt-8">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Ler artigo
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}