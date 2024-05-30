import { fetchBuilderData } from "@/utils/fetchBuilderData";
import { BuilderContent } from "@builder.io/sdk";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface FetchBuilderContentArgs {
  pageModel: string;
  preloadedPage: BuilderContent | null;
  fetchContentFrom?: string;
}

interface FetchBuilderContentResponse {
  content: BuilderContent | null;
  isUpToDate: boolean;
  isNotFound: boolean;
  loading: boolean;
}

export function useFetchBuilderContent({
  pageModel,
  preloadedPage,
  fetchContentFrom,
}: FetchBuilderContentArgs): FetchBuilderContentResponse {
  const [content, setContent] = useState<BuilderContent | null>(preloadedPage);
  const [isUpToDate, setIsUpToDate] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  return { content, isUpToDate, isNotFound, loading };
}
