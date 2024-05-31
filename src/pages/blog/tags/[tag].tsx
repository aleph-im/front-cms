import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage, { DynamicPageProps } from "@/pages/_dynamicPage";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";
import { calculateCategorization } from "@/utils/blog/calculateCategorization";
import { fetchBuilderData } from "@/utils/fetchBuilderData";

const PAGE_MODEL = "page";
const FETCH_CONTENT_FROM = "/templates/blog/tags/tag";

export const getStaticProps: GetStaticProps = (async ({ params }) => {
  let pageTitle = null;
  let pageDescription = null;

  try {
    const path = `/blog/tags/${params!.tag}`;
    const { id } = calculateCategorization(path)!;
    const allTags = await fetchAllTags();
    const { metadata } = allTags.find((tag) => tag.id === id)!;

    pageTitle = metadata.title;
    pageDescription = metadata.description;
  } catch (error) {
    console.error(error);
  }

  const page = await fetchBuilderData("get", [
    PAGE_MODEL,
    {
      userAttributes: {
        urlPath: FETCH_CONTENT_FROM,
      },
    },
  ]);

  const pageProps: DynamicPageProps = {
    page: page || null,
    pageTitle: pageTitle,
    pageDescription: pageDescription,
    fetchContentFrom: FETCH_CONTENT_FROM,
  };

  return {
    props: pageProps,
  };
}) satisfies GetStaticProps;

export const getStaticPaths = (async () => {
  const blogTags = await fetchAllTags();
  const blogTagsPages = blogTags.map((blogTag) => {
    return `${blogTag.id}`;
  });

  return {
    paths: blogTagsPages.map((blogTagPage) => ({
      params: { tag: blogTagPage },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default function Page(props: DynamicPageProps) {
  return <DynamicPage {...props} />;
}
