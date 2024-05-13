import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/react";
import BlogArticleCard from "../BlogArticleCard";
import { Button, Col, Icon, Row, TextGradient } from "@aleph-front/core";
import Image from "next/image";
import { StyledBlogArticleHeader } from "./styles";

export const HighlightedBlogArticle = () => {
  const [highlightedBlogArticle, setHighlightedBlogArticle] = useState<any>({});

  useEffect(() => {
    async function getHighlightedBlogArticle() {
      const highlightedBlogArticles = await builder.getAll("blog-article", {
        fields:
          "data.title,data.description,data.headline,data.image,data.url,data.category",
        sort: { "data.highlightFrom": -1 },
        options: { noTargeting: true },
        limit: 1,
      });
      console.log("Fetched: ", highlightedBlogArticles);
      setHighlightedBlogArticle(highlightedBlogArticles[0]);
    }

    getHighlightedBlogArticle();
  }, []);

  return (
    <div tw="w-full h-fit py-10">
      <Row xs={1} md={3} gap="1.5rem">
        <Col md={2}>
          <div tw="mb-12">
            <p className="tp-info text-base3">
              {highlightedBlogArticle.data?.category}
            </p>
            <TextGradient type="h2" tw="line-clamp-1 w-fit mb-0">
              <header>{highlightedBlogArticle.data?.title}</header>
            </TextGradient>
            <p className="tp-h7 text-base2" tw="text-ellipsis line-clamp-2">
              {highlightedBlogArticle.data?.headline}
            </p>
          </div>
          <div tw="flex flex-col justify-between gap-6">
            <div>
              <p
                className="tp-body"
                tw="md:max-w-[50%] mb-6 text-ellipsis line-clamp-3"
              >
                {highlightedBlogArticle.data?.description}
              </p>
            </div>
            <div tw="flex gap-6">
              <Button
                as="a"
                variant="primary"
                size="lg"
                kind="gradient"
                href={highlightedBlogArticle.data?.url}
              >
                Read the article
              </Button>
              <Button
                as="a"
                href="/blog/categories"
                target="_self"
                size="sm"
                variant="textOnly"
                color="main0"
              >
                All {highlightedBlogArticle.data?.category}
                <Icon name="arrow-right" size="sm" />
              </Button>
            </div>
          </div>
        </Col>
        <Col tw="order-first md:order-last">
          <div tw="relative w-full h-full flex justify-center">
            <Image
              src={"/blog/feature-image.svg"}
              alt="Article Image"
              width={500}
              height={800}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HighlightedBlogArticle;
