import useCachedData from "@/hooks/common/useCachedData";
import { BlogCategoryProps } from "@/types/blog/BlogCategoryProps";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";
import { Button, Icon, Tag } from "@aleph-front/core";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const DEFAULT_SELECTED_CATEGORIES: string[] = [];

export const BlogTags = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<string[]>(
    DEFAULT_SELECTED_CATEGORIES
  );

  const { data: tags, loading } = useCachedData(
    "blogTags",
    useCallback(fetchAllTags, [])
  );

  const handleCategoryFilterClick = (tagId: string) => {
    const queryParams = new URLSearchParams(searchParams);
    const includeTags = new Set(queryParams.get("includeTags")?.split(","));

    includeTags.has(tagId) ? includeTags.delete(tagId) : includeTags.add(tagId);

    includeTags.size === 0
      ? queryParams.delete("includeTags")
      : queryParams.set(
          "includeTags",
          Array.from(includeTags).filter(Boolean).toString()
        );

    router.push({
      pathname: pathname,
      query: queryParams.toString(),
    });
  };

  const handleRemoveFilters = () => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.delete("includeTags");

    router.push({
      pathname: pathname,
      query: queryParams.toString(),
    });
  };

  useEffect(() => {
    setSelectedTags(
      searchParams.get("includeTags")?.split(",") || DEFAULT_SELECTED_CATEGORIES
    );
  }, [searchParams]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div tw="flex flex-wrap items-start gap-x-2 gap-y-4 mb-4">
        {tags.map((tag: BlogCategoryProps) => {
          const isSelected = selectedTags.includes(tag.id);

          return (
            <button
              key={`${tag.id}-${crypto.randomUUID()}`}
              onClick={() => handleCategoryFilterClick(tag.id)}
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
                  {tag.displayName}
                </p>
                {isSelected && <Icon tw="ml-3" name="xmark" size="lg" />}
              </Tag>
            </button>
          );
        })}
      </div>
      <Button
        variant="textOnly"
        as="button"
        size="sm"
        onClick={() => handleRemoveFilters()}
      >
        Clear all filters
        <Icon tw="ml-1" size="lg" name="trash-can-xmark" />
      </Button>
    </>
  );
};

export default BlogTags;
