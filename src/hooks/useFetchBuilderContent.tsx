import {
  CATEGORY_PAGE_TEMPLATE_PATH,
  TAG_PAGE_TEMPLATE_PATH,
} from "@/constants/blog";
import { fetchBuilderData } from "@/utils/fetchBuilderData";
import { BuilderContent } from "@builder.io/sdk";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

interface FetchBuilderContentArgs {
  preloadedPage: BuilderContent | null;
}

interface FetchBuilderContentResponse {
  pageModel: "page" | "blog-article" | "symbol";
  content: BuilderContent | null;
  isUpToDate: boolean;
  isNotFound: boolean;
  loading: boolean;
}

export function useFetchBuilderContent({
  preloadedPage,
}: FetchBuilderContentArgs): FetchBuilderContentResponse {
  const [content, setContent] = useState<BuilderContent | null>(preloadedPage);
  const [isUpToDate, setIsUpToDate] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchContentFrom = useMemo(() => {
    const [urlPath, _hash] = router.asPath.split("#") || "/";

    const categoryRegex = /^\/blog\/categories\/[^\/]+\/$/;
    const tagRegex = /^\/blog\/tags\/[^\/]+\/$/;

    if (categoryRegex.test(urlPath)) return CATEGORY_PAGE_TEMPLATE_PATH;
    else if (tagRegex.test(urlPath)) return TAG_PAGE_TEMPLATE_PATH;
    else return urlPath;
  }, [router.asPath]);

  const pageModel = useMemo(() => {
    if (fetchContentFrom.startsWith("/blog/articles/")) return "blog-article";
    else if (fetchContentFrom.startsWith("/edit-symbol")) return "symbol";
    else return "page";
  }, [fetchContentFrom]);

  const fetchBuilderContent = useCallback(async () => {
    try {
      setLoading(true);

      const fetchedContent = await fetchBuilderData("get", [
        pageModel,
        { userAttributes: { urlPath: fetchContentFrom } },
      ]);

      if (fetchedContent) {
        setContent(fetchedContent);
        setIsUpToDate(true);
        setIsNotFound(false);
      } else if (preloadedPage) {
        setContent(preloadedPage);
        setIsUpToDate(false);
        setIsNotFound(false);
      } else {
        setContent(null);
        setIsUpToDate(false);
        setIsNotFound(true);
      }
    } catch (e) {
      if (preloadedPage) {
        setContent(preloadedPage);
        setIsUpToDate(false);
        setIsNotFound(false);
      } else {
        setContent(null);
        setIsUpToDate(false);
        setIsNotFound(true);
      }
    } finally {
      setLoading(false);
    }
  }, [fetchContentFrom, pageModel, preloadedPage]);

  useEffect(() => {
    fetchBuilderContent();
  }, [fetchBuilderContent]);

  return { pageModel, content, isUpToDate, isNotFound, loading };
}
