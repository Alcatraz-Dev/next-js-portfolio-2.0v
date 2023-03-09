import { defineField, defineType } from "sanity";

export default defineType({
  name: "profileInfo",
  title: "Portfile Info ",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Profile Name",
      description: "Enter your name ",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Home Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "aboutParagraph",
      title: "About Paragraph",
      type: "text",
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "skillOne",
      title: "Skill One Name",
      description: "Enter your skill one description ",
      type: "string",
    }),
    defineField({
      name: "skillTow",
      title: "Skill Tow Name",
      description: "Enter your skill tow description ",
      type: "string",
    }),
    defineField({
      name: "skillThree",
      title: "Skill Three Name",
      description: "Enter your skill Three description ",
      type: "string",
    }),
    defineField({
      name: "socialIcons",
      title: "Social Icons",
      type: "array",
      of: [{ type: "reference", to: { type: "socialIcons" } }],
    }),
  ],
});
