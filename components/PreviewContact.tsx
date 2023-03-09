"use client";
import { usePreview } from "@/lib/sanity.preview";
import Contact from "./Contact";

type Props = {
  contact: string;
};
function PreviewContact({ contact }: Props) {
  const contactInfo = usePreview(null, contact);

  return <Contact contact={contactInfo} />;
}

export default PreviewContact;
