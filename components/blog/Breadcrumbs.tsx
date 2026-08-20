import Link from "next/link";

type BreadcrumbsProps = {
  category?: {
    title: string;
    slug: string;
  } | null;
  title: string;
};

export default function Breadcrumbs({
  category,
  title,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 text-sm text-zinc-500"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="transition hover:text-zinc-900"
          >
            Início
          </Link>
        </li>

        <li aria-hidden="true">/</li>

        <li>
          <Link
            href="/blog"
            className="transition hover:text-zinc-900"
          >
            Blog
          </Link>
        </li>

        {category && (
          <>
            <li aria-hidden="true">/</li>

            <li className="text-zinc-600">
              {category.title}
            </li>
          </>
        )}

        <li aria-hidden="true">/</li>

        <li
          aria-current="page"
          className="max-w-[280px] truncate text-zinc-700"
          title={title}
        >
          {title}
        </li>
      </ol>
    </nav>
  );
}