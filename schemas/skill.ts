import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Skill Title",
      type: "string",
    }),

    defineField({
      name: "mainImage",
      title: "Skill Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
