import Link from "next/link";

import PostCard from "@/components/blog/PostCard";

type RecentPost = {
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

type RecentPostsProps = {
  posts: RecentPost[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  if (!posts?.length) {
    return null;
  }

  return (
    <section className="bg-[#f7f5ef] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Conteúdos recentes
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Informação para o seu dia a dia
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}