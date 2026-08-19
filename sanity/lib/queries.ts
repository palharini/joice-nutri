import { groq } from "next-sanity";

export const postsQuery = groq`
  *[
    _type == "post"
    && defined(slug.current)
  ]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    featured,

    "category": category->{
      title,
      "slug": slug.current
    },

    "author": author->{
      name,
      photo,
      role
    }
  }
`;

export const featuredPostQuery = groq`
  *[
    _type == "post"
    && featured == true
    && defined(slug.current)
  ]
  | order(publishedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    featured,

    "category": category->{
      title,
      "slug": slug.current
    },

    "author": author->{
      name,
      photo,
      role
    }
  }
`;

export const postBySlugQuery = groq`
  *[
    _type == "post"
    && slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    content,
    seo,

    "category": category->{
      title,
      "slug": slug.current
    },

    "author": author->{
      name,
      photo,
      bio,
      role
    }
  }
`;