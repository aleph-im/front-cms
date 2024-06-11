import { BlogCategoryProps } from "@/types/blog/BlogCategoryProps";

export type BlogArticleCardProps = {
  title?: string;
  headline?: string;
  description?: string;
  thumbnailImage?: string;
  featureImage?: string;
  category?: BlogCategoryProps;
  blogArticleUrl?: string;
  size?: "md" | "lg" | "xl" | "full" | "highlighted";
  loading?: boolean;
};
