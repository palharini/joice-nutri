import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

type PostContentProps = {
  value: PortableTextBlock[];
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-8 text-zinc-700">
        {children}
      </p>
    ),

    h2: ({ children }) => (
      <h2 className="mt-14 scroll-mt-24 text-3xl font-semibold tracking-tight text-zinc-950">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-zinc-950">
        {children}
      </h3>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-4 border-zinc-300 pl-6 text-xl italic leading-9 text-zinc-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-7 list-disc space-y-3 pl-6 text-lg leading-8 text-zinc-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-7 list-decimal space-y-3 pl-6 text-lg leading-8 text-zinc-700">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href as string | undefined;

      if (!href) {
        return <>{children}</>;
      }

      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://");

      return (
        <a
          href={href}
          {...(isExternal
            ? {
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {})}
          className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-600"
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
      <PortableText value={value} components={components} />
    </div>
  );
}