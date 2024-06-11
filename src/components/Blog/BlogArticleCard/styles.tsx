import styled from "styled-components";
import tw from "twin.macro";

export const CardWrapper = styled.div<{ size: string }>`
  ${tw`w-full h-fit`}
  ${({ size }) => {
    if (size === "md" || size === "lg") return tw`p-3`;
    else if (size === "xl") return tw`p-6`;
    else if (size === "full") return tw`p-12`;
    else if (size === "highlighted") return tw`py-10`;
  }}
`;

export const ThumbnailImageWrapper = styled.div<{ size: string }>`
  ${tw`relative w-full`}
  ${({ size }) => {
    switch (size) {
      case "md":
        return tw`h-20 mb-2`;
      case "lg":
        return tw`h-48 mb-2`;
      case "xl":
        return tw`h-48 mb-6`;
    }
  }}
`;

export const HeaderWrapper = styled.div<{ size: string }>`
  ${({ size }) => {
    if (size === "md" || size === "lg") return tw`mb-2`;
    else if (size === "xl") return tw`mb-4`;
  }}
`;
