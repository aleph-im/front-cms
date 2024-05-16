import { GetContentOptions } from "@builder.io/sdk";

export type AllBlogArticlesProps = {
  articleSize?: "md" | "lg" | "xl" | "full" | "highlighted";
  allowLoadMore: boolean;
  articlesPerPage: number;
  articlesLimit?: number;
  customBuilderRequestOptions?: GetContentOptions;
};

type CategorizationFilter = {
  includeIds: string[];
};

export type Filters = {
  tags?: CategorizationFilter;
  category?: CategorizationFilter;
};
