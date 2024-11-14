import Image from "next/image";
import { BlogArticlePublishingInformationProps } from "./types";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { fetchBuilderData } from "@/utils/fetchBuilderData";
import { buildArticleSchemaMarkup } from "@/utils/blog/buildArticleSchemaMarkup";

export const BlogArticlePublishingInformation = ({
  variant,
}: BlogArticlePublishingInformationProps) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<any>();

  const articleSchemaMarkup = useMemo(
    () => buildArticleSchemaMarkup(currentPage),
    [currentPage]
  );

  useEffect(() => {
    async function getCurrentBlogArticlePage() {
      const page = await fetchBuilderData("get", [
        "blog-article",
        {
          userAttributes: {
            urlPath: router.asPath,
          },
          includeRefs: true,
        },
      ]);

      setCurrentPage(page);
    }

    getCurrentBlogArticlePage();
  }, [router.asPath]);

  if (!articleSchemaMarkup) return null;

  const { author, datePublished, timeRequired } = articleSchemaMarkup;

  // timeRequired is in ISO 8601 duration format (but only minutes)
  const readableTimeRequired = timeRequired.match(/PT(\d+)M/)?.[1];

  let title;
  let subtitle;

  switch (variant) {
    case "readTime":
      title = author.name;
      subtitle = (
        <>
          {timeRequired ? `${readableTimeRequired} min. read` : ""}{" "}
          {datePublished ? `- ${datePublished}` : ""}
        </>
      );
      break;
    case "writtenBy":
      title = `Written by ${author.name}`;
      subtitle = author.title;
      break;
  }

  return (
    <div tw="flex flex-row items-center gap-3">
      <Image
        src={author.image}
        alt="Publisher"
        width={32}
        height={32}
        tw="rounded-full"
      />
      <div tw="flex flex-col justify-around">
        <p className="tp-info text-base2 fs-12">{title}</p>
        <p className="tp-body1 text-base2 fs-10">{subtitle}</p>
      </div>
    </div>
  );
};

export default BlogArticlePublishingInformation;
