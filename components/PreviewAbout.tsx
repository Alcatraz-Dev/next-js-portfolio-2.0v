"use client";
import { usePreview } from "@/lib/sanity.preview";
import About from "./About";

type Props = {
  about: string;
};
function PreviewResume({ about }: Props) {
  const abouts = usePreview(null, about);
  return <About profileInfo={abouts} />;
}

export default PreviewResume;
