import { GetContentOptions } from "@builder.io/sdk";

export const DEFAULT_BUILDER_REQUEST_OPTIONS: GetContentOptions = {
  fields:
    "data.title,data.description,data.headline,data.thumbnailImage,data.featureImage,data.url,data.category,data.tags",
  sort: { firstPublished: -1 },
  options: { noTargeting: true, includeRefs: true },
};

export const CATEGORY_PAGE_TEMPLATE_PATH =
  "/templates/blog/categories/category";
export const TAG_PAGE_TEMPLATE_PATH = "/templates/blog/tags/tag";
