import React from "react";
import { builder } from "@builder.io/react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage, { DynamicPageProps } from "@/pages/_dynamicPage";

const PAGE_MODEL = "blog-article";

export const getStaticProps: GetStaticProps = (async ({ params }) => {
  const page = await builder
    .get(PAGE_MODEL, {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  const pageProps: DynamicPageProps = {
    page: page || null,
  };

  return {
    props: pageProps,
  };
}) satisfies GetStaticProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await builder.getAll(PAGE_MODEL, {
    fields: "data.url",
    options: { noTargeting: true },
  });

  const paths = pages
    .map((page) => {
      const urlPath = page.data?.url?.split("/").filter(Boolean);
      if (urlPath && urlPath.length > 0) {
        return {
          params: { blogArticle: urlPath[urlPath.length - 1] },
        };
      }
      return null;
    })
    .filter(
      (path): path is { params: { blogArticle: string } } => path !== null
    );

  return {
    paths,
    fallback: false,
  };
};

export default function Page(props: DynamicPageProps) {
  return <DynamicPage {...props} />;
}
