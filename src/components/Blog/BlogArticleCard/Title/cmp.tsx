import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import { StyledTitle } from "./styles";

export const Title = ({
  children,
  size,
  loading,
}: {
  children: React.ReactNode;
  size: string;
  loading: boolean;
}) => {
  const loadingHeight = () => {
    if (size === "highlighted" || size === "full") return "6rem";
    if (size === "xl") return "4rem";
    else return "2rem";
  };

  return (
    <LoadingBlinkBox
      loading={loading}
      loadingHeight={loadingHeight()}
      loadingWidth="100%"
    >
      <StyledTitle size={size}>{children}</StyledTitle>
    </LoadingBlinkBox>
  );
};

export default Title;
