import React from "react";
import { builder } from "@builder.io/react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage from "../_dynamicPage";

const PAGE_MODEL = "blog-article";

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = (async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get(PAGE_MODEL, {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
    },
  };
}) satisfies GetStaticProps;

// Define a function that generates the
// static paths for all pages in Builder
export const getStaticPaths = (async () => {
  // Get a list of all pages in Builder
  const pages = await builder.getAll(PAGE_MODEL, {
    fields: "data.url",
    options: { noTargeting: true },
  });

  // Generate the static paths for all pages in Builder
  return {
    paths: pages.map((page) => ({
      params: { page: page.data?.url.split("/").filter(Boolean) },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

// Define the Page component
export default function Page(props: any) {
  return <DynamicPage pageModel={PAGE_MODEL} {...props} />;
}
