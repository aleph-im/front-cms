import { Button, Icon } from "@aleph-front/core";
import { builder } from "@builder.io/sdk";
import React, { useEffect, useState } from "react";

export const BlogCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAllCategories() {
      const FETCH_LIMIT = 100;
      let offset = 0;
      const allCategories = new Set<string>();
      let continueFetching = true;

      while (continueFetching) {
        try {
          const blogArticles = await builder.getAll("blog-article", {
            fields: "data.category",
            limit: FETCH_LIMIT,
            sort: { firstPublished: -1 },
            options: { noTargeting: true, offset: offset },
          });

          if (!blogArticles || blogArticles.length === 0) {
            continueFetching = false;
          } else {
            continueFetching = blogArticles.length === FETCH_LIMIT;

            blogArticles.forEach((blogArticle) => {
              const fetchedCategory = blogArticle.data?.category;
              if (fetchedCategory) {
                allCategories.add(fetchedCategory);
              }
            });
            setCategories(Array.from(allCategories));

            offset += FETCH_LIMIT;
          }
        } catch (error) {
          continueFetching = false;
        }
      }
    }

    fetchAllCategories();
  }, []);

  return (
    <>
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
      <div tw="flex flex-wrap gap-x-2 gap-y-4">
        {categories.map((category) => {
          return (
            // TODO: Add this to front-core Button styles
            <a key={`${category}-tag-anchor`} href={`/categories/${category}`}>
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

export default BlogCategories;
