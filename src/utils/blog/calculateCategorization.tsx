import { PageCategorizationProps } from "@/types/blog/PageCategorizationProps";

export const calculateCategorization = (
  path: string
): PageCategorizationProps => {
  const routeClassificationMatch = path.match(
    /^\/blog\/(categories|tags)\/([^\/\?]+)/
  );

  if (!routeClassificationMatch) return;

  return {
    type: routeClassificationMatch[1],
    id: routeClassificationMatch[2],
  };
};
