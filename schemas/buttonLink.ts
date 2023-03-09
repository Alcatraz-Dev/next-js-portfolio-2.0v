import { defineField, defineType } from "sanity";

export default defineType({
  name: "customButton",
  title: "Custom Button",
  description: "max 2 buttons in single line",
  type: "document",
  fields: [
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    }),
    defineField({
      name: "buttonName",
      title: "Button Name",
      type: "string",
    }),

    defineField({
      name: "className",
      title: "className",
      type: "string",
    }),

    defineField({
      name: "url",
      title: "Url Link",
      type: "string",
    }),
    defineField({
      name: "buttonBgColor",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Icon Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
