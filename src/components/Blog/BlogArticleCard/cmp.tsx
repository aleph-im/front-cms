import React from "react";
import { BlogArticleCardProps } from "./types";
import Image from "next/image";
import { Button, Col, Row, TextGradient } from "@aleph-front/core";

// TODO: Refactor to use styled components
// TODO: Move to front-core (probably)
export const BlogArticleCard = ({
  title,
  headline,
  description,
  image,
  category,
  blogArticleUrl,
  size = "md",
}: BlogArticleCardProps) => {
  switch (size) {
    case "md":
      return (
        <div className="bg-white" tw="w-full h-fit p-3">
          <div className="fx-grain-5" tw="relative w-full h-20 mb-2">
            <Image src={image} alt="Article Image" fill tw="object-cover" />
          </div>
          <div tw="mb-2">
            <p className="tp-info text-base3">{category}</p>
            <p
              className="tp-h6 text-base2"
              tw="line-clamp-2 whitespace-pre-wrap"
            >
              {title}
            </p>
          </div>
          <p
            className="tp-body"
            tw="mb-6 text-ellipsis line-clamp-3 whitespace-pre-wrap"
          >
            {description}
          </p>
          <Button
            as="a"
            variant="secondary"
            size="lg"
            kind="gradient"
            href={blogArticleUrl}
          >
            Read me
          </Button>
        </div>
      );
    case "lg":
      return (
        <div className="bg-white" tw="w-full h-fit p-3">
          <div className="fx-grain-5" tw="relative w-full h-48 mb-2">
            <Image src={image} alt="Article Image" fill />
          </div>
          <div tw="mb-2 md:max-w-[75%]">
            <p className="tp-info text-base3">{category}</p>
            <p
              className="tp-h6 text-base2"
              tw="line-clamp-2 whitespace-pre-wrap"
            >
              {title}
            </p>
          </div>
          <p
            className="tp-body"
            tw="md:max-w-[66%] mb-6 text-ellipsis line-clamp-3 whitespace-pre-wrap"
          >
            {description}
          </p>
          <Button
            as="a"
            variant="secondary"
            size="lg"
            kind="gradient"
            href={blogArticleUrl}
          >
            Read me
          </Button>
        </div>
      );
    case "xl":
      return (
        <div className="bg-white" tw="w-full h-fit p-6">
          <div className="fx-grain-5" tw="relative w-full h-48 mb-6">
            <Image src={image} alt="Article Image" fill />
          </div>
          <div tw="mb-4">
            <p className="tp-info text-base3">{category}</p>
            <TextGradient type="h2" tw="mb-0 line-clamp-1 w-fit">
              {title}
            </TextGradient>
            <p
              className="tp-h7 text-base2"
              tw="text-ellipsis line-clamp-2 whitespace-pre-wrap"
            >
              {headline}
            </p>
          </div>
          <p
            className="tp-body"
            tw="md:max-w-[33%] mb-12 text-ellipsis line-clamp-3 whitespace-pre-wrap"
          >
            {description}
          </p>
          <Button
            as="a"
            variant="secondary"
            size="lg"
            kind="gradient"
            href={blogArticleUrl}
          >
            Read me
          </Button>
        </div>
      );
    case "full":
      return (
        <div className="fx-grain-2" tw="w-full h-fit p-12">
          <div tw="mb-2">
            <p className="tp-info text-base3">{category}</p>
            <TextGradient type="h2" tw="line-clamp-1 w-fit">
              {title}
            </TextGradient>
          </div>
          <Row xs={1} md={2} gap="1.5rem">
            <Col>
              <div tw="flex flex-col justify-between h-full">
                <div>
                  <p
                    className="tp-h7 text-base2"
                    tw="mb-4 text-ellipsis line-clamp-2"
                  >
                    {headline}
                  </p>
                  <p
                    className="tp-body"
                    tw="md:max-w-[50%] mb-12 text-ellipsis line-clamp-3"
                  >
                    {description}
                  </p>
                </div>
                <div>
                  <Button
                    as="a"
                    variant="secondary"
                    size="lg"
                    kind="gradient"
                    href={blogArticleUrl}
                  >
                    Read me
                  </Button>
                </div>
              </div>
            </Col>
            <Col tw="order-first md:order-last">
              <div tw="relative w-full h-full flex justify-center">
                <Image
                  src={image}
                  alt="Article Image"
                  width={500}
                  height={800}
                />
              </div>
            </Col>
          </Row>
        </div>
      );
  }
};

export default BlogArticleCard;
