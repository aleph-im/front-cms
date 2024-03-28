import React from "react";
import { builder } from "@builder.io/react";
import { GetStaticProps } from "next";
import DynamicPage from "./_dynamicPage";

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
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

    // @note: Needed by output: "export"
    // Revalidate the content every 5 seconds
    // revalidate: 5,
  };
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  console.log(pages
    .map((page) => String(page.data?.url)))
  // Generate the static paths for all pages in Builder
  return {
    paths: pages
      .map((page) => String(page.data?.url)),
    // .filter((url) => url !== "/"),
    // @note: Needed by output: "export"
    // fallback: "blocking",
    fallback: false,
  };
}

// Define the Page component
export default function Page(props: any) {
  console.log('SSG PAGE')
  return <DynamicPage {...props} />
}