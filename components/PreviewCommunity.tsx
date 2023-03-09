"use client";
import { usePreview } from "@/lib/sanity.preview";
import Communitys from "./Community";

type Props = {
  Community: string;
};
function PreviewCommunity({ Community }: Props) {
  const communitys = usePreview(null, Community);

  return <Communitys community={communitys} />;
}

export default PreviewCommunity;
