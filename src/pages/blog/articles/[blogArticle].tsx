import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage, { DynamicPageProps } from "@/pages/_dynamicPage";
import { fetchBuilderData } from "@/utils/fetchBuilderData";
import { buildArticleSchemaMarkup } from "@/utils/blog/buildArticleSchemaMarkup";

const PAGE_MODEL = "blog-article";

export const getStaticProps: GetStaticProps = (async ({ params }) => {
  const page = await fetchBuilderData("get", [
    PAGE_MODEL,
    {
      userAttributes: {
        urlPath: params?.blogArticle
          ? `/blog/articles/${params.blogArticle}`
          : "",
      },
    },
  ]);

  const pageProps: DynamicPageProps = {
    page: page || null,
    pageMetadata: {
      schemaMarkup: buildArticleSchemaMarkup(page),
    },
  };

  return {
    props: pageProps,
  };
}) satisfies GetStaticProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await fetchBuilderData("getAll", [
    PAGE_MODEL,
    {
      fields: "data.url",
      options: { noTargeting: true },
    },
  ]);

  const paths = pages
    .map((page: any) => {
      const urlPath = page.data?.url?.split("/").filter(Boolean);
      if (urlPath && urlPath.length > 0) {
        return {
          params: { blogArticle: urlPath[urlPath.length - 1] },
        };
      }
      return null;
    })
    .filter(
      (path: any): path is { params: { blogArticle: string } } => path !== null
    );

  return {
    paths,
    fallback: false,
  };
};

export default function Page(props: DynamicPageProps) {
  return <DynamicPage {...props} />;
}
