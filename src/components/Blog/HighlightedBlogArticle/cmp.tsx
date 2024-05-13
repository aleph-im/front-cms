import React, { useMemo } from "react";
import { GetContentOptions } from "@builder.io/sdk";
import BlogArticlesGrid from "../BlogArticlesGrid";
import { DEFAULT_BUILDER_REQUEST_OPTIONS } from "@/constants/blog";

export const HighlightedBlogArticle = () => {
  const builderRequestOptions: GetContentOptions = useMemo(
    () => ({
      ...DEFAULT_BUILDER_REQUEST_OPTIONS,
      sort: { "data.highlightFrom": -1 },
    }),
    []
  );

  return (
    <BlogArticlesGrid
      articlesPerPage={1}
      articlesLimit={1}
      allowLoadMore={false}
      articleSize="highlighted"
      customBuilderRequestOptions={builderRequestOptions}
    />
  );
};

export default HighlightedBlogArticle;
