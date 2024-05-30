import { useCallback, useEffect, useRef, useState } from "react";
import { GetContentOptions } from "@builder.io/sdk";
import { fetchBuilderData } from "@/utils/fetchBuilderData";

interface UseFetchBlogArticlesArgs {
  builderRequestOptions: GetContentOptions;
  articlesPerPage: number;
  validBlogArticlesFilter: (article: any) => boolean;
}

interface UseFetchBlogArticlesResponse {
  blogArticles?: Array<any>;
  loading: boolean;
  allArticlesLoaded: boolean;
  continueFetchingBlogArticles: () => void;
  restartBlogArticlesSearch: () => void;
}

const useFetchBlogArticles = ({
  builderRequestOptions,
  articlesPerPage,
  validBlogArticlesFilter,
}: UseFetchBlogArticlesArgs): UseFetchBlogArticlesResponse => {
  const [blogArticles, setBlogArticles] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const allArticlesLoaded = useRef(false);
  const offsetRef = useRef(0);

  const fetchBlogArticles = useCallback(async () => {
    setLoading(true);

    const FETCH_LIMIT = 100;
    let continueFetching = true;
    let newOffset = offsetRef.current;

    while (continueFetching) {
      const fetchedBlogArticles = await fetchBuilderData("getAll", [
        "blog-article",
        {
          ...builderRequestOptions,
          limit: FETCH_LIMIT,
          options: {
            ...builderRequestOptions.options,
            offset: newOffset,
          },
        },
      ]);

      if (!fetchedBlogArticles || fetchedBlogArticles.length === 0) {
        allArticlesLoaded.current = true;
        continueFetching = false;
      } else {
        const filteredBlogArticles = fetchedBlogArticles.filter(
          validBlogArticlesFilter
        );

        let validBlogArticles = filteredBlogArticles;
        let nextValidBlogArticleIndex = undefined;
        if (filteredBlogArticles.length > articlesPerPage) {
          nextValidBlogArticleIndex = fetchedBlogArticles.indexOf(
            validBlogArticles[articlesPerPage]
          );
          validBlogArticles = validBlogArticles.slice(0, articlesPerPage);
        }

        setBlogArticles((prevAllBlogArticles) =>
          prevAllBlogArticles.concat(
            validBlogArticles.map(
              (validBlogArticle: any) => validBlogArticle.data
            )
          )
        );

        if (nextValidBlogArticleIndex) {
          newOffset += nextValidBlogArticleIndex;
          allArticlesLoaded.current = false;
        } else {
          newOffset += FETCH_LIMIT;
          allArticlesLoaded.current = fetchedBlogArticles.length < FETCH_LIMIT;
        }

        offsetRef.current = newOffset;
        continueFetching =
          !allArticlesLoaded.current &&
          validBlogArticles.length < articlesPerPage;
      }
    }

    setLoading(false);
  }, [articlesPerPage, builderRequestOptions, validBlogArticlesFilter]);

  const restartBlogArticlesSearch = useCallback(async () => {
    allArticlesLoaded.current = false;
    offsetRef.current = 0;
    setBlogArticles([]);
    fetchBlogArticles();
  }, [fetchBlogArticles]);

  useEffect(() => {
    fetchBlogArticles();
  }, [fetchBlogArticles]);

  return {
    blogArticles,
    loading,
    allArticlesLoaded: allArticlesLoaded.current,
    continueFetchingBlogArticles: fetchBlogArticles,
    restartBlogArticlesSearch,
  };
};

export default useFetchBlogArticles;
