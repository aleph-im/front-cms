import React from "react";
import { Col, Row } from "@aleph-front/core";
import { BlogArticleCardProps } from "./types";
import Title from "./Title";
import Description from "./Description";
import Headline from "./Headline";
import ThumbnailImage from "./ThumbnailImage";
import FeatureImage from "./FeatureImage";
import Category from "./Category";
import ActionButtons from "./ActionButtons";
import { CardWrapper, HeaderWrapper, ThumbnailImageWrapper } from "./styles";

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
    case "full":
      return (
        <CardWrapper size={size} className="fx-grain-2">
          <div tw="mb-2">
            <Category loading={loading}>{category?.displayName}</Category>
            <Title size={size} loading={loading}>
              {title}
            </Title>
          </div>
          <Row xs={1} lg={2} gap="1.5rem">
            <Col>
              <div tw="flex flex-col justify-between h-full">
                <div>
                  <Headline size={size} loading={loading}>
                    {headline}
                  </Headline>
                  <div tw="lg:hidden w-full mb-8 mt-4">
                    <FeatureImage src={featureImage} loading={loading} />
                  </div>
                  <Description size={size} loading={loading}>
                    {description}
                  </Description>
                </div>
                <div>
                  <ActionButtons
                    size={size}
                    blogArticleUrl={blogArticleUrl}
                    category={category}
                    loading={loading}
                  />
                </div>
              </div>
            </Col>
            <Col tw="hidden lg:inline">
              <FeatureImage src={featureImage} loading={loading} />
            </Col>
          </Row>
        </CardWrapper>
      );
    case "highlighted":
      return (
        <CardWrapper size={size}>
          <Row xs={1} lg={3} gap="1.5rem">
            <Col lg={2}>
              <div tw="mb-2">
                <Category loading={loading}>{category?.displayName}</Category>
                <Title size={size} loading={loading}>
                  {title}
                </Title>
                <Headline size={size} loading={loading}>
                  {headline}
                </Headline>
              </div>
              <div tw="lg:hidden w-full mb-8 mt-4">
                <FeatureImage src={featureImage} loading={loading} />
              </div>
              <div tw="flex flex-col justify-between gap-6">
                <Description size={size} loading={loading}>
                  {description}
                </Description>
                <ActionButtons
                  size={size}
                  blogArticleUrl={blogArticleUrl}
                  category={category}
                  loading={loading}
                />
              </div>
            </Col>
            <Col tw="hidden lg:inline">
              <FeatureImage src={featureImage} loading={loading} />
            </Col>
          </Row>
        </CardWrapper>
      );
    default:
      return (
        <CardWrapper size={size} className="bg-white">
          <ThumbnailImageWrapper size={size}>
            <ThumbnailImage src={thumbnailImage} loading={loading} />
          </ThumbnailImageWrapper>
          <HeaderWrapper size={size}>
            <Category loading={loading}>{category?.displayName}</Category>
            <Title size={size} loading={loading}>
              {title}
            </Title>
            {size === "xl" && (
              <Headline size={size} loading={loading}>
                {headline}
              </Headline>
            )}
          </HeaderWrapper>
          <Description size={size} loading={loading}>
            {description}
          </Description>
          <ActionButtons
            size={size}
            blogArticleUrl={blogArticleUrl}
            category={category}
            loading={loading}
          />
        </CardWrapper>
      );
  }
};

export default BlogArticleCard;
