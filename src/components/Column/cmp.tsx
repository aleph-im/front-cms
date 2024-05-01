import { ColumnProps } from "./types";
import { StyledColumn } from "./styles";

export const Column = (props: ColumnProps) => {
  return <StyledColumn {...props} />;
};

export default Column;
