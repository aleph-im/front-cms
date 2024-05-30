import { BlogCategoryProps } from "@/types/blog/BlogCategoryProps";
import { fetchBuilderData } from "../fetchBuilderData";

export const fetchAllCategories = async () => {
  const allCategories = new Set<BlogCategoryProps>();
  const FETCH_LIMIT = 100;
  let offset = 0;
  let continueFetching = true;

  while (continueFetching) {
    const blogCategories = await fetchBuilderData("getAll", [
      "blog-category",
      {
        limit: FETCH_LIMIT,
        options: {
          noTargeting: true,
          offset: offset,
        },
      },
    ]);

    if (!blogCategories || blogCategories.length === 0) {
      continueFetching = false;
    } else {
      continueFetching = blogCategories.length === FETCH_LIMIT;

      blogCategories.forEach((blogCategory: any) => {
        allCategories.add({
          id: blogCategory.data?.id,
          displayName: blogCategory.data?.displayName,
        });
      });

      offset += FETCH_LIMIT;
    }
  }

  return Array.from(allCategories);
};
