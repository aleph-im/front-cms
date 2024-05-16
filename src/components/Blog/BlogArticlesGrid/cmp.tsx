import React, { useCallback, useEffect, useMemo, useState } from "react";
import BlogArticleCard from "../BlogArticleCard";
import { Button } from "@aleph-front/core";
import { AllBlogArticlesProps, Filters } from "./types";
import { StyledBlogArticlesGrid } from "./styles";
import { useGetPageCategorization } from "@/hooks/blog/useGetPageCategorization";
import useFetchBlogArticles from "@/hooks/blog/useFetchBlogArticles";
import { GetContentOptions } from "@builder.io/sdk";
import { useSearchParams } from "next/navigation";
import { DEFAULT_BUILDER_REQUEST_OPTIONS } from "@/constants/blog";

export const AllBlogArticles = ({
  articleSize = "md",
  allowLoadMore = true,
  articlesPerPage = 8,
  articlesLimit,
  customBuilderRequestOptions,
}: AllBlogArticlesProps) => {
  const searchParams = useSearchParams();
  const pageCategorization = useGetPageCategorization();
  const [blogArticles, setBlogArticles] = useState<Set<any>>(new Set());
  const [filters, setFilters] = useState<Filters>();

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

      const blogCategoryId: string =
        fetchedBlogArticle.data?.category?.value?.data.id;
      const blogTagsIds: string[] = fetchedBlogArticle.data?.tags?.map(
        (tagRef: any) => tagRef.tag.value?.data.id
      );

      const { tags: tagsFilters, category: categoryFilters } = filters;
      let isValid = true;

      if (!tagsFilters && !categoryFilters) return isValid;
      if (tagsFilters) {
        const { includeIds } = tagsFilters;
        if (includeIds.length !== 0) {
          isValid =
            isValid && blogTagsIds.some((tagId) => includeIds.includes(tagId));
        }
      }

      if (categoryFilters) {
        const { includeIds } = categoryFilters;
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

    setFilters(newFilters);
  }, [searchParams, pageCategorization]);

  useEffect(() => {
    if (!filters) return;

    setBlogArticles(new Set());
    restartBlogArticlesSearch();
  }, [restartBlogArticlesSearch, filters]);

  const handleLoadMore = () => {
    continueFetchingBlogArticles();
  };

  if (loading && blogArticles.size === 0) return <p>Loading...</p>;
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
                blogArticleUrl={blogArticle.url}
                size={articleSize}
                category={blogArticle.category.value.data.name}
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
            {loading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </>
  );
};

export default AllBlogArticles;
