import useCachedData from "@/hooks/common/useCachedData";
import { BlogCategoryProps } from "@/types/blog/BlogCategoryProps";
import { fetchAllCategories } from "@/utils/blog/fetchAllCategories";
import { getRandomUniqueElements } from "@/utils/getRandomUniqueElements";
import { Button, Icon } from "@aleph-front/core";
import React, { useCallback } from "react";
import { BlogCategoriesProps } from "./types";
import LoadingBlinkBox from "@/components/LoadingBlinkBox";

export const BlogCategories = ({ amount = 10 }: BlogCategoriesProps) => {
  const { data: categories, loading } = useCachedData(
    "blogCategories",
    useCallback(fetchAllCategories, [])
  );

  const titleCmp = (
    <div tw="flex gap-3 mb-4">
      <p className="tp-h6 text-base2">Categories</p>
      <Button
        as="a"
        href="/blog/categories"
        target="_self"
        size="sm"
        variant="textOnly"
        color="main0"
      >
        All
        <Icon name="arrow-right" size="sm" />
      </Button>
    </div>
  );

  if (loading)
    return (
      <>
        {titleCmp}
        <div tw="flex flex-wrap gap-x-2 gap-y-4">
          {Array.from({ length: amount }).map((_, index) => (
            <LoadingBlinkBox
              key={`loading-category-${index}`}
              loading={true}
              loadingHeight="2.25rem"
              loadingWidth={`${Math.random() * (11 - 6) + 6}rem`}
              tw="rounded-full"
            />
          ))}
        </div>
      </>
    );

  return (
    <>
      {titleCmp}
      <div tw="flex flex-wrap gap-x-2 gap-y-4">
        {getRandomUniqueElements<BlogCategoryProps>(categories, amount).map(
          (category: BlogCategoryProps) => {
            return (
              // TODO: Add this to front-core Button styles
              <a
                key={`${category.id}-${crypto.randomUUID()}`}
                href={`/blog/categories/${category.id}`}
              >
                <p
                  className="tp-nav text-main0"
                  tw="px-5 py-2 rounded-full text-center w-fit bg-[#F5EDFF]"
                >
                  {category.displayName}
                </p>
              </a>
            );
          }
        )}
      </div>
    </>
  );
};

export default BlogCategories;
