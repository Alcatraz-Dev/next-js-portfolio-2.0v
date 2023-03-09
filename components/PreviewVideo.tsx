"use client";
import { usePreview } from "@/lib/sanity.preview";
import VideoList from "./videoList";

type Props = {
  video: string;
};
function PreviewVideo({ video }: Props) {
  const videos = usePreview(null, video);

  return <VideoList video={videos} />;
}

export default PreviewVideo;
