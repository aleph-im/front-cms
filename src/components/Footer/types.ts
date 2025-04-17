import { FooterProps as BaseFooterProps } from "@aleph-front/core";

export type FooterProps = {
  small: BaseFooterProps["small"];
  buttons: BaseFooterProps["buttons"];
  media: BaseFooterProps["media"];
  mainLinks: BaseFooterProps["mainLinks"];
  links: BaseFooterProps["links"];
  logo?: {
    byAleph: BaseFooterProps["logoByAleph"];
    href: BaseFooterProps["logoHref"];
    img: BaseFooterProps["logoImg"];
    text: BaseFooterProps["logoText"];
  };
};
