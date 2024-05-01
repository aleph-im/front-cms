import { StyledTag } from "./styles";
import { TagProps } from "./types";

export const Tag = (props: TagProps) => {
  return <StyledTag {...props} />;
};

export default Tag;
