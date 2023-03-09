type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
export interface ProfileInfo extends Base {
  name: string;
  mainImage: MainImage;
  aboutImage: mainImage;
  skillOne: string;
  skillThree: string;
  skillTow: string;
  socialIcons: SocialIcon[];
  aboutParagraph: string;
}
interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  postDescription: string;
  titelColor: string;
  postTag: string;
  tagBgColor: string;
  customButton: ButtonLink[];
  assetFile: AssetFile[];
  codeInput: Code[];
  postsParagraph: string;
}
interface Author extends Base {
  bio: Block[];
  mainImage: MainImage;
  name: string;
  slug: Slug;
}
interface SocialIcons extends Base {
  name: string;
  url: string;
  fgcolor: string;
  bgcolor: string;
}
interface Image {
  _type: "image";
  asset: Reference;
}
interface Reference {
  _ref: string;
  _type: "reference";
}
interface Slug {
  _type: "slug";
  current: string;
}
interface Url {
  _type: "url";
}
interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
interface Category extends Base {
  description: string;
  title: string;
}
interface mainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

export interface Skills extends Base {
  mainImage: Image;
  title: string;
}
export interface Resume extends Base {
  description: string;
  year: string;
}
export interface Gallery extends Base {
  mainImage: MainImage;
  title: string;
  galleysParagraph: string;
}
export interface Contact extends Base {
  url: string;
  contactParagraph: string;
}

export interface Video extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  description: string;
  mainImage: MainImage;
  slug: Slug;
  tagBgColor: string;
  titelColor: string;
  title: string;
  videoTag: string;
  videoUrl: string;
  customButton: ButtonLink[];
  assetFile: AssetFile[];
  videosParagraph: string;
}
export interface AssetTools extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  description: string;
  mainImage: MainImage;
  slug: Slug;
  tagBgColor: string;
  titelColor: string;
  title: string;
  assetTag: string;
  assetUrl: string;
  customButton: ButtonLink[];
  assetFile: AssetFile[];
  assetsParagraph: string;
}
export interface ButtonLink extends Base {
  buttonBgColor: string;
  buttonName: string;
  buttonTitle: string;
  mainImage: MainImage;
  url: string;
  className: string;
}
export interface AssetFile extends Base {
  assetFile: AssetClass;
  name: string;
  fileId: string;
  mainImage: MainImage;
  className: string;
  buttonBgColor: string;
}
export interface AssetClass {
  _type: string;
  asset: AssetRef;
}

export interface AssetRef {
  _ref: string;
  _type: string;
}
export interface Code extends Base {
  code: CodeClass;
  codeName: string;
}

export interface CodeClass {
  _type: string;
  code: string;
  language: string;
}
export interface Community extends Base {
  author: Author;
  categories: Category[];
  communityTag: string;
  communityUrl: string;
  customButton: ButtonLink[];
  description: string;
  mainImage: MainImage;
  CoverImage: mainImage;
  slug: Slug;
  tagBgColor: string;
  titelColor: string;
  title: string;
  body: Block[];
  communityParagraph: string;
}
