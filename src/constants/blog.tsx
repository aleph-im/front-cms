import { GetContentOptions } from "@builder.io/sdk";

export const DEFAULT_BUILDER_REQUEST_OPTIONS: GetContentOptions = {
  fields:
    "data.title,data.description,data.headline,data.image,data.url,data.category,data.tags",
  sort: { firstPublished: -1 },
  options: { noTargeting: true, includeRefs: true },
};
