import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",

  fields: [
    defineField({
      name: "metaTitle",
      title: "Título SEO",
      type: "string",
      description: "Título exibido nos mecanismos de busca.",
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: "metaDescription",
      title: "Descrição SEO",
      type: "text",
      rows: 3,
      description: "Descrição exibida nos resultados de busca.",
      validation: (Rule) => Rule.max(160),
    }),

    defineField({
      name: "ogImage",
      title: "Imagem para compartilhamento",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Imagem utilizada ao compartilhar o artigo nas redes sociais.",
    }),

    defineField({
      name: "noIndex",
      title: "Não indexar no Google",
      type: "boolean",
      initialValue: false,
    }),
  ],
});