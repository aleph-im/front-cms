import React, { useCallback, useEffect, useMemo, useState } from "react";
import BlogArticleCard from "../BlogArticleCard";
import { Button, Spinner } from "@aleph-front/core";
import { AllBlogArticlesProps, Filters } from "./types";
import { StyledBlogArticlesGrid } from "./styles";
import { useGetPageCategorization } from "@/hooks/blog/useGetPageCategorization";
import useFetchBlogArticles from "@/hooks/blog/useFetchBlogArticles";
import { GetContentOptions } from "@builder.io/sdk";
import { useSearchParams } from "next/navigation";
import { DEFAULT_BUILDER_REQUEST_OPTIONS } from "@/constants/blog";
import { useTheme } from "styled-components";
import { BlogCategoryProps } from "@/types/blog/BlogCategoryProps";

function buildFilters(searchParams: any, pageCategorization: any): any {
  const queryParams = new URLSearchParams(searchParams);
  let newFilters: Filters = {
    tags: {
      includeIds: queryParams.get("includeTags")?.split(",") || [],
    },
    category: {
      includeIds: queryParams.get("includeCategories")?.split(",") || [],
    },
  };

  switch (pageCategorization?.type) {
    case "categories":
      newFilters.category = {
        ...newFilters.category,
        includeIds: [pageCategorization.id],
      };
      break;
    case "tags":
      newFilters.tags = {
        ...newFilters.tags,
        includeIds: [pageCategorization.id],
      };
      break;
  }

  return newFilters;
}

export const AllBlogArticles = ({
  articleSize = "md",
  allowLoadMore = true,
  articlesPerPage = 8,
  articlesLimit,
  customBuilderRequestOptions,
}: AllBlogArticlesProps) => {
  const theme: any = useTheme();
  const searchParams = useSearchParams();
  const pageCategorization = useGetPageCategorization();
  const [blogArticles, setBlogArticles] = useState<Set<any>>(new Set());
  const [filters, setFilters] = useState<Filters>(
    buildFilters(searchParams, pageCategorization)
  );

  const defaultBuilderRequestOptions: GetContentOptions = useMemo(
    () => DEFAULT_BUILDER_REQUEST_OPTIONS,
    []
  );

  const builderRequestOptions: GetContentOptions = useMemo(() => {
    return customBuilderRequestOptions
      ? customBuilderRequestOptions
      : defaultBuilderRequestOptions;
  }, [customBuilderRequestOptions, defaultBuilderRequestOptions]);

  const validBlogArticlesFilter = useCallback(
    (fetchedBlogArticle: any) => {
      if (!filters) return true;

      const { tags: tagsFilters, category: categoryFilters } = filters;
      let isValid = true;

      if (!tagsFilters && !categoryFilters) return isValid;
      if (tagsFilters) {
        const { includeIds } = tagsFilters;
        const blogTagsIds: string[] = fetchedBlogArticle.data?.tags?.map(
          (tagRef: any) => tagRef.tag.value?.data.id
        );

        if (includeIds.length !== 0) {
          isValid =
            isValid && blogTagsIds.some((tagId) => includeIds.includes(tagId));
        }
      }

      if (categoryFilters) {
        const { includeIds } = categoryFilters;
        const blogCategoryId: string =
          fetchedBlogArticle.data?.category?.value?.data.id;

        if (includeIds.length !== 0) {
          isValid = isValid && includeIds.includes(blogCategoryId);
        }
      }

      return isValid;
    },
    [filters]
  );

  const {
    blogArticles: fetchedBlogArticles,
    loading,
    allArticlesLoaded,
    continueFetchingBlogArticles,
    restartBlogArticlesSearch,
  } = useFetchBlogArticles({
    builderRequestOptions,
    articlesPerPage,
    validBlogArticlesFilter,
  });

  useEffect(() => {
    if (fetchedBlogArticles && fetchedBlogArticles.length > 0) {
      setBlogArticles(
        (prevArticles) =>
          new Set([...Array.from(prevArticles), ...fetchedBlogArticles])
      );
    }
  }, [fetchedBlogArticles]);

  useEffect(() => {
    setFilters(buildFilters(searchParams, pageCategorization));
  }, [searchParams, pageCategorization]);

  useEffect(() => {
    if (!filters) return;

    setBlogArticles(new Set());
    restartBlogArticlesSearch();
  }, [restartBlogArticlesSearch, filters]);

  const handleLoadMore = () => {
    continueFetchingBlogArticles();
  };

  if (loading && blogArticles.size === 0)
    return (
      <StyledBlogArticlesGrid>
        {Array.from({ length: articlesPerPage }).map((_, index) => (
          <BlogArticleCard
            key={`loading-article-${index}`}
            size={articleSize}
            loading
          />
        ))}
      </StyledBlogArticlesGrid>
    );
  if (blogArticles.size === 0) return;

  return (
    <>
      <StyledBlogArticlesGrid>
        {Array.from(blogArticles)
          .slice(0, articlesLimit || blogArticles.size)
          .map((blogArticle: any) => {
            return (
              <BlogArticleCard
                key={blogArticle.title}
                title={blogArticle.title}
                headline={blogArticle.headline}
                description={blogArticle.description}
                thumbnailImage={blogArticle.thumbnailImage}
                featureImage={blogArticle.featureImage}
                blogArticleUrl={blogArticle.url}
                size={articleSize}
                category={blogArticle.category.value.data as BlogCategoryProps}
              />
            );
          })}
      </StyledBlogArticlesGrid>
      {allowLoadMore && !allArticlesLoaded && (
        <div tw="flex items-center justify-center p-12 ">
          <Button
            as="button"
            size="md"
            variant="textOnly"
            color="main0"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? (
              <Spinner tw="pb-6" color={theme.color.dark1} />
            ) : (
              "Load more"
            )}
          </Button>
        </div>
      )}
    </>
  );
};

export default AllBlogArticles;
