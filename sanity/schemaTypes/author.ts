import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Autora",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "bio",
      title: "Biografia",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "role",
      title: "Especialidade / Cargo",
      type: "string",
    }),
  ],
});