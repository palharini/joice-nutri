import { PortableText, type PortableTextComponents } from "@portabletext/react";

type PostContentProps = {
  value: unknown;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,

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
      <ul className="my-6 list-disc space-y-2 pl-6">{children}</ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-2 pl-6">{children}</ol>
    ),
  },
};

export default function PostContent({ value }: PostContentProps) {
  return (
    <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-p:leading-8 prose-p:text-zinc-700 prose-li:text-zinc-700">
      <PortableText value={value as any} components={components} />
    </div>
  );
}