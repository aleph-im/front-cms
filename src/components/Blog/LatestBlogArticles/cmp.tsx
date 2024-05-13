import React, { useMemo } from "react";
import { LatestBlogArticlesProps } from "./types";
import { GetContentOptions } from "@builder.io/sdk";
import BlogArticlesGrid from "../BlogArticlesGrid";
import { DEFAULT_BUILDER_REQUEST_OPTIONS } from "@/constants/blog";

export const LatestBlogArticles = ({
  articleSize = "lg",
  articlesAmount = 2,
}: LatestBlogArticlesProps) => {
  const builderRequestOptions: GetContentOptions = useMemo(
    () => ({
      ...DEFAULT_BUILDER_REQUEST_OPTIONS,
      sort: { firstPublished: -1 },
    }),
    []
  );

  return (
    <BlogArticlesGrid
      articlesPerPage={articlesAmount}
      articlesLimit={articlesAmount}
      allowLoadMore={false}
      articleSize={articleSize}
      customBuilderRequestOptions={builderRequestOptions}
    />
  );
};

export default LatestBlogArticles;
