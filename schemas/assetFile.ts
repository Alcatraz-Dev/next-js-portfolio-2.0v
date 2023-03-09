import { defineField, defineType } from "sanity";

export default defineType({
  name: "assetFile",
  title: "Asset File",
  description: "max 2 files in single line",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "assetFile",
      title: "Asset File",
      type: "file",
    }),
    defineField({
      name: "fileId",
      title: "File Id",
      type: "string",
    }),

    defineField({
      name: "className",
      title: "className",
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
