import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import { StyledDescription } from "./styles";

export const Description = ({
  children,
  size,
  loading,
}: {
  children: React.ReactNode;
  size: string;
  loading: boolean;
}) => {
  return (
    <LoadingBlinkBox loading={loading} loadingHeight="6rem" loadingWidth="100%">
      <StyledDescription size={size}>{children}</StyledDescription>
    </LoadingBlinkBox>
  );
};

export default Description;
