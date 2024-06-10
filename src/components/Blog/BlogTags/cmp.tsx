import useCachedData from "@/hooks/common/useCachedData";
import { Button, Icon } from "@aleph-front/core";
import React, { useCallback } from "react";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";
import { BlogTagProps } from "@/types/blog/BlogTagProps";
import { BlogTagsProps } from "./types";
import { getRandomUniqueElements } from "@/utils/getRandomUniqueElements";
import LoadingBlinkBox from "@/components/LoadingBlinkBox";

export const BlogTags = ({ amount = 10 }: BlogTagsProps) => {
  const { data: tags, loading } = useCachedData(
    "blogTags",
    useCallback(fetchAllTags, [])
  );

  const titleCmp = (
    <div tw="flex gap-3 mb-4">
      <p className="tp-h6 text-base2">Tags</p>
      <Button
        as="a"
        href="/blog/tags"
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
              key={`loading-tag-${index}`}
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
        {getRandomUniqueElements<BlogTagProps>(tags, amount).map(
          (tag: BlogTagProps) => {
            return (
              // TODO: Add this to front-core Button styles
              <a
                key={`${tag.id}-${crypto.randomUUID()}`}
                href={`/blog/tags/${tag.id}`}
              >
                <p
                  className="tp-nav text-main0"
                  tw="px-5 py-2 rounded-full text-center w-fit bg-[#F5EDFF]"
                >
                  {tag.displayName}
                </p>
              </a>
            );
          }
        )}
      </div>
    </>
  );
};

export default BlogTags;
