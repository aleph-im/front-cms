import { StyledTag } from "./styles";
import { BlockTagProps } from "./types";

export default function BlockTag({ title, content, ...rest }: BlockTagProps) {
  return (
    <StyledTag tw="mb-12 py-3.5" {...rest}>
      <h3 className="tp-h7 mb-2">{title}</h3>
      <p tw="m-0">{content}</p>
    </StyledTag>
  );
}
