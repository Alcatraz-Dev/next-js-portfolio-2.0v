"use client";
import { usePreview } from "@/lib/sanity.preview";

import HomeSection from "./HomeSection";

type Props = {
  profile: string;
};
function PreviewSocialIcons({ profile }: Props) {
  const info = usePreview(null, profile);

  return <HomeSection profileInfo={info} />;
}

export default PreviewSocialIcons;
