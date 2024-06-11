import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import { BlogCategoryProps } from "@/types/blog/BlogCategoryProps";
import { Button, Icon } from "@aleph-front/core";

export const ActionButtons = ({
  blogArticleUrl,
  category,
  loading,
  size,
}: {
  blogArticleUrl?: string;
  category?: BlogCategoryProps;
  size: string;
  loading: boolean;
}) => {
  if (size === "highlighted")
    return (
      <div tw="flex gap-6">
        <LoadingBlinkBox
          loading={loading}
          loadingHeight="3rem"
          loadingWidth="50%"
        >
          <Button
            as="a"
            variant="primary"
            size="lg"
            kind="gradient"
            href={blogArticleUrl}
          >
            Read the article
          </Button>
          <Button
            as="a"
            href={`/blog/categories/${category?.id}`}
            target="_self"
            size="sm"
            variant="textOnly"
            color="main0"
          >
            All {category?.displayName}
            <Icon name="arrow-right" size="sm" />
          </Button>
        </LoadingBlinkBox>
      </div>
    );
  else
    return (
      <LoadingBlinkBox
        loading={loading}
        loadingHeight="3rem"
        loadingWidth="66%"
      >
        <Button
          as="a"
          variant="secondary"
          size="lg"
          kind="gradient"
          href={blogArticleUrl}
        >
          Read me
        </Button>
      </LoadingBlinkBox>
    );
};

export default ActionButtons;
