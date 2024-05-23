import React from "react";
import { builder } from "@builder.io/react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage, { DynamicPageProps } from "./_dynamicPage";

const PAGE_MODEL = "page";

export const getStaticProps: GetStaticProps = (async ({ params }) => {
  const page = await builder
    .get(PAGE_MODEL, {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  const pageProps: DynamicPageProps = {
    pageModel: PAGE_MODEL,
    page: page || null,
  };

  return {
    props: pageProps,
  };
}) satisfies GetStaticProps;

export const getStaticPaths = (async () => {
  const pages = await builder.getAll(PAGE_MODEL, {
    fields: "data.url",
    options: { noTargeting: true },
  });

  const filteredPages = pages.filter(
    (page) => !page.data?.url.startsWith("/dynamic-templates")
  );

  return {
    paths: filteredPages.map((page) => ({
      params: { page: page.data?.url.split("/").filter(Boolean) },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default function Page(props: DynamicPageProps) {
  return <DynamicPage {...props} />;
}
