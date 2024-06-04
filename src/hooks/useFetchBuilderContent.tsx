import { fetchBuilderData } from "@/utils/fetchBuilderData";
import { BuilderContent } from "@builder.io/sdk";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

interface FetchBuilderContentArgs {
  preloadedPage: BuilderContent | null;
  fetchContentFrom?: string;
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
  fetchContentFrom,
}: FetchBuilderContentArgs): FetchBuilderContentResponse {
  const [content, setContent] = useState<BuilderContent | null>(preloadedPage);
  const [isUpToDate, setIsUpToDate] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const pageModel = useMemo(() => {
    const [urlPath, _hash] =
      (fetchContentFrom || router.asPath).split("#") || "/";

    if (urlPath.startsWith("/blog/articles/")) return "blog-article";
    else if (urlPath.startsWith("/edit-symbol")) return "symbol";
    else return "page";
  }, [fetchContentFrom, router.asPath]);

  const fetchBuilderContent = useCallback(async () => {
    const [urlPath, _hash] =
      (fetchContentFrom || router.asPath).split("#") || "/";

    try {
      setLoading(true);

      const fetchedContent = await fetchBuilderData("get", [
        pageModel,
        { userAttributes: { urlPath } },
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
  }, [fetchContentFrom, router.asPath, pageModel, preloadedPage]);

  useEffect(() => {
    fetchBuilderContent();
  }, [fetchBuilderContent]);

  return { pageModel, content, isUpToDate, isNotFound, loading };
}
