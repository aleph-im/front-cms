import { useRouter } from "next/router";
import { useMemo } from "react";

interface PageCategorizationResponse {
  type: string;
  id: string;
}

export const useGetPageCategorization = ():
  | PageCategorizationResponse
  | undefined => {
  const router = useRouter();

  const getCategorization = useMemo(():
    | PageCategorizationResponse
    | undefined => {
    const routeClassificationMatch = router.asPath.match(
      /^\/blog\/(categories|tags)\/([^\/\?]+)/
    );

    if (!routeClassificationMatch) return;

    return {
      type: routeClassificationMatch[1],
      id: routeClassificationMatch[2],
    };
  }, [router.asPath]);

  return getCategorization;
};
