import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import useCachedData from "@/hooks/common/useCachedData";
import { BlogCategoryProps } from "@/types/blog/BlogCategoryProps";
import { fetchAllCategories } from "@/utils/blog/fetchAllCategories";
import { Button, Icon, Tag } from "@aleph-front/core";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const DEFAULT_SELECTED_CATEGORIES: string[] = [];

export const BlogCategories = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    DEFAULT_SELECTED_CATEGORIES
  );

  const { data: categories, loading } = useCachedData(
    "blogCategories",
    useCallback(fetchAllCategories, [])
  );

  const handleCategoryFilterClick = (categoryId: string) => {
    const queryParams = new URLSearchParams(searchParams);
    const includeCategories = new Set(
      queryParams.get("includeCategories")?.split(",")
    );

    includeCategories.has(categoryId)
      ? includeCategories.delete(categoryId)
      : includeCategories.add(categoryId);

    includeCategories.size === 0
      ? queryParams.delete("includeCategories")
      : queryParams.set(
          "includeCategories",
          Array.from(includeCategories).filter(Boolean).toString()
        );

    router.push({
      pathname: pathname,
      query: queryParams.toString(),
    });
  };

  const handleRemoveFilters = () => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.delete("includeCategories");

    router.push({
      pathname: pathname,
      query: queryParams.toString(),
    });
  };

  useEffect(() => {
    setSelectedCategories(
      searchParams.get("includeCategories")?.split(",") ||
        DEFAULT_SELECTED_CATEGORIES
    );
  }, [searchParams]);

  const clearAllFiltersCmp = (
    <Button
      variant="textOnly"
      as="button"
      size="sm"
      onClick={() => handleRemoveFilters()}
    >
      Clear all filters
      <Icon tw="ml-1" size="lg" name="trash-can-xmark" />
    </Button>
  );

  if (loading)
    return (
      <>
        <div tw="flex flex-wrap items-start gap-x-2 gap-y-4 mb-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <LoadingBlinkBox
              key={`loading-category-filter-${index}`}
              loading={true}
              loadingHeight="3rem"
              loadingWidth={`${Math.random() * (11 - 6) + 6}rem`}
              tw="rounded-xl"
            />
          ))}
        </div>
        {clearAllFiltersCmp}
      </>
    );

  return (
    <>
      <div tw="flex flex-wrap items-start gap-x-2 gap-y-4 mb-4">
        {categories.map((category: BlogCategoryProps) => {
          const isSelected = selectedCategories.includes(category.id);

          return (
            <button
              key={`${category.id}-${crypto.randomUUID()}`}
              onClick={() => handleCategoryFilterClick(category.id)}
            >
              <Tag
                variant={isSelected ? "accent" : "default"}
                tw="flex justify-center items-center text-center"
              >
                <p
                  className={`tp-body1 fs-18 ${
                    isSelected ? "text-base1" : "text-base2"
                  }`}
                >
                  {category.displayName}
                </p>
                {isSelected && <Icon tw="ml-3" name="xmark" size="lg" />}
              </Tag>
            </button>
          );
        })}
      </div>
      {clearAllFiltersCmp}
    </>
  );
};

export default BlogCategories;
