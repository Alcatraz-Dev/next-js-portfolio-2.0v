"use client";
import { usePreview } from "@/lib/sanity.preview";
import HomeSection from "./HomeSection";

type Props = {
  profile: string;
};
function PreviewContact({ profile }: Props) {
  const profileInfo = usePreview(null, profile);

  return <HomeSection profileInfo={profileInfo} />;
}

export default PreviewContact;
