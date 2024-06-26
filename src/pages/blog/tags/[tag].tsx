import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage, { DynamicPageProps } from "@/pages/_dynamicPage";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";
import { calculateCategorization } from "@/utils/blog/calculateCategorization";
import { fetchBuilderData } from "@/utils/fetchBuilderData";
import { TAG_PAGE_TEMPLATE_PATH } from "@/constants/blog";

const PAGE_MODEL = "page";

export const getStaticProps: GetStaticProps = (async ({ params }) => {
  let metadata: any = null;

  try {
    const path = `/blog/tags/${params!.tag}`;
    const { id } = calculateCategorization(path)!;
    const allTags = await fetchAllTags();
    const tag = allTags.find((tag) => tag.id === id)!;

    metadata = tag.metadata;
  } catch (error) {
    console.error(error);
  }

  const page = await fetchBuilderData("get", [
    PAGE_MODEL,
    {
      userAttributes: {
        urlPath: TAG_PAGE_TEMPLATE_PATH,
      },
    },
  ]);

  const pageProps: DynamicPageProps = {
    page: page || null,
    pageMetadata: metadata || null,
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
