import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import { StyledHeadline } from "./styles";

export const Headline = ({
  children,
  size,
  loading,
}: {
  children: React.ReactNode;
  size: string;
  loading: boolean;
}) => {
  return (
    <LoadingBlinkBox loading={loading} loadingHeight="3rem" loadingWidth="100%">
      <StyledHeadline size={size}>{children}</StyledHeadline>
    </LoadingBlinkBox>
  );
};

export default Headline;
