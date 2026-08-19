import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Artigos",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Resumo",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: "coverImage",
      title: "Imagem de capa",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Autora",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Data de publicação",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "featured",
      title: "Artigo em destaque",
      type: "boolean",
      description:
        "Marque esta opção para exibir este artigo em destaque na página inicial.",
      initialValue: false,
    }),

    defineField({
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Título 2", value: "h2" },
            { title: "Título 3", value: "h3" },
            { title: "Citação", value: "blockquote" },
          ],
          lists: [
            { title: "Marcadores", value: "bullet" },
            { title: "Numerada", value: "number" },
          ],
        },
      ],
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});