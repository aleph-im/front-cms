import React from "react";
import { builder } from "@builder.io/react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage, { DynamicPageProps } from "@/pages/_dynamicPage";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";

const PAGE_MODEL = "page";
const FETCH_CONTENT_FROM = "/dynamic-templates/blog/tags/tag";

export const getStaticProps: GetStaticProps = (async () => {
  const page = await builder
    .get(PAGE_MODEL, {
      userAttributes: {
        urlPath: FETCH_CONTENT_FROM,
      },
      options: { includeUnpublished: true },
    })
    .toPromise();

  const pageProps: DynamicPageProps = {
    page: page || null,
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
