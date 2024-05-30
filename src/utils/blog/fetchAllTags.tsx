import { BlogTagProps } from "@/types/blog/BlogTagProps";
import { fetchBuilderData } from "../fetchBuilderData";

export const fetchAllTags = async () => {
  const allTags = new Set<BlogTagProps>();
  const FETCH_LIMIT = 100;
  let offset = 0;
  let continueFetching = true;

  while (continueFetching) {
    const dataTags = await fetchBuilderData("getAll", [
      "blog-tag",
      {
        limit: FETCH_LIMIT,
        options: {
          noTargeting: true,
          offset: offset,
        },
      },
    ]);

    if (!dataTags || dataTags.length === 0) {
      continueFetching = false;
    } else {
      continueFetching = dataTags.length === FETCH_LIMIT;

      dataTags.forEach((dataTag: any) => {
        allTags.add({
          id: dataTag.data?.id,
          displayName: dataTag.data?.displayName,
        });
      });

      offset += FETCH_LIMIT;
    }
  }

  return Array.from(allTags);
};
