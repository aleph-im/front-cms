import { RowProps } from "./types";
import { StyledRow } from "./styles";

export const Row = (props: RowProps) => {
  return <StyledRow {...props} />;
};

export default Row;
