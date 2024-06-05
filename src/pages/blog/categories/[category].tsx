import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import DynamicPage, { DynamicPageProps } from "@/pages/_dynamicPage";
import { fetchAllCategories } from "@/utils/blog/fetchAllCategories";
import { calculateCategorization } from "@/utils/blog/calculateCategorization";
import { fetchBuilderData } from "@/utils/fetchBuilderData";

const PAGE_MODEL = "page";
const FETCH_CONTENT_FROM = "/templates/blog/categories/category";

export const getStaticProps: GetStaticProps = (async ({ params }) => {
  let metadata: any = null;

  try {
    const path = `/blog/categories/${params!.category}`;
    const { id } = calculateCategorization(path)!;
    const allCategories = await fetchAllCategories();
    const category = allCategories.find((tag) => tag.id === id)!;

    metadata = category.metadata;
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
    fetchContentFrom: FETCH_CONTENT_FROM,
    pageMetadata: metadata || null,
  };

  return {
    props: pageProps,
  };
}) satisfies GetStaticProps;

export const getStaticPaths = (async () => {
  const blogCategories = await fetchAllCategories();
  const blogCategoriesPages = blogCategories.map((blogCategory) => {
    return `${blogCategory.id}`;
  });

  return {
    paths: blogCategoriesPages.map((blogCategoryPage) => ({
      params: { category: blogCategoryPage },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default function Page(props: DynamicPageProps) {
  return <DynamicPage {...props} />;
}
