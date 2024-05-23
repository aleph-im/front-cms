import { useGetPageCategorization } from "@/hooks/blog/useGetPageCategorization";
import { fetchAllCategories } from "@/utils/blog/fetchAllCategories";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";
import { useEffect, useState } from "react";

const DEFAULT_DISPLAY_NAME = "Categorization Display Name";

export const CategorizationDisplayName = () => {
  const [categorizationDisplayName, setCategorizationDisplayName] =
    useState<string>(DEFAULT_DISPLAY_NAME);
  const pageCategorization = useGetPageCategorization();

  useEffect(() => {
    async function fetchCategorizationDisplayName() {
      let allCategorizations = undefined;

      switch (pageCategorization?.type) {
        case "categories":
          allCategorizations = await fetchAllCategories();
          break;
        case "tags":
          allCategorizations = await fetchAllTags();
          break;
      }

      const currentCategorization = allCategorizations?.find(
        (categorization) => {
          return categorization.id == pageCategorization?.id;
        }
      );

      setCategorizationDisplayName(
        currentCategorization?.displayName || DEFAULT_DISPLAY_NAME
      );
    }

    fetchCategorizationDisplayName();
  }, [pageCategorization]);

  return categorizationDisplayName;
};

export default CategorizationDisplayName;
