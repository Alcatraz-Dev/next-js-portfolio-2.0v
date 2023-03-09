"use client";
import { usePreview } from "@/lib/sanity.preview";
import Gallerys from "./Gallery";

type Props = {
  gallery: string;
};
function PreviewGallery({ gallery }: Props) {
  const gallerys = usePreview(null, gallery);

  return <Gallerys gallery={gallerys} />;
}

export default PreviewGallery;
