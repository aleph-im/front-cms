import LoadingBlinkBox from "@/components/LoadingBlinkBox";

export const Category = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  return (
    <LoadingBlinkBox loading={loading} loadingHeight="1rem" loadingWidth="25%">
      <p className="tp-info text-base3">{children}</p>
    </LoadingBlinkBox>
  );
};

export default Category;
