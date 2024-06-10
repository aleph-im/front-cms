import React from "react";
import { BlogArticleCardProps } from "./types";
import Image from "next/image";
import { Button, Col, Icon, Row, TextGradient } from "@aleph-front/core";
import LoadingBlinkBox from "@/components/LoadingBlinkBox";

// TODO: Refactor to use styled components
// TODO: Move to front-core (probably)
export const BlogArticleCard = ({
  title,
  headline,
  description,
  thumbnailImage = "/blog/article-thumbnail.svg",
  featureImage = "/blog/feature-image.svg",
  category,
  blogArticleUrl,
  size = "md",
  loading = false,
}: BlogArticleCardProps) => {
  switch (size) {
    case "md":
      return (
        <div className="bg-white" tw="w-full h-fit p-3">
          <div tw="relative w-full h-20 mb-2">
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="100%"
              loadingWidth="100%"
            >
              <div className="fx-grain-5" tw="w-full h-full">
                <Image
                  src={thumbnailImage}
                  alt="Article Image"
                  fill
                  tw="object-cover"
                />
              </div>
            </LoadingBlinkBox>
          </div>
          <div tw="mb-2">
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="1rem"
              loadingWidth="25%"
            >
              <p className="tp-info text-base3">{category}</p>
            </LoadingBlinkBox>
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="2rem"
              loadingWidth="100%"
            >
              <p
                className="tp-h6 text-base2"
                tw="line-clamp-2 whitespace-pre-wrap"
              >
                {title}
              </p>
            </LoadingBlinkBox>
          </div>
          <LoadingBlinkBox
            loading={loading}
            loadingHeight="6rem"
            loadingWidth="100%"
          >
            <p
              className="tp-body"
              tw="mb-6 text-ellipsis line-clamp-3 whitespace-pre-wrap"
            >
              {description}
            </p>
          </LoadingBlinkBox>
          <LoadingBlinkBox
            loading={loading}
            loadingHeight="3rem"
            loadingWidth="66%"
          >
            <Button
              as="a"
              variant="secondary"
              size="lg"
              kind="gradient"
              href={blogArticleUrl}
            >
              Read me
            </Button>
          </LoadingBlinkBox>
        </div>
      );
    case "lg":
      return (
        <div className="bg-white" tw="w-full h-fit p-3">
          <div tw="relative w-full h-48 mb-2">
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="100%"
              loadingWidth="100%"
            >
              <div className="fx-grain-5" tw="w-full h-full">
                <Image src={thumbnailImage} alt="Article Image" fill />
              </div>
            </LoadingBlinkBox>
          </div>

          <div tw="mb-2 md:max-w-[75%]">
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="1rem"
              loadingWidth="25%"
            >
              <p className="tp-info text-base3">{category}</p>
            </LoadingBlinkBox>
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="2rem"
              loadingWidth="100%"
            >
              <p
                className="tp-h6 text-base2"
                tw="line-clamp-2 whitespace-pre-wrap"
              >
                {title}
              </p>
            </LoadingBlinkBox>
          </div>
          <LoadingBlinkBox
            loading={loading}
            loadingHeight="6rem"
            loadingWidth="100%"
          >
            <p
              className="tp-body"
              tw="md:max-w-[66%] mb-6 text-ellipsis line-clamp-3 whitespace-pre-wrap"
            >
              {description}
            </p>
          </LoadingBlinkBox>
          <LoadingBlinkBox
            loading={loading}
            loadingHeight="3rem"
            loadingWidth="66%"
          >
            <Button
              as="a"
              variant="secondary"
              size="lg"
              kind="gradient"
              href={blogArticleUrl}
            >
              Read me
            </Button>
          </LoadingBlinkBox>
        </div>
      );
    case "xl":
      return (
        <div className="bg-white" tw="w-full h-fit p-6">
          <div tw="relative w-full h-48 mb-6">
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="100%"
              loadingWidth="100%"
            >
              <div className="fx-grain-5" tw="w-full h-full">
                <Image src={thumbnailImage} alt="Article Image" fill />
              </div>
            </LoadingBlinkBox>
          </div>
          <div tw="mb-4">
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="1rem"
              loadingWidth="25%"
            >
              <p className="tp-info text-base3">{category}</p>
            </LoadingBlinkBox>
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="4rem"
              loadingWidth="100%"
            >
              <TextGradient
                type="h2"
                className="xs:tp-h4 xl:tp-h2"
                tw="mb-0 line-clamp-3 w-fit"
              >
                {title}
              </TextGradient>
              <p
                className="tp-h7 text-base2"
                tw="text-ellipsis line-clamp-2 whitespace-pre-wrap"
              >
                {headline}
              </p>
            </LoadingBlinkBox>
          </div>
          <LoadingBlinkBox
            loading={loading}
            loadingHeight="6rem"
            loadingWidth="100%"
          >
            <p
              className="tp-body"
              tw="md:max-w-[33%] mb-12 text-ellipsis line-clamp-3 whitespace-pre-wrap"
            >
              {description}
            </p>
          </LoadingBlinkBox>
          <LoadingBlinkBox
            loading={loading}
            loadingHeight="3rem"
            loadingWidth="66%"
          >
            <Button
              as="a"
              variant="secondary"
              size="lg"
              kind="gradient"
              href={blogArticleUrl}
            >
              Read me
            </Button>
          </LoadingBlinkBox>
        </div>
      );
    case "full":
      const imageCmpFull = (
        <LoadingBlinkBox
          loading={loading}
          loadingHeight="100%"
          loadingWidth="100%"
        >
          <div tw="relative w-full h-full flex justify-center">
            <Image src={"/blog/feature-image.svg"} alt="Article Image" fill />
          </div>
        </LoadingBlinkBox>
      );

      return (
        <div className="fx-grain-2" tw="w-full h-fit p-12">
          <div tw="mb-2">
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="1rem"
              loadingWidth="25%"
            >
              <p className="tp-info text-base3">{category}</p>
            </LoadingBlinkBox>
            <LoadingBlinkBox
              loading={loading}
              loadingHeight="6rem"
              loadingWidth="100%"
            >
              <TextGradient type="h2" tw="line-clamp-2 w-fit">
                {title}
              </TextGradient>
            </LoadingBlinkBox>
          </div>
          <Row xs={1} lg={2} gap="1.5rem">
            <Col>
              <div tw="flex flex-col justify-between h-full">
                <div>
                  <LoadingBlinkBox
                    loading={loading}
                    loadingHeight="4rem"
                    loadingWidth="100%"
                  >
                    <p
                      className="tp-h7 text-base2"
                      tw="mb-4 text-ellipsis line-clamp-2"
                    >
                      {headline}
                    </p>
                  </LoadingBlinkBox>
                  <div tw="lg:hidden w-full h-96 mb-12">{imageCmpFull}</div>
                  <LoadingBlinkBox
                    loading={loading}
                    loadingHeight="6rem"
                    loadingWidth="66%"
                  >
                    <p
                      className="tp-body"
                      tw="md:max-w-[66%] mb-12 text-ellipsis line-clamp-3"
                    >
                      {description}
                    </p>
                  </LoadingBlinkBox>
                </div>
                <div>
                  <LoadingBlinkBox
                    loading={loading}
                    loadingHeight="3rem"
                    loadingWidth="50%"
                  >
                    <Button
                      as="a"
                      variant="secondary"
                      size="lg"
                      kind="gradient"
                      href={blogArticleUrl}
                    >
                      Read me
                    </Button>
                  </LoadingBlinkBox>
                </div>
              </div>
            </Col>
            <Col tw="hidden lg:inline">{imageCmpFull}</Col>
          </Row>
        </div>
      );
    case "highlighted":
      const imageCmpHighlighted = (
        <LoadingBlinkBox
          loading={loading}
          loadingHeight="100%"
          loadingWidth="100%"
        >
          <div tw="relative w-full h-full flex justify-center">
            <Image src={featureImage} alt="Article Image" fill />
          </div>
        </LoadingBlinkBox>
      );

      return (
        <div tw="w-full h-fit py-10">
          <Row xs={1} lg={3} gap="1.5rem">
            <Col lg={2}>
              <div tw="mb-2">
                <LoadingBlinkBox
                  loading={loading}
                  loadingHeight="1rem"
                  loadingWidth="25%"
                >
                  <p className="tp-info text-base3">{category}</p>
                </LoadingBlinkBox>
                <LoadingBlinkBox
                  loading={loading}
                  loadingHeight="6rem"
                  loadingWidth="100%"
                >
                  <TextGradient
                    type="h2"
                    className="tp-h1 lg:tp-header"
                    tw="line-clamp-3 w-fit mb-0"
                  >
                    {title}
                  </TextGradient>
                </LoadingBlinkBox>
                <LoadingBlinkBox
                  loading={loading}
                  loadingHeight="4rem"
                  loadingWidth="100%"
                >
                  <p
                    className="tp-h7 text-base2"
                    tw="text-ellipsis line-clamp-2"
                  >
                    {headline}
                  </p>
                </LoadingBlinkBox>
              </div>
              <div tw="lg:hidden w-full h-96 mb-12">{imageCmpHighlighted}</div>
              <div tw="flex flex-col justify-between gap-6">
                <div tw="lg:max-w-[66%] mb-6">
                  <LoadingBlinkBox
                    loading={loading}
                    loadingHeight="6rem"
                    loadingWidth="100%"
                  >
                    <p className="tp-body" tw="text-ellipsis line-clamp-3">
                      {description}
                    </p>
                  </LoadingBlinkBox>
                </div>
                <div tw="flex gap-6">
                  <LoadingBlinkBox
                    loading={loading}
                    loadingHeight="3rem"
                    loadingWidth="50%"
                  >
                    <Button
                      as="a"
                      variant="primary"
                      size="lg"
                      kind="gradient"
                      href={blogArticleUrl}
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
                      All {category}
                      <Icon name="arrow-right" size="sm" />
                    </Button>
                  </LoadingBlinkBox>
                </div>
              </div>
            </Col>
            <Col tw="hidden lg:inline">{imageCmpHighlighted}</Col>
          </Row>
        </div>
      );
  }
};

export default BlogArticleCard;
