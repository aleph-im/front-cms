import React, { useMemo } from "react";
import { PinnedBlogArticlesProps } from "./types";
import { GetContentOptions } from "@builder.io/sdk";
import BlogArticlesGrid from "../BlogArticlesGrid";
import { DEFAULT_BUILDER_REQUEST_OPTIONS } from "@/constants/blog";

export const PinnedBlogArticles = ({
  articleSize = "md",
  articlesAmount = 8,
}: PinnedBlogArticlesProps) => {
  const builderRequestOptions: GetContentOptions = useMemo(
    () => ({
      ...DEFAULT_BUILDER_REQUEST_OPTIONS,
      sort: { "data.pinFrom": -1 },
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

export default PinnedBlogArticles;
