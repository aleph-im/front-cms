export type BlogArticleCardProps = {
  title: string;
  headline: string;
  description: string;
  thumbnailImage?: string;
  featureImage?: string;
  category: string;
  blogArticleUrl: string;
  size?: "md" | "lg" | "xl" | "full" | "highlighted";
  loading: boolean;
};
