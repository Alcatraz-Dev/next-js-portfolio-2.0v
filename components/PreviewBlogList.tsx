"use client";
import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./BlogList";
type Props = {
  post: string;
};
function PreviewBlogList({ post }: Props) {
  const posts = usePreview(null, post);

  return <BlogList post={posts} />;
}

export default PreviewBlogList;
