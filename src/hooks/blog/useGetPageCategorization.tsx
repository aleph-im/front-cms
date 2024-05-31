import { PageCategorizationProps } from "@/types/blog/PageCategorizationProps";
import { calculateCategorization } from "@/utils/blog/calculateCategorization";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useGetPageCategorization = (): PageCategorizationProps => {
  const router = useRouter();

  const getCategorization = useMemo((): PageCategorizationProps => {
    return calculateCategorization(router.asPath);
  }, [router.asPath]);

  return getCategorization;
};
