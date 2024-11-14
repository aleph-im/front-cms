import { getFieldFromSources } from "../getFieldFromSources";

export const buildArticleSchemaMarkup = (page: any) => {
  if (!page) return null;

  const formatDate = (timestamp?: string) =>
    timestamp ? new Date(timestamp).toISOString() : null;

  const typeFromModel = (model: string) => {
    switch (model) {
      case "schema-org-person":
        return "Person";
      case "schema-org-organization":
        return "Organization";
      default:
        return null;
    }
  };

  const getField = (keys: string[]) =>
    getFieldFromSources({ sourcesByPriority: [page], keys });

  const dateModified = formatDate(getField(["lastUpdated"]));
  const datePublished = formatDate(getField(["firstPublished"]));
  const timeRequired = `PT${getField(["data", "metadata", "timeRequired"])}M`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    name: getField(["data", "title"]),
    headline: getField(["data", "headline"]),
    description: getField(["data", "description"]),
    url: getField(["data", "metadata", "canonicalUrl"]),
    mainEntityOfPage: getField(["data", "metadata", "canonicalUrl"]),
    image: getField(["data", "featureImage"]),
    thumbnailUrl: getField(["data", "thumbnailImage"]),
    dateCreated: datePublished,
    datePublished,
    dateModified,
    timeRequired,
    author: {
      "@type": typeFromModel(page.data?.metadata?.author?.model),
      ...getField(["data", "metadata", "author", "value", "data"]),
    },
    publisher: {
      "@type": typeFromModel(page.data?.metadata?.publisher?.model),
      ...getField(["data", "metadata", "publisher", "value", "data"]),
    },
  };
};
