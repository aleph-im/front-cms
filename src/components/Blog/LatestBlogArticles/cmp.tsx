import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/react";
import BlogArticleCard from "../BlogArticleCard";
import { LatestBlogArticlesProps } from "./types";

export const LatestBlogArticles = ({
  articleSize,
  articlesAmount,
}: LatestBlogArticlesProps) => {
  const [latestBlogArticles, setLatestBlogArticles] = useState<any[]>([]);

  useEffect(() => {
    async function getLatestBlogArticles() {
      const latestBlogArticles = await builder.getAll("blog-article", {
        fields:
          "data.title,data.description,data.headline,data.image,data.url,data.category",
        sort: { firstPublished: -1 },
        options: { noTargeting: true },
        limit: articlesAmount,
      });

      setLatestBlogArticles(latestBlogArticles);
    }

    getLatestBlogArticles();
  }, [articlesAmount]);

  return (
    <>
      <div tw="flex md:flex-row flex-col md:justify-between justify-center gap-6 mb-8">
        {latestBlogArticles.map((blogArticle) => {
          return (
            <BlogArticleCard
              key={blogArticle.data?.title}
              title={blogArticle.data?.title}
              headline={blogArticle.data?.headline}
              description={blogArticle.data?.description}
              blogArticleUrl={blogArticle.data?.url}
              image={blogArticle.data?.image}
              size={articleSize}
              category={blogArticle.data?.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default LatestBlogArticles;
