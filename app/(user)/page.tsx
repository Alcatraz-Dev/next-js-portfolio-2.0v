import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewSocialIcons from "@/components/PreviewSocialIcons";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import PreviewAbout from "@/components/PreviewAbout";
import Gallery from "@/components/Gallery";
import PreviewGallery from "@/components/PreviewGallery";
import Contact from "@/components/Contact";
import PreviewContact from "@/components/PreviewContact";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import PreviewVideo from "@/components/PreviewVideo";
import VideoList from "@/components/videoList";
import Communitys from "@/components/Community";
import PreviewCommunity from "@/components/PreviewCommunity";
import SideNav from "@/components/SideNav";
import PreviewAsset from "@/components/PreviewAsset";
import AssetList from "@/components/assetList";
import Skill from "@/components/Skills";
import PreviewSkills from "@/components/PreviewSkills";

const socialQuery = groq`
  *[_type == 'socialIcons']{
       ...,paragraph[]->
    }|order(_createAt desc)
`;
const profileQuery = groq`
*[_type == 'profileInfo']{
  ...,socialIcons[]->
}|order(_createAt desc)
`;
const paragraphsQuery = groq`
  *[_type == 'sectionParagraph']{
       ...,
    }|order(_createAt desc)
`;
const skillsQuery = groq`
  *[_type == 'skills']{
       ..., 
    }|order(_createAt desc)
`;
const customButtonQuery = groq`
  *[_type == 'customButton']{
       ...,
    }|order(_createAt desc)
`;

const galleryQuery = groq`
  *[_type == 'gallery']{
       ...,
    }|order(_createAt desc)
`;
const contactQuery = groq`
  *[_type == 'contact']{
       ..., socials[]->,paragraph[]->
    }|order(_createAt desc)
`;
const codeQuery = groq`
  *[_type == 'codeInput']{
       ..., 
    }|order(_createAt desc)
`;
const blogQuery = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->,customButton[]->,assetFile[]->
}|order(_createAt desc)
`;
const videoQuery = groq`
*[_type == 'video']{
  ...,
  author->,
  categories[]->,customButton[]->,assetFile[]->
}|order(_createAt desc)
`;
const assetQuery = groq`
*[_type == 'asset']{
  ...,
  author->,
  categories[]->,customButton[]->,assetFile[]->
}|order(_createAt desc)
`;
const communityQuery = groq`
*[_type == 'community']{
  ...,
  author->,
  categories[]->,customButton[]->
}|order(_createAt desc)
`;
export const revalidate = 10;
export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={"status"}>
            <p className="text-center text-lg animate-pulse text-[#99e000]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewSocialIcons profile={profileQuery} />
        <PreviewSkills skill={skillsQuery} />
        <PreviewVideo video={videoQuery} />
        <PreviewAsset asset={assetQuery} />
        <PreviewAbout about={profileQuery} />
        <PreviewGallery gallery={galleryQuery} />

        <PreviewContact contact={contactQuery} />
        <PreviewBlogList post={blogQuery} />
        <PreviewCommunity Community={communityQuery} />
      </PreviewSuspense>
    );
  }
  const socialIcon = await client.fetch(socialQuery);
  const skills = await client.fetch(skillsQuery);
  const about = await client.fetch(profileQuery);
  const gallery = await client.fetch(galleryQuery);
  const contact = await client.fetch(contactQuery);
  const paragraph = await client.fetch(paragraphsQuery);
  const post = await client.fetch(blogQuery);
  const videos = await client.fetch(videoQuery);
  const buttons = await client.fetch(customButtonQuery);
  const communitys = await client.fetch(communityQuery);
  const profile = await client.fetch(profileQuery);
  const assets = await client.fetch(assetQuery);
  return (
    <>
      <SideNav />

      <HomeSection profileInfo={profile} />
      <About profileInfo={about} />

      <VideoList video={videos} />
      <BlogList post={post} />
      <AssetList asset={assets} />
      <Gallery gallery={gallery} />
      <Communitys community={communitys} />
      <Skill skill={skills} />
      <Contact contact={contact} />
    </>
  );
}
