import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "url",
      title: "Email Form Url",
      type: "string",
    }),
    defineField({
      name: "contactParagraph",
      title: "Contact Paragraph",
      type: "text",
    }),
  ],
});
