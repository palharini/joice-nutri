import { PortableText, type PortableTextComponents } from "@portabletext/react";

type PostContentProps = {
  value: unknown;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 leading-8 text-zinc-700">{children}</p>
    ),

    h2: ({ children }) => (
      <h2 className="mt-12 scroll-mt-24 text-3xl font-semibold tracking-tight text-zinc-900">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-zinc-900">
        {children}
      </h3>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-zinc-300 pl-6 text-xl italic leading-8 text-zinc-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc space-y-2 pl-6 text-zinc-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-2 pl-6 text-zinc-700">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href;

      if (!href) {
        return <>{children}</>;
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PostContent({ value }: PostContentProps) {
  return (
    <div className="prose prose-zinc max-w-none">
      <PortableText value={value as any} components={components} />
    </div>
  );
}