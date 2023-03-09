import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "mainImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "galleysParagraph",
      title: "Galleys Paragraph",
      type: "text",
    }),
  ],
});
