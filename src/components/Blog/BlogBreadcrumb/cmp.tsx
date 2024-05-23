import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { StyledBlogBreadcrumb } from "./styles";
import { BlogBreadcrumbProps } from "./types";
import { useGetPageCategorization } from "@/hooks/blog/useGetPageCategorization";
import { fetchAllCategories } from "@/utils/blog/fetchAllCategories";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";

export const BlogBreadcrumb = (props: BlogBreadcrumbProps) => {
  const DEFAULT_CATEGORIZATION_TYPE = "Classification Type";
  const DEFAULT_CATEGORIZATION_DISPLAY_NAME = "Classification Display Name";
  const DEFAULT_CATEGORIZATION_ID = "category";

  const [links, setLinks] = useState<ReactNode[]>([]);
  const pageCategorization = useGetPageCategorization();

  useEffect(() => {
    const BASE_LINKS: ReactNode[] = [
      <Link href="/" key="home">
        Home
      </Link>,
      <Link href="/blog" key="blog">
        Blog
      </Link>,
    ];

    async function fetchCategorizationDisplayName() {
      let allCategorizations = undefined;

      switch (pageCategorization?.type) {
        case "categories":
          allCategorizations = await fetchAllCategories();
          break;
        case "tags":
          allCategorizations = await fetchAllTags();
          break;
      }

      const currentClassification = allCategorizations?.find(
        (categorization) => {
          return categorization.id == pageCategorization?.id;
        }
      );

      return (
        currentClassification?.displayName ||
        DEFAULT_CATEGORIZATION_DISPLAY_NAME
      );
    }

    async function calculateCategorizationLinks() {
      const categorizationDisplayName = await fetchCategorizationDisplayName();
      const categorizationType =
        pageCategorization?.type || DEFAULT_CATEGORIZATION_TYPE;
      const categorizationId =
        pageCategorization?.id || DEFAULT_CATEGORIZATION_ID;

      const newLinks: ReactNode[] = [
        ...BASE_LINKS,
        <Link href={`/blog/${categorizationType}`} key={categorizationType}>
          {categorizationType}
        </Link>,
        <Link
          href={`/blog/${categorizationType}/${categorizationId}`}
          key={categorizationId}
        >
          {categorizationDisplayName}
        </Link>,
      ];

      setLinks(newLinks);
    }

    calculateCategorizationLinks();
  }, [pageCategorization]);

  return <StyledBlogBreadcrumb navLinks={links} {...props} />;
};

export default BlogBreadcrumb;
