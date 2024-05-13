import { Button, Icon } from "@aleph-front/core";
import { builder } from "@builder.io/sdk";
import React, { useEffect, useState } from "react";

export const BlogTags = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAllTags() {
      const FETCH_LIMIT = 1;
      let offset = 0;
      const allTags = new Set<string>();
      let continueFetching = true;

      while (continueFetching) {
        try {
          const blogArticles = await builder.getAll("blog-article", {
            fields: "data.tags",
            limit: FETCH_LIMIT,
            sort: { firstPublished: -1 },
            options: { noTargeting: true, offset: offset },
          });

          if (!blogArticles || blogArticles.length === 0) {
            continueFetching = false;
          } else {
            continueFetching = blogArticles.length === FETCH_LIMIT;

            blogArticles.forEach((blogArticle) => {
              const fetchedTags = blogArticle.data?.tags;
              if (fetchedTags) {
                fetchedTags.forEach((tag: string) => {
                  allTags.add(tag);
                });
              }
            });
            setTags(Array.from(allTags));

            offset += FETCH_LIMIT;
          }
        } catch (error) {
          continueFetching = false;
        }
      }
    }

    fetchAllTags();
  }, []);

  return (
    <>
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
      <div tw="flex flex-wrap gap-x-2 gap-y-4">
        {tags.map((category) => {
          return (
            // TODO: Add this to front-core Button styles
            <a key={`${category}-tag-anchor`} href={`/tags/${category}`}>
              <p
                className="tp-nav text-main0"
                tw="px-5 py-2 rounded-full text-center w-fit bg-[#F5EDFF]"
              >
                {category}
              </p>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default BlogTags;
