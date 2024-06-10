import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import { useGetPageCategorization } from "@/hooks/blog/useGetPageCategorization";
import { fetchAllCategories } from "@/utils/blog/fetchAllCategories";
import { fetchAllTags } from "@/utils/blog/fetchAllTags";
import { useEffect, useState } from "react";

const DEFAULT_DISPLAY_NAME = "Categorization Display Name";

export const CategorizationDisplayName = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categorizationDisplayName, setCategorizationDisplayName] =
    useState<string>(DEFAULT_DISPLAY_NAME);
  const pageCategorization = useGetPageCategorization();

  useEffect(() => {
    async function fetchCategorizationDisplayName() {
      setLoading(true);

      try {
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
      } catch (error) {
        console.error("Error fetching categorization display name", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategorizationDisplayName();
  }, [pageCategorization]);

  return (
    <LoadingBlinkBox
      loading={loading}
      loadingHeight="2rem"
      loadingWidth="16rem"
    >
      {categorizationDisplayName}
    </LoadingBlinkBox>
  );
};

export default CategorizationDisplayName;
