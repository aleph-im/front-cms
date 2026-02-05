import { Footer as BaseFooter, LinkComponent } from "@aleph-front/core";
import Link from "next/link";
import { FooterProps } from "./types";

export const Footer = ({
  small = false,
  buttons,
  media,
  mainLinks,
  links,
  logo,
}: FooterProps) => {
  const { byAleph = false, href, img, text } = logo || {};

  const commonProps = {
    Link: Link as LinkComponent,
    media,
    mainLinks,
    logoByAleph: byAleph,
    logoHref: href,
    logoImg: img,
    logoText: text,
  };

  if (small) {
    return <BaseFooter {...commonProps} small />;
  }

  return (
    <BaseFooter
      {...commonProps}
      buttons={buttons ?? []}
      links={links ?? []}
    />
  );
};

export default Footer;
