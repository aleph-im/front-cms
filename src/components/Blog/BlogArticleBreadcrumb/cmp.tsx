import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { StyledBlogArticleBreadcrumb } from "./styles";
import { BlogArticleBreadcrumbProps } from "./types";
import { builder } from "@builder.io/sdk";
import { useRouter } from "next/router";

export const BlogArticleBreadcrumb = (props: BlogArticleBreadcrumbProps) => {
  const [currentPage, setCurrentPage] = useState<any>();
  const [links, setLinks] = useState<ReactNode[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function getCurrentBlogArticlePage() {
      const page = await builder
        .get("blog-article", {
          userAttributes: {
            urlPath: router.asPath,
          },
          includeRefs: true,
        })
        .toPromise();

      setCurrentPage(page);
    }

    getCurrentBlogArticlePage();
  }, [router.asPath]);

  useEffect(() => {
    const BASE_LINKS: ReactNode[] = [
      <Link href="/" key="home">
        Home
      </Link>,
      <Link href="/blog" key="blog">
        Blog
      </Link>,
      <Link href="/blog/categories" key="categories">
        Categories
      </Link>,
    ];

    if (!currentPage) return setLinks(BASE_LINKS);

    const articleCategory = currentPage.data?.category.value.data;
    const newLinks: ReactNode[] = [
      ...BASE_LINKS,
      <Link
        href={`/blog/categories/${articleCategory.id}`}
        key={articleCategory.id}
      >
        {articleCategory.displayName}
      </Link>,
    ];

    setLinks(newLinks);
  }, [currentPage]);

  return <StyledBlogArticleBreadcrumb navLinks={links} {...props} />;
};

export default BlogArticleBreadcrumb;
